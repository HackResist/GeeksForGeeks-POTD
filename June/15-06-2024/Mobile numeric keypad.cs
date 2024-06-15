//{ Driver Code Starts
// Initial Template for C#

using System;
using System.Numerics;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DriverCode {

class GFG {
    static void Main(string[] args) {
        int testcases; // Taking testcase as input
        testcases = Convert.ToInt32(Console.ReadLine());
        while (testcases-- > 0) // Looping through all testcases
        {
            int n = Convert.ToInt32(Console.ReadLine());
            Solution obj = new Solution();
            long res = obj.getCount(n);
            Console.Write(res + "\n");
        }
    }
}
}

// } Driver Code Ends


// User function Template for C#

class Solution {
    // Complete this function
    public long getCount(int n) {
        // Your code Start
         if (n == 1) return 10; // For n=1, there are 10 single-digit numbers from 0 to 9
        
        // Define the moves from each digit
        int[][] moves = {
            new int[] {0, 8},      // 0 can move to 0, 8
            new int[] {1, 2, 4},   // 1 can move to 1, 2, 4
            new int[] {1, 2, 3, 5},// 2 can move to 1, 2, 3, 5
            new int[] {2, 3, 6},   // 3 can move to 2, 3, 6
            new int[] {1, 4, 5, 7},// 4 can move to 1, 4, 5, 7
            new int[] {2, 4, 5, 6, 8},// 5 can move to 2, 4, 5, 6, 8
            new int[] {3, 5, 6, 9},// 6 can move to 3, 5, 6, 9
            new int[] {4, 7, 8},   // 7 can move to 4, 7, 8
            new int[] {0, 5, 7, 8, 9},// 8 can move to 0, 5, 7, 8, 9
            new int[] {6, 8, 9}    // 9 can move to 6, 8, 9
        };

        // DP table
        long[,] dp = new long[n + 1, 10];

        // Initialize the base case
        for (int j = 0; j <= 9; ++j) {
            dp[1, j] = 1;
        }

        // Fill the DP table
        for (int i = 2; i <= n; ++i) {
            for (int j = 0; j <= 9; ++j) {
                foreach (int move in moves[j]) {
                    dp[i, move] += dp[i - 1, j];
                }
            }
        }

        // Sum up all the numbers of length n
        long result = 0;
        for (int j = 0; j <= 9; ++j) {
            result += dp[n, j];
        }

        return result;
      //Your Code End
    }
}
