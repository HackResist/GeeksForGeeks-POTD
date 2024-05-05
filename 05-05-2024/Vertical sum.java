//{ Driver Code Starts
//Initial Template for Java

import java.util.LinkedList; 
import java.util.Queue; 
import java.io.*;
import java.util.*;

class Node{
    int data;
    Node left;
    Node right;
    Node(int data){
        this.data = data;
        left=null;
        right=null;
    }
}

class GfG {
    
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
    
	public static void main (String[] args) throws IOException{
	        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	        
	        int t=Integer.parseInt(br.readLine());
    
	        while(t > 0){
	            String s = br.readLine();
    	    	Node root = buildTree(s);
        	    Solution g = new Solution();
			
			    ArrayList <Integer> res = g.verticalSum(root);
			    for (Integer num : res) System.out.print (num + " ");
			    System.out.println();
                t--;
            
        }
    }
  
}


// } Driver Code Ends


/*Complete the function below
Node is as follows:
class Node{
int data;
Node left, right;
Node(int item)
{
    data = item;
    left = right = null
}
}
*/
//Your Code Start
class Solution{
    public ArrayList <Integer> verticalSum(Node root) {
      // Map to store the vertical sum
        TreeMap<Integer, Integer> verticalSumMap = new TreeMap<>();
        
        // Utility function to perform vertical traversal
        // Recursive approach
        verticalTraversal(root, 0, verticalSumMap);
        
        // Extract vertical sums from the map into an ArrayList
        ArrayList<Integer> verticalSums = new ArrayList<>();
        for (int sum : verticalSumMap.values()) {
            verticalSums.add(sum);
        }
        
        return verticalSums;
    }
    
    // Recursive method to perform vertical traversal
    private void verticalTraversal(Node node, int level, TreeMap<Integer, Integer> verticalSumMap) {
        if (node == null) return;
        
        // Add node's data to the vertical sum for its level
        verticalSumMap.put(level, verticalSumMap.getOrDefault(level, 0) + node.data);
        
        // Traverse left and right subtrees with adjusted levels  
        verticalTraversal(node.left, level - 1, verticalSumMap);
        verticalTraversal(node.right, level + 1, verticalSumMap);
      //Your Code End
    }
}
