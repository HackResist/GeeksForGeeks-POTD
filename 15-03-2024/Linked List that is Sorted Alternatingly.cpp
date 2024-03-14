//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

struct Node
{
	int data;
	struct Node *next;
	
	Node(int x){
	    data =x;
	    next = NULL;
	}
};
/* Function to print linked list */


void append(struct Node** headRef, struct Node** tailRef, int newData)
{
	struct Node* new_node = new Node(newData);
	struct Node *last = *headRef;
	if (*headRef == NULL)
	{
	    *headRef = new_node;
	    *tailRef = *headRef;
	    return;
	}
	
	(*tailRef) -> next = new_node;
	*tailRef = (*tailRef) -> next;
}

// A utility function to print a linked list
void printList(Node *head)
{
	while (head != NULL)
	{
		cout << head->data << " ";
		head = head->next;
	}
	cout << endl;
}



// } Driver Code Ends

/*struct Node
{
	int data;
	struct Node *next;
	
	Node(int x){
	    data =x;
	    next = NULL;
	}
};
*/
class Solution
{
    public:
    void rvrs(Node** head){
        Node *prev = nullptr, *cur = *head, *N;
        
        while(cur){
            
            N = cur->next;
            cur->next = prev;
            prev = cur;
            cur = N;
        
        }
        *head = prev;
    }
    
    // your task is to complete this function
    void sort(Node **head)
    {
         Node* cur = *head;
         if(cur == nullptr || cur->next == nullptr) return;
         Node* Asc = *head, *Desc = cur->next;
         Node* AscHead = nullptr, *DescHead = nullptr, *AscTail = nullptr, *DescTail = nullptr;
         
         AscHead = *head;
         DescHead = cur->next;
         while(DescHead && DescHead->next){
             //init AscTail and DescHead
             AscTail = AscHead; DescTail = DescHead;
             //change the next pointers for AscHead and DescHead
             AscHead = AscTail->next = DescTail->next;
             DescHead = DescTail->next = AscHead->next;
             
         }
         //AscTail ->next = head;
         rvrs(&Desc);
         AscHead->next = Desc;
    }
};

//{ Driver Code Starts.
int main()
{
	int test;
	cin>>test;
	while(test--)
	{
	    struct Node* head = NULL;
	    struct Node* tail = NULL;
	    int n, k;
	    cin>>n;
	    for(int i=0; i<n ;i++){
	        cin>>k;
	        append(&head, &tail, k);
	    }
	    Solution ob;
	    ob.sort(&head);
	    printList(head);
	}
	return 0;
}

// } Driver Code Ends
