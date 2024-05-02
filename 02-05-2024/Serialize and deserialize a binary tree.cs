//{ Driver Code Starts
//Initial Template for C#

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Node
{
    public int data;
    public Node left;
    public Node right;

    public Node(int key)
    {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

namespace DriverCode
{
    




    class GFG
    {
        // Function to Build Tree
        public Node buildTree(string str)
        {
            // Corner Case
            if (str.Length == 0 || str[0] == 'N')
                return null;

            // Creating vector of strings from input
            // string after spliting by space
            var ip = str.Split(' ');



            Node root = new Node(int.Parse(ip[0]));


            // Push the root to the queue
            Queue<Node> queue = new Queue<Node>();
            queue.Enqueue(root);

            // Starting from the second element
            int i = 1;
            while (queue.Count != 0 && i < ip.Length)
            {

                // Get and remove the front of the queue
                Node currNode = queue.Peek();
                queue.Dequeue();

                // Get the current node's value from the string
                string currVal = ip[i];

                // If the left child is not null
                if (currVal != "N")
                {

                    // Create the left child for the current node
                    currNode.left = new Node(int.Parse(currVal));

                    // Push it to the queue
                    queue.Enqueue(currNode.left);
                }

                // For the right child
                i++;
                if (i >= ip.Length)
                    break;
                currVal = ip[i];

                // If the right child is not null
                if (currVal != "N")
                {

                    // Create the right child for the current node
                    currNode.right = new Node(int.Parse(currVal));

                    // Push it to the queue
                    queue.Enqueue(currNode.right);
                }
                i++;
            }

            return root;
        }
        
        void inorder(Node root) {
            if (root == null)
                return;
            inorder(root.left);
            Console.Write(root.data + " ");
            inorder(root.right);
        }
        
        void _deleteTree(ref Node node)  
        {  
            if (node == null) return;  
          
            /* first delete both subtrees */
            _deleteTree(ref node.left);  
            _deleteTree(ref node.right);  
          
            /* then delete the node */  
             node = null;  
        }  
          
        /* Deletes a tree and sets the root as NULL */
        void deleteTree(ref Node node_ref)  
        {  
            _deleteTree(ref node_ref);  
            node_ref = null;  
        }  
        

        static void Main(string[] args)
        {
            int testcases;// Taking testcase as input
            testcases = Convert.ToInt32(Console.ReadLine());
            while (testcases-- > 0)// Looping through all testcases
            {
                var gfg = new GFG();
                var str = Console.ReadLine().Trim();
                var root = gfg.buildTree(str);
                Solution obj = new Solution();
                var A = obj.serialize(root);
                gfg.deleteTree(ref root);
                Node getRoot = obj.deSerialize(A);
                gfg.inorder(getRoot);
                Console.WriteLine();
            }

        }
    }


}

// } Driver Code Ends
//User function Template for C#

/*  A binary tree Node
    class Node
    {
        public int data;
        public Node left;
        public Node right;

        public Node(int key)
        {
            this.data = key;
            this.left = null;
            this.right = null;
        }
    }
*/
//Your Code Start
class Solution
{
    // Function to serialize a tree and return a list containing nodes of the tree.
    public List<int?> serialize(Node root)
    {
        List<int?> serialized = new List<int?>();
        serializeUtil(root, serialized);
        return serialized;
    }

    // Utility function to serialize the tree
    private void serializeUtil(Node root, List<int?> serialized)
    {
        if (root == null)
        {
            serialized.Add(null); // Append null for null nodes
        }
        else
        {
            serialized.Add(root.data);
            serializeUtil(root.left, serialized);
            serializeUtil(root.right, serialized);
        }
    }

    // Function to deserialize a list and construct the tree.
    public Node deSerialize(List<int?> A)
    {
        int index = 0;
        return deSerializeUtil(A, ref index);
    }

    // Utility function to deserialize the list
    private Node deSerializeUtil(List<int?> A, ref int index)
    {
        if (index == A.Count || A[index] == null)
        {
            index++; // Move index to next element
            return null;
        }

        Node root = new Node((int)A[index++]); // Create node with current value

        root.left = deSerializeUtil(A, ref index); // Deserialize left subtree
        root.right = deSerializeUtil(A, ref index); // Deserialize right subtree

        return root;
    
    }
}
//Your Code End

//{ Driver Code Starts.
// } Driver Code Ends
