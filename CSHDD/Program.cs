using System.Text;
using Antlr4.Runtime;
using Antlr4.Runtime.Misc;
using Antlr4.Runtime.Tree;
using CSHDD;
using HDDMin;
using static HDDMin.Utilities;


//String inputPath = "C:/Programming/picireny/me/3408-orig.js";
//String pathToTester = "C:/Programming/picireny/me/jerrytester.py";

String inputPath = args[0];
String pathToTester = args[1];

inputPath = Path.GetFullPath(inputPath);
pathToTester = Path.GetFullPath(pathToTester);

int gIndex = args.ToList().IndexOf("-g");
int cIndex = args.ToList().IndexOf("-nc");
int granularity = 2;
bool complementFirst = true;

if(gIndex != -1)
    granularity = int.Parse(args[gIndex + 1]);

if (cIndex != -1)
    complementFirst = false;

String inputText = File.ReadAllText(inputPath);
ICharStream stream = CharStreams.fromString(inputText);

ITokenSource lexer = new JavaScriptLexer(stream);
ITokenStream tokens = new CommonTokenStream(lexer);
JavaScriptParser parser = new JavaScriptParser(tokens) { BuildParseTree = true };

IParseTree tree = parser.program();
JavaScriptListener listener = new JavaScriptListener();

listener.setInputStream(stream);

HDD hdd = new HDD();
hdd.SetGranularity(granularity);
hdd.SetComplementFirst(complementFirst);

HDDTreeNode root = hdd.Reduce(tree, pathToTester, Path.GetFileName(inputPath), stream);
String newSource = TreeToSource(root);

Console.WriteLine("---------------------------------------");
Console.WriteLine("REDUCED TO:");
Console.Write(newSource);
Console.WriteLine(" WITH {0} DD STEPS AND {1} HDD STEPS", hdd.GetDdStepCounter(), hdd.GetHddStepCounter());
Console.WriteLine("---------------------------------------");

//List<String> buildConfig
