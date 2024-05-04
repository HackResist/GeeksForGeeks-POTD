//{ Driver Code Starts
//Initial Template for C#

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DriverCode;

namespace DriverCode
{

    public class GFG
    {
        public static void Main(string[] args)
        {
            int testcases;// Taking testcase as input
            testcases = Convert.ToInt32(Console.ReadLine());
            while (testcases-- > 0)// Looping through all testcases
            {

                int n = Convert.ToInt32(Console.ReadLine());// Input for size of array
                int[] inorder = new int[n];
                string elements = Console.ReadLine().Trim();
                elements = elements + " " + "0";
                inorder = Array.ConvertAll(elements.Split(' '), int.Parse);
                elements = Console.ReadLine().Trim();
                elements = elements + " " + "0";
                int[] postorder = Array.ConvertAll(elements.Split(' '), int.Parse);

                Solution obj = new Solution();
                var res = obj.buildTree(inorder,postorder,n);
                preorder(res);
                Console.WriteLine();
            }

        }
        public static void preorder(Solution.TreeNode root)
        {
            if (root == null)
            {
                return;
            }
            Console.Write(root.val + " ");
            preorder(root.left);
            preorder(root.right);
        }
    }
}

// } Driver Code Ends



//User function Template for C#

//Your Code Start
public class Solution
{
    //Definition for a binary tree node.
    public class TreeNode
    {
        public int val;
        public TreeNode left;
        public TreeNode right;

        public TreeNode(int x)
        {
            val = x;
            left = null;
            right = null;
        }
    }

    //Function to return a tree created from postorder and inorder traversals.
    public TreeNode buildTree(int[] inorder, int[] postorder, int n)
    {
        // Index to keep track of the current element of the postorder traversal array
        int[] postIndex = new int[] { n - 1 };

        // Call the helper function with appropriate parameters
        return buildTreeUtil(inorder, postorder, postIndex, 0, n - 1);
    }

    // Helper function to construct the tree recursively
    private TreeNode buildTreeUtil(int[] inorder, int[] postorder, int[] postIndex, int inStart, int inEnd)
    {
        // If start index is greater than end index, then no subtree exists.
        if (inStart > inEnd)
            return null;

        // Create a new node with the value at postIndex (last element of postorder).
        TreeNode node = new TreeNode(postorder[postIndex[0]--]);

        // If the node has no children, return it.
        if (inStart == inEnd)
            return node;

        // Find the index of this node in the inorder traversal.
        int inIndex = Array.IndexOf(inorder, node.val);

        // Recursively build right subtree first because postorder gives us root node last.
        node.right = buildTreeUtil(inorder, postorder, postIndex, inIndex + 1, inEnd);

        // Then recursively build left subtree.
        node.left = buildTreeUtil(inorder, postorder, postIndex, inStart, inIndex - 1);

        return node;
    }
}
//Your Code End


