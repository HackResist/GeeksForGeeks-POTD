//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
};
// Utility function to create a new Tree Node
Node* newNode(int val)
{
    Node* temp = new Node;
    temp->data = val;
    temp->left = NULL;
    temp->right = NULL;
    
    return temp;
}
// Function to Build Tree
Node* buildTree(string str)
{   
    // Corner Case
    if(str.length() == 0 || str[0] == 'N')
            return NULL;
    
    // Creating vector of strings from input 
    // string after spliting by space
    vector<string> ip;
    
    istringstream iss(str);
    for(string str; iss >> str; )
        ip.push_back(str);
        
    // Create the root of the tree
    Node* root = newNode(stoi(ip[0]));
        
    // Push the root to the queue
    queue<Node*> queue;
    queue.push(root);
        
    // Starting from the second element
    int i = 1;
    while(!queue.empty() && i < ip.size()) {
            
        // Get and remove the front of the queue
        Node* currNode = queue.front();
        queue.pop();
            
        // Get the current node's value from the string
        string currVal = ip[i];
            
        // If the left child is not null
        if(currVal != "N") {
                
            // Create the left child for the current node
            currNode->left = newNode(stoi(currVal));
                
            // Push it to the queue
            queue.push(currNode->left);
        }
            
        // For the right child
        i++;
        if(i >= ip.size())
            break;
        currVal = ip[i];
            
        // If the right child is not null
        if(currVal != "N") {
                
            // Create the right child for the current node
            currNode->right = newNode(stoi(currVal));
                
            // Push it to the queue
            queue.push(currNode->right);
        }
        i++;
    }
    
    return root;
}


// } Driver Code Ends
/* A binary tree node has data, pointer to left child
   and a pointer to right child /
struct Node
{
    int data;
    Node* left;
    Node* right;
}; */
//Your Code Start
class Solution
{
public:
    // Helper function to perform DFS traversal and find nodes at distance k
    void dfs(Node* root, int k, vector<int>& result, int depth) {
        if (root == NULL) return;
        
        // If the current depth is equal to k, add the node value to result
        if (depth == k) {
            result.push_back(root->data);
            return;
        }
        
        // Recursively traverse left and right subtrees with increased depth
        dfs(root->left, k, result, depth + 1);
        dfs(root->right, k, result, depth + 1);
    }
    
    // function to print the nodes at k distance from root
    vector<int> Kdistance(struct Node *root, int k)
    {
        // Vector to store the result
        vector<int> result;
        
        // Perform DFS traversal starting from the root
        dfs(root, k, result, 0);
        
        return result;
    }
};
//Your Code End



//{ Driver Code Starts.

int main()
{

    int t;
	scanf("%d ",&t);
    while(t--)
    {
        int k;
		scanf("%d ",&k);
        string s;
		getline(cin,s);
        Node* root = buildTree(s);
        Solution obj;
        vector<int> vec = obj.Kdistance(root, k);
        for(int i = 0;i<vec.size();i++){
            cout<<vec[i]<<" ";
        }
        cout<<endl;
    }
    return 1;
}
// } Driver Code Ends
