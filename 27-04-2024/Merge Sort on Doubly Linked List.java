//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Node {
    int data;
    Node next, prev;

    Node(int key) {
        data = key;
        next = prev = null;
    }
}

class Driverclass {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int n = sc.nextInt();
            int a1 = sc.nextInt();
            Node head = new Node(a1);
            Node temp = head;

            for (int i = 1; i < n; i++) {
                int a = sc.nextInt();
                Node n1 = new Node(a);
                n1.prev = temp;
                temp.next = n1;
                temp = n1;
            }

            head = new Solution().sortDoubly(head);
            printList(head);
        }
    }

    public static void printList(Node node) {
        Node temp = node;
        while (node != null) {
            System.out.print(node.data + " ");
            temp = node;
            node = node.next;
        }
        System.out.println();
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.prev;
        }
        System.out.println();
    }
}

// } Driver Code Ends


// User function Template for Java

/*
class Node
{
    int data;
    Node next, prev;
    Node(int data)
    {
        this.data = data;
        next = prev = null;
    }
}
*/
class Solution {
    // Function to sort the given doubly linked list using Merge Sort.
    static Node sortDoubly(Node head) {
      //Your Code Start
         if(head == null || head.next == null)
            return head;
            
        Node slow = head;
        Node fast = head;
        
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        
        Node mid = slow;
        Node beforeMid = slow.prev;
        beforeMid.next = null;
        mid.prev = null;
        
        Node left = sortDoubly(head);
        Node right = sortDoubly(mid);
        
        return mergeDoubly(left,right);
    }
    
    static Node mergeDoubly(Node a,Node b){
        if(a == null)
            return b;
        if(b == null)
            return a;
            
        Node head = null;
        Node tail = null;
        Node temp = null;
        
        if(a.data <= b.data){
            head = a;
            tail = a;
            a = a.next;
        }
        else{
            head = b;
            tail = b;
            b = b.next;
        }
        
        while(a != null && b != null){
            if(a.data <= b.data){
                tail.next = a;
                temp = tail;
                tail = a;
                tail.prev = temp;
                a = a.next;
            }
            else{
                tail.next = b;
                temp = tail;
                tail = b;
                tail.prev = temp;
                b = b.next;
            }
        }
        
        if(a == null){
             tail.next = b;
             temp = tail;
             tail = b;
             tail.prev = temp;
        }
        if(b == null){
             tail.next = a;
             temp = tail;
             tail = a;
             tail.prev = temp;
        }
            
        return head;
 //Your Code end
    }

}
