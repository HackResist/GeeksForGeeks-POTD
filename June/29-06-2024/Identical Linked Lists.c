//{ Driver Code Starts
// Initial Template for C

#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};


// } Driver Code Ends
// User function Template for C

// Function to check if 2 linked lists are identical
bool areIdentical(struct Node *head1, struct Node *head2) {
    //Your Code Start
        // Traverse both lists and compare data
    while (head1 != NULL && head2 != NULL) {
        if (head1->data != head2->data) {
            return false; // Data mismatch
        }
        head1 = head1->next;
        head2 = head2->next;
    }
    
    // Check if both lists have reached the end
    if (head1 == NULL && head2 == NULL) {
        return true; // Both lists are identical
    }
    
    return false; // Lists are of different lengths
//Your Code End
}

//{ Driver Code Starts.

int main() {
    int t;
    scanf("%d", &t);

    while (t--) {
        int n;
        scanf("%d", &n);
        int first;
        scanf("%d", &first);
        struct Node *head1;
        head1 = (struct Node *)malloc(sizeof(struct Node));
        head1->data = first;
        head1->next = NULL;
        struct Node *tail = head1;

        for (int i = 1; i < n; ++i) {
            int data;
            scanf("%d", &data);
            struct Node *temp;
            temp = (struct Node *)malloc(sizeof(struct Node));
            temp->data = data;
            temp->next = NULL;
            tail->next = temp;
            tail = tail->next;
        }

        scanf("%d", &n);
        scanf("%d", &first);
        struct Node *head2;
        head2 = (struct Node *)malloc(sizeof(struct Node));
        head2->data = first;
        head2->next = NULL;
        tail = head2;

        for (int i = 1; i < n; ++i) {
            int data;
            scanf("%d", &data);
            struct Node *temp;
            temp = (struct Node *)malloc(sizeof(struct Node));
            temp->data = data;
            temp->next = NULL;
            tail->next = temp;
            tail = tail->next;
        }
        areIdentical(head1, head2) ? printf("true\n") : printf("false\n");
    }

    return 0;
}

// } Driver Code Ends
