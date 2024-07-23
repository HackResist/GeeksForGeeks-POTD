//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
#define MAX_HEIGHT 100000

// Tree Node
struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};

// Function to Build Tree
Node* buildTree(string str) {
    // Corner Case
    if (str.length() == 0 || str[0] == 'N')
        return NULL;

    // Creating vector of strings from input
    // string after spliting by space
    vector<string> ip;

    istringstream iss(str);
    for (string str; iss >> str;)
        ip.push_back(str);

    // Create the root of the tree.....
    Node* root = new Node(stoi(ip[0]));

    // Push the root to the queue
    queue<Node*> queue;
    queue.push(root);

    // Starting from the second element
    int i = 1;
    while (!queue.empty() && i < ip.size()) {

        // Get and remove the front of the queue
        Node* currNode = queue.front();
        queue.pop();

        // Get the current node's value from the string
        string currVal = ip[i];

        // If the left child is not null
        if (currVal != "N") {

            // Create the left child for the current node
            currNode->left = new Node(stoi(currVal));

            // Push it to the queue
            queue.push(currNode->left);
        }

        // For the right child
        i++;
        if (i >= ip.size())
            break;
        currVal = ip[i];

        // If the right child is not null
        if (currVal != "N") {

            // Create the right child for the current node
            currNode->right = new Node(stoi(currVal));

            // Push it to the queue
            queue.push(currNode->right);
        }
        i++;
    }

    return root;
}


// } Driver Code Ends
/*
struct Node {
    int data;
    Node *left;
    Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};
*/
class Solution {
  public:
  //Your Code Start
  
  
    // Function to return a list of integers denoting the node
    // values of both the BSTs in a sorted order.
    vector<int> merge(Node* root1, Node* root2) {
        // Step 1: Perform in-order traversal of both trees to get sorted lists
        vector<int> list1, list2;
        inorder(root1, list1);
        inorder(root2, list2);
        
        // Step 2: Merge the two sorted lists
        return merge(list1, list2);
    }

private:
    // Helper function to perform in-order traversal
    void inorder(Node* root, vector<int>& result) {
        if (root == NULL) return;
        inorder(root->left, result);
        result.push_back(root->data);
        inorder(root->right, result);
    }
    
    // Helper function to merge two sorted lists
    vector<int> merge(const vector<int>& list1, const vector<int>& list2) {
        vector<int> merged;
        int i = 0, j = 0;
        while (i < list1.size() && j < list2.size()) {
            if (list1[i] < list2[j]) {
                merged.push_back(list1[i]);
                i++;
            } else {
                merged.push_back(list2[j]);
                j++;
            }
        }
        // Append remaining elements, if any
        while (i < list1.size()) {
            merged.push_back(list1[i]);
            i++;
        }
        while (j < list2.size()) {
            merged.push_back(list2[j]);
            j++;
        }
        return merged;
        //Your Code End
    
    }
};

//{ Driver Code Starts.
int main() {

    int t;
    string tc;
    getline(cin, tc);
    t = stoi(tc);
    while (t--) {
        string s;
        getline(cin, s);
        Node* root1 = buildTree(s);

        getline(cin, s);
        Node* root2 = buildTree(s);

        // getline(cin, s);
        Solution obj;
        vector<int> vec = obj.merge(root1, root2);
        for (int i = 0; i < vec.size(); i++)
            cout << vec[i] << " ";
        cout << endl;
        /// cout<<"~"<<endl;
    }
    return 0;
}
// } Driver Code Ends
