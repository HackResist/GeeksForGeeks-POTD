//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GfG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            Solution ob = new Solution();
            System.out.println(ob.getCount(n));
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    public long getCount(int n) {
        // Your code Start
            if (n == 1) return 10; // For n=1, there are 10 single-digit numbers from 0 to 9

        // Define the moves from each digit
        int[][] moves = {
            {0, 8},     // 0 can move to 0, 8
            {1, 2, 4},  // 1 can move to 1, 2, 4
            {1, 2, 3, 5}, // 2 can move to 1, 2, 3, 5
            {2, 3, 6},  // 3 can move to 2, 3, 6
            {1, 4, 5, 7}, // 4 can move to 1, 4, 5, 7
            {2, 4, 5, 6, 8}, // 5 can move to 2, 4, 5, 6, 8
            {3, 5, 6, 9}, // 6 can move to 3, 5, 6, 9
            {4, 7, 8},  // 7 can move to 4, 7, 8
            {0, 5, 7, 8, 9}, // 8 can move to 0, 5, 7, 8, 9
            {6, 8, 9}   // 9 can move to 6, 8, 9
        };

        // DP table
        long[][] dp = new long[n + 1][10];

        // Initialize the base case
        for (int j = 0; j <= 9; ++j) {
            dp[1][j] = 1;
        }

        // Fill the DP table
        for (int i = 2; i <= n; ++i) {
            for (int j = 0; j <= 9; ++j) {
                for (int move : moves[j]) {
                    dp[i][move] += dp[i - 1][j];
                }
            }
        }

        // Sum up all the numbers of length n
        long result = 0;
        for (int j = 0; j <= 9; ++j) {
            result += dp[n][j];
        }

        return result;
        //Your Code End
    }
}
