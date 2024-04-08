//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GfG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int points[][] = new int[m][n];
            for (int i = 0; i < m; i++)
                for (int j = 0; j < n; j++) points[i][j] = sc.nextInt();
            Solution ob = new Solution();
            System.out.println(ob.minPoints(points, m, n));
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    public int minPoints(int points[][], int m, int n) {
        // Your Code Start
          int[][] dp = new int[m][n];

        // Initialize the bottom-right cell
        dp[m - 1][n - 1] = Math.max(1, 1 - points[m - 1][n - 1]);

        // Fill the last column
        for (int i = m - 2; i >= 0; --i) {
            dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - points[i][n - 1]);
        }

        // Fill the last row
        for (int j = n - 2; j >= 0; --j) {
            dp[m - 1][j] = Math.max(1, dp[m - 1][j + 1] - points[m - 1][j]);
        }

        // Fill the rest of the cells starting from the second-to-last row and column
        for (int i = m - 2; i >= 0; --i) {
            for (int j = n - 2; j >= 0; --j) {
                int minPointsRequired = Math.min(dp[i + 1][j], dp[i][j + 1]);
                dp[i][j] = Math.max(1, minPointsRequired - points[i][j]);
            }
        }

        return dp[0][0];
        //Your Code End
    }
}
