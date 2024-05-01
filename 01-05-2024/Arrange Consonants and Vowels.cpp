//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

struct Node {
    char data;
    struct Node *next;

    Node(int x) {
        data = x;
        next = NULL;
    }
};

void printlist(Node *head) {
    if (head == NULL)
        return;
    while (head != NULL) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

void append(struct Node **headRef, char data) {
    struct Node *new_node = new Node(data);
    struct Node *last = *headRef;

    if (*headRef == NULL) {
        *headRef = new_node;
        return;
    }
    while (last->next != NULL)
        last = last->next;
    last->next = new_node;
    return;
}


// } Driver Code Ends
/*
Structure of the node of the linked list is as
struct Node
{
    char data;
    struct Node *next;

    Node(char x){
        data = x;
        next = NULL;
    }

};
*/
// Your Code Start
class Solution {
public:
    Node* arrangeCV(Node* head) {
        vector<char> vowels = {'a', 'e', 'i', 'o', 'u'};
        Node* dummy = new Node(-1);
        dummy->next = head;
        Node* vow = dummy;
        Node* prev = dummy;
        Node* curr = head;
        
        while (curr) {
            if (find(vowels.begin(), vowels.end(), curr->data) != vowels.end()) {
                Node* del_node = curr;
                prev->next = curr->next;
                curr = prev->next;
                Node* nxt = vow->next;
                vow->next = del_node;
                del_node->next = nxt;
                vow = del_node;
                if (vow->next == curr) {
                    prev = vow;
                }
            } else {
                curr = curr->next;
                prev = prev->next;
            }
        }
        return dummy->next;
    }
};
//Your Code End


//{ Driver Code Starts.

// task is to complete this function
int main() {
    int T;
    cin >> T;
    while (T--) {
        int n;
        char tmp;
        struct Node *head = NULL;
        cin >> n;
        while (n--) {
            cin >> tmp;
            append(&head, tmp);
        }
        Solution obj;
        head = obj.arrangeCV(head);
        printlist(head);
    }
    return 0;
}

// } Driver Code Ends
