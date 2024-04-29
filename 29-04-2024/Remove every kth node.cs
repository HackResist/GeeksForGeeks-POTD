//{ Driver Code Starts
//Initial Template for C#

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DriverCode;

namespace DriverCode
{
    public class Node{
        public int data;
        public Node next;
        
        public Node(int a){
            this.data = a;
            this.next = null;
        }
        
    }
    
    class GFG
    {
        static void printList( Node head){
            while(head != null){
                Console.Write(head.data+" ");
                head=head.next;
            }
            Console.Write("\n");
        }
        static void Main(string[] args)
        {
            int T = Convert.ToInt32(Console.ReadLine());
            while(T-- > 0){
                int n = Convert.ToInt32(Console.ReadLine());
                string elements = Console.ReadLine().Trim();
                string []s = elements.Split(' ');
                int[] arr = new int[n];
                arr = Array.ConvertAll(elements.Split(), int.Parse);
                
                Node head = new Node(arr[0]);
                Node tail = head;
                
                for(int i=1; i<n; i++){
                    tail.next = new Node(arr[i]);
                    tail = tail.next;
                }
                
                int k = Convert.ToInt32(Console.ReadLine());
                Solution obj = new Solution();
                Node res = obj.deleteK(head, k);
                printList(res);
                
            }
        }
    }
}
// } Driver Code Ends


//User function Template for C#

/*
public class Node{
    public int data;
    public Node next;

    public Node(int a){
        this.data = a;
        this.next = null;
    }

}
*/
//You Need To Submit this code because in this driver code "The variable `s' is assigned but its value is never used" if you run this code
Compilation succeeded - 1 warning(s)
class Solution
    {
        //Complete this method
        public Node deleteK(Node head, int K)
        {
          //Your Code Start
              if (K == 1) // If K is 1, every node needs to be deleted, so return null
            return null;

        Node dummy = new Node(0); // Create a dummy node to handle edge case when head needs to be deleted
        dummy.next = head;
        Node prev = dummy;
        Node current = head;
        int count = 0;

        while (current != null)
        {
            count++;

            if (count % K == 0) // If count is a multiple of K, delete the current node
            {
                prev.next = current.next;
            }
            else
            {
                prev = current;
            }

            current = current.next;
        }

        return dummy.next;
            //Your code End
        }
    }
