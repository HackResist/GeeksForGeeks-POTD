//{ Driver Code Starts
//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
import java.math.*;

class Node  
{ 
    int data; 
    Node left, right; 
   
    public Node(int d)  
    { 
        data = d; 
        left = right = null; 
    } 
}

class GFG
{
    static Node buildTree(String str)
    {
        // Corner Case
        if(str.length() == 0 || str.equals('N'))
            return null;
        String[] s = str.split(" ");
        
        Node root = new Node(Integer.parseInt(s[0]));
        Queue <Node> q = new LinkedList<Node>();
        q.add(root);
        
        // Starting from the second element
        int i = 1;
        while(!q.isEmpty() && i < s.length)
        {
              // Get and remove the front of the queue
              Node currNode = q.remove();
        
              // Get the curr node's value from the string
              String currVal = s[i];
        
              // If the left child is not null
              if(!currVal.equals("N")) 
              {
        
                  // Create the left child for the curr node
                  currNode.left = new Node(Integer.parseInt(currVal));
        
                  // Push it to the queue
                  q.add(currNode.left);
              }
        
              // For the right child
              i++;
              if(i >= s.length)
                  break;
              currVal = s[i];
        
              // If the right child is not null
              if(!currVal.equals("N")) 
              {
        
                  // Create the right child for the curr node
                  currNode.right = new Node(Integer.parseInt(currVal));
        
                  // Push it to the queue
                  q.add(currNode.right);
              }
              
              i++;
        }
    
        return root;
    }
    
    public static void main(String args[]) throws IOException {
    
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while(t>0)
        {
            String s = br.readLine();
            Node root = buildTree(s);
            
            Solution T = new Solution();
            System.out.println(T.largestBst(root));
            
            t--;
        }
    }
}


// } Driver Code Ends


//User function Template for Java

// class Node  
// { 
//     int data; 
//     Node left, right; 
   
//     public Node(int d)  
//     { 
//         data = d; 
//         left = right = null; 
//     } 
// }



class Solution {
    //Your Code Start
    
    
    // Return the size of the largest sub-tree which is also a BST
    static int largestBst(Node root) {
        return largestBstHelper(root, new int[1]);
    }

    static class BST {
        boolean isBST;
        int size;
        int min;
        int max;

        BST(boolean isBST, int size, int min, int max) {
            this.isBST = isBST;
            this.size = size;
            this.min = min;
            this.max = max;
        }
    }

    private static BST subHelp(Node root, int[] maxSize) {
        if (root == null) {
            return new BST(true, 0, Integer.MAX_VALUE, Integer.MIN_VALUE);
        }

        BST left = subHelp(root.left, maxSize);
        BST right = subHelp(root.right, maxSize);

        BST curr = new BST(false, 0, 0, 0);

        if (left.isBST && right.isBST && root.data > left.max && root.data < right.min) {
            curr.isBST = true;
            curr.size = left.size + 1 + right.size;
            curr.min = Math.min(root.data, left.min);
            curr.max = Math.max(root.data, right.max);
            maxSize[0] = Math.max(maxSize[0], curr.size);
        } else {
            curr.size = Math.max(left.size, right.size);
        }

        return curr;
    }

    private static int largestBstHelper(Node root, int[] maxSize) {
        subHelp(root, maxSize);
        return maxSize[0];
    }
    //Your Code End
}
