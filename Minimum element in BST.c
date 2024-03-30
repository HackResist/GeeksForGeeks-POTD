//{ Driver Code Starts
// Initial Template for C

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

#define N 1000000

struct Node {
    int data;
    struct Node *right;
    struct Node *left;
};

struct Node *createNewNode(int value) {
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node *));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}

struct Node *insert(struct Node *tree, int val) {

    if (tree == NULL) {
        return createNewNode(val);
    }

    if (val < tree->data) {
        tree->left = insert(tree->left, val);
    } else if (val > tree->data) {
        tree->right = insert(tree->right, val);
    }

    return tree;
}

struct Node *convert_str_to_num(char str[]) {
    char *token = strtok(str, " ");

    struct Node *root = NULL;

    while (token != NULL) {
        int num = atoi(token);
        if (num != 0) {
            root = insert(root, num);
        }
        token = strtok(NULL, " ");
    }

    return root;
}


// } Driver Code Ends
// User function Template for C
//Your Code Start
#include <limits.h>

int minValue(struct Node *root) {
    // your code here
       // Base case: if root is NULL, return a large value indicating no minimum
    if (root == NULL) {
        return INT_MAX;
    }
    
    // Traverse left until we find the leftmost node
    while (root->left != NULL) {
        root = root->left;
    }
    
    // Return the data value of the leftmost node, which is the minimum value
    return root->data;
  //Your Code End
}

//{ Driver Code Starts.

int main() {
    int t;
    scanf("%d", &t);

    while (t--) {
        while ((getchar()) != '\n')
            ;
        char str[N];
        scanf("%[^\n]s", str);

        struct Node *root = NULL;

        root = convert_str_to_num(str);

        int ans = minValue(root);

        printf("%d\n", ans);
    }

    return 0;
}

// } Driver Code Ends
