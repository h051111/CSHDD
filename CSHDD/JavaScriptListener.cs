using Antlr4.Runtime;
using Antlr4.Runtime.Misc;
using Antlr4.Runtime.Tree;

namespace CSHDD;

public class JavaScriptListener : JavaScriptParserBaseListener
{
    private ICharStream inputStream;
    private Dictionary<int, List<ParserRuleContext>> levelNodes = new Dictionary<int, List<ParserRuleContext>>();
    public void setInputStream(ICharStream inputStream)
    {
        this.inputStream = inputStream;
    }
    
    public override void EnterAssignmentExpression(JavaScriptParser.AssignmentExpressionContext context)
    {
        //Console.WriteLine("------------------------------------");
        //Console.WriteLine(context.Start.Text);
        //Console.WriteLine("------------------------------------");
    }
    
    public Dictionary<int, List<ParserRuleContext>> getLevels(IParseTree tree)
    {
        ParseTreeWalker.Default.Walk(this, tree);
        return levelNodes;
    }

    private int getHeight(ParserRuleContext context)
    {
        int i = 0;
        RuleContext parent = context.Parent;
        
        while (parent != null)
        {
            parent = parent.Parent;
            i++;
        }

        return i;
    }

    public override void EnterEveryRule(ParserRuleContext context)
    {
        int level = getHeight(context);
        
        if (levelNodes.ContainsKey(level))
        {
            levelNodes[level].Add(context);
        }
        else
        {
            levelNodes.Add(level, new List<ParserRuleContext>());
            levelNodes[level].Add(context);
        }
        
        base.EnterEveryRule(context);
    }
}
