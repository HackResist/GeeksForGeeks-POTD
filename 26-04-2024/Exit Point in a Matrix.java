//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            String[] s = br.readLine().trim().split(" ");
            int n = Integer.parseInt(s[0]);
            int m = Integer.parseInt(s[1]);
            int[][] matrix = new int[n][m];
            for (int i = 0; i < n; i++) {
                String[] S = br.readLine().split(" ");
                for (int j = 0; j < m; j++) {
                    matrix[i][j] = Integer.parseInt(S[j]);
                }
            }
            Solution ob = new Solution();
            int[] ans = ob.FindExitPoint(n, m, matrix);
            for (int i = 0; i < ans.length; i++) System.out.print(ans[i] + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends




// User function Template for Java
//Your Code Start

class Solution {
    public int[] FindExitPoint(int n, int m, int[][] matrix) {
        // code here
          int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}}; // right, down, left, up

        int i = 0, j = 0;
        int count = 0;

        while (i >= 0 && i < n && j >= 0 && j < m) {
            if (matrix[i][j] == 1) { // Found a 1, change direction and mark it as visited
                matrix[i][j] = 0;
                count++;
            }

            // Move in the current direction
            i += directions[count % 4][0];
            j += directions[count % 4][1];
        }

        // Calculate exit point coordinates based on the last direction before exiting the matrix
        if (count % 4 == 0) { // last direction was right
            j--; // Adjust column
        } else if (count % 4 == 1) { // last direction was down
            i--; // Adjust row
        } else if (count % 4 == 2) { // last direction was left
            j++; // Adjust column
        } else { // last direction was up
            i++; // Adjust row
        }

        return new int[]{i, j};
    }
}
//Your Code End
