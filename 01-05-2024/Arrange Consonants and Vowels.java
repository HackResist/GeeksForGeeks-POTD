//{ Driver Code Starts
/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class Node {
    char data;
    Node next;
    
    public Node(char data){
        this.data = data;
        next = null;
    }
}

class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-- > 0){
		    int n = sc.nextInt();
		    Node head = null, tail = null;
		    
		    char head_c = sc.next().charAt(0);
		    head = new Node(head_c);
		    tail = head;
		    
		    while(n-- > 1){
		        tail.next = new Node(sc.next().charAt(0));
		        tail = tail.next;
		    }
		    
		    Solution obj = new Solution();
		    //show(head);
		    show(obj.arrangeCV(head));
		    
		}
	}
	
	public static void po(Object o){
	    System.out.println(o);
	}
	
	public static void show(Node head){
        while(head != null){
            System.out.print(head.data+" ");
            head = head.next;
        }
        System.out.println();
    }
}

// } Driver Code Ends


/*
Structure of node class is:
class Node {
    char data;
    Node next;
    
    public Node(char data){
        this.data = data;
        next = null;
    }
}
*/
//Your Code Start
class Solution {
    
    public Node arrangeCV(Node head) {
        // If the head is null or there's only one node, return the head as it is
        if (head == null || head.next == null) {
            return head;
        }
        
        // Initialize pointers for vowels and consonants
        Node vowelHead = null, vowelTail = null;
        Node consonantHead = null, consonantTail = null;
        
        // Traverse the linked list
        while (head != null) {
            // If the current character is a vowel
            if (isVowel(head.data)) {
                // If the vowel list is empty, initialize it
                if (vowelHead == null) {
                    vowelHead = vowelTail = head;
                } else {
                    // Append the current node to the vowel list
                    vowelTail.next = head;
                    vowelTail = head;
                }
            } else {
                // If the consonant list is empty, initialize it
                if (consonantHead == null) {
                    consonantHead = consonantTail = head;
                } else {
                    // Append the current node to the consonant list
                    consonantTail.next = head;
                    consonantTail = head;
                }
            }
            // Move to the next node
            head = head.next;
        }
        
        // Connect the vowel list with the consonant list
        if (vowelHead != null) {
            vowelTail.next = consonantHead;
        }
        
        // If the consonant list is not empty, set its tail's next to null
        if (consonantTail != null) {
            consonantTail.next = null;
        }
        
        // Return the head of the rearranged linked list
        return vowelHead != null ? vowelHead : consonantHead;
    }
    
    // Function to check if a character is a vowel
    private boolean isVowel(char ch) {
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }
}
//Your Code End
