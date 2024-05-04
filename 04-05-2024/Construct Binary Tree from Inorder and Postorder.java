//{ Driver Code Starts
import java.util.*;

class Node {
    int data;
    Node left;
    Node right;

    Node(int value) {
        data = value;
        left = null;
        right = null;
    }
}

class InorderPostorderToTree {
    public void preOrder(Node root) {
        if (root == null) return;

        System.out.print(root.data + " ");
        preOrder(root.left);

        preOrder(root.right);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        InorderPostorderToTree ip = new InorderPostorderToTree();
        int T = sc.nextInt();
        while (T > 0) {
            int n = sc.nextInt();
            int inorder[] = new int[n];
            int postorder[] = new int[n];
            for (int i = 0; i < n; i++) inorder[i] = sc.nextInt();
            for (int i = 0; i < n; i++) postorder[i] = sc.nextInt();
            GfG g = new GfG();
            Node root = g.buildTree(inorder, postorder, n);
            ip.preOrder(root);
            System.out.println();

            T--;
        }
    }
}

// } Driver Code Ends




/* Tree node structure
class Node
{
    int data;
    Node left;
    Node right;

        Node(int value)
    {
        data = value;
        left = null;
        right = null;
    }
}*/

//Your Code Start
class GfG {
    // Index to keep track of the current element of the postorder traversal array
    static int postIndex;

    // Function to return a tree created from postorder and inorder traversals.
    Node buildTree(int[] in, int[] post, int n) {
        // Initialize postIndex to the last index of postorder array
        postIndex = n - 1;
        // Call helper function to build the tree recursively
        return buildTreeUtil(in, post, 0, n - 1);
    }

    // Helper function to construct the tree recursively
    Node buildTreeUtil(int[] in, int[] post, int inStart, int inEnd) {
        // If start index is greater than end index, then no subtree exists.
        if (inStart > inEnd)
            return null;

        // Create a new node with the value at postIndex (last element of postorder).
        Node node = new Node(post[postIndex--]);

        // If the node has no children, return it.
        if (inStart == inEnd)
            return node;

        // Find the index of this node in the inorder traversal.
        int inIndex = 0;
        for (int i = inStart; i <= inEnd; ++i) {
            if (in[i] == node.data) {
                inIndex = i;
                break;
            }
        }

        // Recursively build right subtree first because postorder gives us root node last.
        node.right = buildTreeUtil(in, post, inIndex + 1, inEnd);

        // Then recursively build left subtree.
        node.left = buildTreeUtil(in, post, inStart, inIndex - 1);

        return node;
    }
}
//Your Code End
