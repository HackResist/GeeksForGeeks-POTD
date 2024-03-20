//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.util.HashMap;
import java.io.*;

    class Node
    {
        int data;
        Node left,right;
        Node(int data){
        this.data = data;
        left=null;
        right=null;
    }
    }
		
public class GFG2
{
    static Node buildTree(String str){
        
        if(str.length()==0 || str.charAt(0)=='N'){
            return null;
        }
        
        String ip[] = str.split(" ");
        // Create the root of the tree
        Node root = new Node(Integer.parseInt(ip[0]));
        // Push the root to the queue
        
        Queue<Node> queue = new LinkedList<>(); 
        
        queue.add(root);
        // Starting from the second element
        
        int i = 1;
        while(queue.size()>0 && i < ip.length) {
            
            // Get and remove the front of the queue
            Node currNode = queue.peek();
            queue.remove();
                
            // Get the current node's value from the string
            String currVal = ip[i];
                
            // If the left child is not null
            if(!currVal.equals("N")) {
                    
                // Create the left child for the current node
                currNode.left = new Node(Integer.parseInt(currVal));
                // Push it to the queue
                queue.add(currNode.left);
            }
                
            // For the right child
            i++;
            if(i >= ip.length)
                break;
                
            currVal = ip[i];
                
            // If the right child is not null
            if(!currVal.equals("N")) {
                    
                // Create the right child for the current node
                currNode.right = new Node(Integer.parseInt(currVal));
                    
                // Push it to the queue
                queue.add(currNode.right);
            }
            i++;
        }
        
        return root;
    }
    
	public static void inorder(Node root)
	{
	    if(root==null)
	    return;
	    inorder(root.left);
	    System.out.print(root.data);
	    inorder(root.right);
	}
     /* Drier program to test above functions */
    public static void main(String args[]) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	        
	        int t=Integer.parseInt(br.readLine());
    
	        while(t > 0){
	            String s = br.readLine();
    	    	Node root = buildTree(s);
        	    GFG g = new GFG();
			
			    ArrayList<Integer> res = g.zigZagTraversal(root) ;
			    for (int i = 0; i < res.size (); i++)
			        System.out.print (res.get (i) + " ");
			    System. out. println();  
    			
                t--;
            
        }
	}
}
// } Driver Code Ends




//User function Template for Java

/*class Node
{
    int data;
    Node left,right;
    Node(int d)
    {
        data=d;
        left=right=null;
    }
}*/

class GFG
{
    //Function to store the zig zag order traversal of tree in a list.
	ArrayList<Integer> zigZagTraversal(Node root)
	{

    //Your Code Start
	      ArrayList<Integer> result = new ArrayList<>();
	    
	    if (root == null)
	        return result;
	    
	    // Create two stacks to store nodes for zigzag traversal.
	    Stack<Node> currentLevel = new Stack<>();
	    Stack<Node> nextLevel = new Stack<>();
	    
	    // Flag to indicate the current level order.
	    boolean leftToRight = true;
	    
	    // Add the root to the current level stack.
	    currentLevel.push(root);
	    
	    // Traverse the tree level by level.
	    while (!currentLevel.isEmpty()) {
	        // Pop a node from the current level stack.
	        Node node = currentLevel.pop();
	        
	        // Add the node's value to the result list.
	        result.add(node.data);
	        
	        // Depending on the order, push the children nodes to the next level stack.
	        if (leftToRight) {
	            if (node.left != null)
	                nextLevel.push(node.left);
	            if (node.right != null)
	                nextLevel.push(node.right);
	        } else {
	            if (node.right != null)
	                nextLevel.push(node.right);
	            if (node.left != null)
	                nextLevel.push(node.left);
	        }
	        
	        // If the current level stack becomes empty, swap the stacks.
	        if (currentLevel.isEmpty()) {
	            leftToRight = !leftToRight;
	            Stack<Node> temp = currentLevel;
	            currentLevel = nextLevel;
	            nextLevel = temp;
	        }
	    }
	    
	    return result;
	    //Your Code end
	}
}
