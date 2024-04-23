//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int n = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.firstElement(n));
        }
    }
}
// } Driver Code Ends




// User function Template for Java
//Your Code Start
class Solution {
    static int firstElement(int n) {
 // Declare and initialize the variable to store the modulo value
        int modulo = 1000000007;
        
        // Check if n is equal to 1 or 2, return 1 as per the problem statement
        if (n == 1 || n == 2) return 1;
        
        // Declare and initialize variables to store the first two elements of the sequence
        int n1 = 1, n2 = 1;
        
        // Declare a variable to store the current element of the sequence
        int current = 0;
        
        // Loop through the sequence starting from the third element (i = 2)
        for (int i = 2; i < n; i++) {
            // Calculate the current element by adding the previous two elements
            current = n2 + n1;
            
            // Take modulo to avoid overflow and reduce the result to the range [0, mod)
            current %= modulo;
            
            // Update the previous two elements for the next iteration
            n1 = n2;
            n2 = current;
        }
        
        // Return the last element of the sequence modulo mod
        return n2 % modulo;
    
    }
}
//Your code End
