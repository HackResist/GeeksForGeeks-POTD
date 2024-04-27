//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int data;
    struct Node *next, *prev;

    Node(int x) {
        data = x;
        next = NULL;
        prev = NULL;
    }
};


// } Driver Code Ends

/* Structure of the node of the list is as
struct Node
{
    int data;
    struct Node *next, *prev;
    Node (int x){
        data = x;
        next = prev = NULL;
    }
};
*/



class Solution {
public:
    // Function to split the doubly linked list into two halves.
    pair<Node*, Node*> splitList(Node* head) {
        Node* fast = head;
        Node* slow = head;
        
        // Move fast pointer two steps and slow pointer one step.
        while (fast->next && fast->next->next) {
            fast = fast->next->next;
            slow = slow->next;
        }
        
        // Split the list into two halves at the slow pointer.
        Node* firstHalf = head;
        Node* secondHalf = slow->next;
        slow->next = NULL;
        
        return {firstHalf, secondHalf};
    }
    
    // Function to merge two sorted doubly linked lists.
    Node* merge(Node* left, Node* right) {
        if (!left) return right;
        if (!right) return left;
        
        if (left->data < right->data) {
            left->next = merge(left->next, right);
            left->next->prev = left;
            left->prev = NULL;
            return left;
        } else {
            right->next = merge(left, right->next);
            right->next->prev = right;
            right->prev = NULL;
            return right;
        }
    }

    // Function to sort the given doubly linked list using Merge Sort.
    Node* sortDoubly(Node* head) {
        // Base case: If list is empty or has only one node, it is already sorted.
        if (!head || !head->next) return head;
        
        // Split the list into two halves.
        pair<Node*, Node*> halves = splitList(head);
        
        // Recursively sort the two halves.
        Node* left = sortDoubly(halves.first);
        Node* right = sortDoubly(halves.second);
        
        // Merge the sorted halves.
        return merge(left, right);
    }
};





//{ Driver Code Starts.

void insert(struct Node **head, int data) {
    struct Node *temp = new Node(data);
    if (!(*head))
        (*head) = temp;
    else {
        temp->next = *head;
        (*head)->prev = temp;
        (*head) = temp;
    }
}

void print(struct Node *head) {
    struct Node *temp = head;
    while (head) {
        cout << head->data << ' ';
        temp = head;
        head = head->next;
    }
    cout << endl;
    while (temp) {
        cout << temp->data << ' ';
        temp = temp->prev;
    }
    cout << endl;
}

// Utility function to swap two integers
void swap(int *A, int *B) {
    int temp = *A;
    *A = *B;
    *B = temp;
}

// Driver program
int main(void) {
    long test;
    cin >> test;
    while (test--) {
        int n, tmp;
        struct Node *head = NULL;
        cin >> n;
        while (n--) {
            cin >> tmp;
            insert(&head, tmp);
        }
        Solution ob;
        head = ob.sortDoubly(head);
        print(head);
    }
    return 0;
}

// } Driver Code Ends
