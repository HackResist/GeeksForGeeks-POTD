//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

/* Link list node */
struct Node {
    int data;
    struct Node *next;

    Node(int x) {
        data = x;
        next = NULL;
    }
};


// } Driver Code Ends
// User function Template for C++

/* Linked List node structure

struct Node {
    int data;
    struct Node *next;
};

*/

class Solution {
  public:
    Node* removeAllDuplicates(struct Node* head) {
    //Your Code Start
               if (head == nullptr || head->next == nullptr) {
            return head;
        }

        Node* dummy = new Node(0); // Use a dummy node
        dummy->next = head;

        Node* prev = dummy;
        Node* curr = head;

        while (current != nullptr) {
            bool isDuplicate = false;

            while (curr->next != nullptr && curr->data == curr->next->data) {
                isDuplicate = true;
                Node* temp = curr;
                curr = curr->next;
                delete temp;
            }

            if (isDuplicate) {
                Node* temp = curr;
                curr = curr->next;
                delete temp;
                prev->next = curr;
            } else {
                prev = prev->next;
                curr = curr->next;
            }
        }

        Node* new_head = dummy->next;
        delete dummy;
        return new_head;
        //Your Code End
    }
};

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
    cin >> T;

    while (T--) {
        int N;

        cin >> N;

        Node *head = NULL;
        Node *temp = head;

        for (int i = 0; i < N; i++) {
            int data;
            cin >> data;
            if (head == NULL)
                head = temp = new Node(data);
            else {
                temp->next = new Node(data);
                temp = temp->next;
            }
        }

        Solution ob;
        head = ob.removeAllDuplicates(head);
        printList(head);

        cout << "\n";
    }
    return 0;
}

// } Driver Code Ends
