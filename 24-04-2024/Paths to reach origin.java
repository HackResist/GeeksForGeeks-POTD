//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.*;


// } Driver Code Ends
//User function Template for Java

//Your Code Start
class Solution
{
    public static int ways(int n, int m)
    {
        
         int modulo = 1000000007;
       // Initialize a 2D array to store the number of ways to reach each point
        int[][] dp = new int[n + 1][m + 1];
        
        // Iterate through each point in the grid
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= m; j++) {
                // Base case: there is only one way to reach the starting point (0, 0)
                if (i == 0 || j == 0) {
                    dp[i][j] = 1;
                    continue;
                }
                
                // Calculate the number of ways to reach the current point
                // by summing the number of ways from the left and from above
                dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % modulo;
            }
        }
        
        // Return the number of ways to reach the target point (x, y)
        return dp[n][m];
        // complete the function
    }
}
//Your Code End

//{ Driver Code Starts.

// Driver class
class Array {
    
    // Driver code
	public static void main (String[] args) throws IOException{
		// Taking input using buffered reader
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int testcases = Integer.parseInt(br.readLine());
		// looping through all testcases
		while(testcases-- > 0){
		    String line = br.readLine();
		    String[] elements = line.trim().split("\\s+");
		    int x=Integer.parseInt(elements[0]);
		    int y=Integer.parseInt(elements[1]);
		    Solution ob = new Solution();
		    System.out.println(ob.ways(x,y));
		}
	}
}
// } Driver Code Ends
