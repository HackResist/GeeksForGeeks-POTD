//{ Driver Code Starts
/* program to construct tree using inorder and postorder traversals */
#include <bits/stdc++.h>
using namespace std;

/* A binary tree node has data, pointer to left child
   and a pointer to right child */
struct Node {
    int data;
    struct Node* left;
    struct Node* right;

    Node(int x) {
        data = x;
        left = right = NULL;
    }
};

/* This funtcion is here just to test buildTreeUtil() */
void preOrder(Node* node) {
    if (node == NULL) return;

    /* then print the data of node */
    printf("%d ", node->data);

    /* first recur on left child */
    preOrder(node->left);

    /* now recur on right child */
    preOrder(node->right);
}


// } Driver Code Ends
/* Tree node structure

struct Node
{
    int data;
    struct Node* left;
    struct Node* right;

    Node(int x){
        data = x;
        left = right = NULL;
    }
};*/
//Your Code Start
class Solution {
public:
    // Function to return a tree created from postorder and inorder traversals.
    Node *buildTreeUtil(int in[], int post[], int inStart, int inEnd, int &postIndex) {
        // If start index is greater than end index, then no subtree exists.
        if (inStart > inEnd)
            return nullptr;

        // Create a new node with the value at postIndex (last element of postorder).
        Node *node = new Node(post[postIndex--]);

        // If the node has no children, return it.
        if (inStart == inEnd)
            return node;

        // Find the index of this node in the inorder traversal.
        int inIndex;
        for (int i = inStart; i <= inEnd; ++i) {
            if (in[i] == node->data) {
                inIndex = i;
                break;
            }
        }

        // Recursively build right subtree first because postorder gives us root node last.
        node->right = buildTreeUtil(in, post, inIndex + 1, inEnd, postIndex);

        // Then recursively build left subtree.
        node->left = buildTreeUtil(in, post, inStart, inIndex - 1, postIndex);

        return node;
    }

    Node *buildTree(int in[], int post[], int n) {
        int postIndex = n - 1; // Start from the last index of postorder array
        return buildTreeUtil(in, post, 0, n - 1, postIndex);
    }

};
//Your Code End



//{ Driver Code Starts.

int main() {
    int t, n;
    cin >> t;
    while (t--) {
        cin >> n;
        int in[n], post[n];
        for (int i = 0; i < n; i++) cin >> in[i];
        for (int i = 0; i < n; i++) cin >> post[i];
        Solution obj;
        Node* root = obj.buildTree(in, post, n);
        preOrder(root);
        cout << endl;
    }
    return 0;
}

// } Driver Code Ends
