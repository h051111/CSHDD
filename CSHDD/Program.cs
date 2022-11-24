// See https://aka.ms/new-console-template for more information

using System.Text;
using Antlr4.Runtime;
using Antlr4.Runtime.Misc;
using Antlr4.Runtime.Tree;
using CSHDD;
using HDDMin;
using static HDDMin.Utilities;

String inputPath = "C:/Programming/picireny/me/tester2.js";
String pathToTester = "C:/Programming/picireny/me/tester4.py";

String inputText = File.ReadAllText(inputPath);
ICharStream stream = CharStreams.fromString(inputText);

ITokenSource lexer = new JavaScriptLexer(stream);
ITokenStream tokens = new CommonTokenStream(lexer);
JavaScriptParser parser = new JavaScriptParser(tokens) {BuildParseTree = true};

IParseTree tree = parser.program();
JavaScriptListener listener = new JavaScriptListener();

listener.setInputStream(stream);

HDD hdd = new HDD();

HDDTreeNode root = hdd.Reduce(tree, pathToTester, Path.GetFileName(inputPath), stream);
String newSource = TreeToSource(root);

Console.WriteLine("---------------------------------------");
Console.WriteLine("REDUCED TO:");
Console.WriteLine(newSource);
Console.WriteLine("---------------------------------------");

//List<String> buildConfig
