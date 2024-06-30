//{ Driver Code Starts
#include <stdio.h>
#include <stdlib.h>

/* a Node of the doubly linked list */
struct Node {
    int data;
    struct Node *next;
    struct Node *prev;

    Node(int x) {
        data = x;
        next = NULL;
        prev = NULL;
    }
};


// } Driver Code Ends
/* Structure of Node
struct Node
{
  int data;
  struct Node *next;
  struct Node *prev;

  Node(int x){
      data = x;
      next = NULL;
      prev = NULL;
  }

};
*/

class Solution {
  public:
    Node* deleteNode(Node* head, int x) {

//Your Code Start

  if (head == NULL || x <= 0) return head;
        
        Node* current = head;

        // If the head needs to be removed
        if (x == 1) {
            head = head->next;
            if (head != NULL)
                head->prev = NULL;
            delete current;
            return head;
        }

        // Traverse the list to find the node to be deleted
        for (int i = 1; current != NULL && i < x; i++)
            current = current->next;

        // If the node to be deleted is beyond the range of the list
        if (current == NULL) return head;

        // If the node to be deleted is not the last node
        if (current->next != NULL)
            current->next->prev = current->prev;

        // If the node to be deleted is not the first node
        if (current->prev != NULL)
            current->prev->next = current->next;

        delete current;
        return head;
        //Your Code End
    }

};

//{ Driver Code Starts.

/* Function to print Nodes in a given doubly linked list
   This function is same as printList() of singly linked lsit */
void printList(struct Node *node) {
    while (node != NULL) {
        printf("%d ", node->data);
        node = node->next;
    }
    printf("\n");
}

/* Drier program to test above functions*/
int main() {
    int t, x, n, i;
    scanf("%d", &t);

    while (t--) {
        /* Start with the empty list */
        struct Node *temp, *head = NULL;
        scanf("%d", &n);

        temp = NULL;

        for (i = 0; i < n; i++) {
            scanf("%d", &x);

            if (head == NULL) {
                head = new Node(x);
                temp = head;
            } else {
                Node *temp1 = new Node(x);
                temp->next = temp1;
                temp1->prev = temp;
                temp = temp->next;
            }
        }

        scanf("%d", &x);

        Solution ob;
        head = ob.deleteNode(head, x);

        printList(head);
        while (head->next != NULL) {
            temp = head;
            head = head->next;
            free(temp);
        }

        free(head);
    }
    return 0;
}

// } Driver Code Ends
