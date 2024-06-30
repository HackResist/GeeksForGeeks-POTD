//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Node {
    int data;
    Node next;
    Node prev;

    Node(int x) {
        data = x;
        next = null;
        prev = null;
    }

    public static void printList(Node node) {
        while (node != null) {
            System.out.print(node.data + " ");
            node = node.next;
        }
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            Node head = null;
            Node tail = head;

            for (int i = 0; i < n; i++) {
                int temp = sc.nextInt();
                if (head == null) {
                    head = new Node(temp);
                    tail = head;
                } else {
                    Node newNode = new Node(temp);
                    tail.next = newNode;
                    newNode.prev = tail;
                    tail = newNode;
                }
            }
            int x = sc.nextInt();

            Solution obj = new Solution();
            Node res = obj.deleteNode(head, x);

            Node.printList(res);
        }
    }
}

// } Driver Code Ends


/*

Definition for doubly Link List Node
class Node
{
    int data;
    Node next;
    Node prev;
    Node(int x){
        data = x;
        next = null;
        prev = null;
    }
}
*/
class Solution {
    public Node deleteNode(Node head, int x) {
        //Your Code Start
        if (head == null || x <= 0) return head;

        Node current = head;

        // If the head needs to be removed
        if (x == 1) {
            head = head.next;
            if (head != null)
                head.prev = null;
            return head;
        }

        // Traverse the list to find the node to be deleted
        for (int i = 1; current != null && i < x; i++)
            current = current.next;

        // If the node to be deleted is beyond the range of the list
        if (current == null) return head;

        // If the node to be deleted is not the last node
        if (current.next != null)
            current.next.prev = current.prev;

        // If the node to be deleted is not the first node
        if (current.prev != null)
            current.prev.next = current.next;

        return head;
        //Your Code End
    
    }
}
