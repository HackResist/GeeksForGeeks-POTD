//{ Driver Code Starts
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

public class Node{
        public int data;
        public Node next;

        public Node(int a){
            this.data = a;
            this.next = null;
        }

    }
					
public class GFG {
    
    

    public static void printList( Node head){
        while (head != null) {
            Console.Write(head.data + " ");
            head = head.next;
        }
        Console.Write("\n");
    }
    
    public static  Node findNode( Node head,  int search_for)
    {
         Node current = head;
        while (current != null)
        {
            if (current.data == search_for)
                break;
            current = current.next;
        }
        return current;
    }
    
	public static void Main () {
		int t = Convert.ToInt32(Console.ReadLine());
		while(t-->0)
		{
		    string []s = Console.ReadLine().Trim().Split(' ');
		    int n = Convert.ToInt32(s[0]);
		    int []p = Array.ConvertAll(Console.ReadLine().Trim().Split(' '),int.Parse);
		    
		    Node head = new Node(p[0]);
		    Node tail = head;
		    
		    for(int i=1;i<n;i++){
		        tail.next = new Node(p[i]);
		        tail = tail.next;
		    }
		    
		    int k =  Convert.ToInt32(Console.ReadLine());
		    
		    Solution obj = new Solution();
		    Node pos = GFG.findNode(head,k);
		    
		    obj.deleteNode(pos);
		    
		    GFG.printList(head);
		}
	}
}
// } Driver Code Ends


//User function Template for C#

// public class Node{
    //     public int data;
    //     public Node next;

    //     public Node(int a){
    //         this.data = a;
    //         this.next = null;
    //     }

    // }
class Solution
    {
        //Complete this function
        public void deleteNode(Node del_node)
        {  
            //Your code start
             // Check if the given node is the last node
        if (del_node.next == null)
        {
            del_node = null;
            return;
        }

        // Copy data from the next node to the current node
        del_node.data = del_node.next.data;

        // Point the current node to the node after the next node
        del_node.next = del_node.next.next;
            //Your code end
        }
    }
