//{ Driver Code Starts
// Initial Template for C#

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

class Node {
    public int data;
    public Node left;
    public Node right;

    public Node(int key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

namespace DriverCode {
class GFG {
    // Function to Build Tree
    public Node buildTree(string str) {
        // Corner Case
        if (str.Length == 0 || str[0] == 'N') return null;

        // Creating vector of strings from input
        // string after spliting by space
        var ip = str.Split(' ');

        Node root = new Node(int.Parse(ip[0]));

        // Push the root to the queue
        Queue<Node> queue = new Queue<Node>();
        queue.Enqueue(root);

        // Starting from the second element
        int i = 1;
        while (queue.Count != 0 && i < ip.Length) {

            // Get and remove the front of the queue
            Node currNode = queue.Peek();
            queue.Dequeue();

            // Get the current node's value from the string
            string currVal = ip[i];

            // If the left child is not null
            if (currVal != "N") {

                // Create the left child for the current node
                currNode.left = new Node(int.Parse(currVal));

                // Push it to the queue
                queue.Enqueue(currNode.left);
            }

            // For the right child
            i++;
            if (i >= ip.Length) break;
            currVal = ip[i];

            // If the right child is not null
            if (currVal != "N") {

                // Create the right child for the current node
                currNode.right = new Node(int.Parse(currVal));

                // Push it to the queue
                queue.Enqueue(currNode.right);
            }
            i++;
        }

        return root;
    }

    void preorder(Node root) {
        if (root == null) {
            return;
        }
        Console.Write(root.data + " ");
        preorder(root.left);
        preorder(root.right);
    }

    void inorder(Node root) {
        if (root == null) {
            return;
        }

        inorder(root.left);
        Console.Write(root.data + " ");
        inorder(root.right);
        return;
    }

    void postorder(Node root) {
        if (root == null) {
            return;
        }

        postorder(root.left);
        postorder(root.right);
        Console.Write(root.data + " ");
    }

    static void Main(string[] args) {
        int testcases; // Taking testcase as input
        testcases = Convert.ToInt32(Console.ReadLine());
        while (testcases-- > 0) // Looping through all testcases
        {
            var gfg = new GFG();
            var str = Console.ReadLine().Trim();
            var root = gfg.buildTree(str);
            Solution obj = new Solution();
            var res = obj.isBST(root);

            Console.WriteLine(res ? "true" : "false");
        }
    }
}
}
// } Driver Code Ends


// User function Template for C#

class Solution {
    // Complete this function
    // Function to check whether a Binary Tree is BST or not.
    
    //Your Code Start
    private Node prev;
    private bool InTrav(Node root) {
        if (root == null) {
            return true;
        }

        if (!InTrav(root.left)) {
            return false;
        }

        if (prev != null && root.data <= prev.data) {
            return false;
        }

        prev = root;

        return InTrav(root.right);
    }

    public bool isBST(Node root) {
        prev = null;
        return InTrav(root);
    }
    //Your Code End
    
}
