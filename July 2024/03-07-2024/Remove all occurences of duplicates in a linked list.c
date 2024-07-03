//{ Driver Code Starts
// Initial Template for C

#include <stdio.h>
#include <stdlib.h>

/* Link list node */
struct Node {
    int data;
    struct Node *next;
};


// } Driver Code Ends
// User function Template for C

struct Node* removeAllDuplicates(struct Node* head) {
  //Your Code Start
    if (head == NULL || head->next == NULL) {
        return head;
    }

    struct Node* dummy = (struct Node*)malloc(sizeof(struct Node));
    dummy->data = 0;
    dummy->next = head;

    struct Node* prev = dummy;
    struct Node* curr = head;

    while (curr != NULL) {
        int isDuplicate = 0;

        // Move the current pointer to the end of the duplicates sequence
        while (curr->next != NULL && curr->data == curr->next->data) {
            isDuplicate = 1;
            curr = curr->next;
        }

        // If duplicates were found, skip them
        if (isDuplicate) {
            prev->next = curr->next;
        } else {
            prev = prev->next;
        }

        curr = curr->next;
    }

    struct Node* new_head = dummy->next;
    free(dummy);
    return new_head;
    //Your Code End
}

//{ Driver Code Starts.
/* Function to print linked list */
void printList(struct Node *head) {
    struct Node *temp = head;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
}

// Driver program to test above functions
int main() {
    int T;
    scanf("%d", &T);
    while (T--) {
        int N;
        scanf("%d", &N);

        struct Node *head = NULL;
        struct Node *temp = head;

        for (int i = 0; i < N; i++) {
            int data;
            scanf("%d", &data);

            struct Node *new_node = (struct Node *)malloc(sizeof(struct Node));
            new_node->data = data;

            if (head == NULL) {
                temp = new_node;
                head = temp;
            } else {
                temp->next = new_node;
                temp = temp->next;
            }
        }

        head = removeAllDuplicates(head);
        printList(head);

        printf("\n");
    }
    return 0;
}

// } Driver Code Ends
