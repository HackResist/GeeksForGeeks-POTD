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
            int ans = ob.findCoverage(matrix);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends


// User function Template for Java

class Solution {
    public int findCoverage(int[][] matrix) {
//Your Code Start
      // Initialize the coverage counter to 0
        int count = 0;
        // Get the number of rows (n) and columns (m) in the matrix
        int n = matrix.length;
        int m = matrix[0].length;

        // Iterate over each row in the matrix
        for (int i = 0; i < n; i++) {
            // Iterate over each column in the current row
            for (int j = 0; j < m; j++) {
                // Check if the current element is 0
                if (matrix[i][j] == 0) {
                    // Check the cell below the current cell
                    if (i + 1 < n && matrix[i + 1][j] == 1) {
                        count++;
                    }
                    // Check the cell above the current cell
                    if (i - 1 >= 0 && matrix[i - 1][j] == 1) {
                        count++;
                    }
                    // Check the cell to the right of the current cell
                    if (j + 1 < m && matrix[i][j + 1] == 1) {
                        count++;
                    }
                    // Check the cell to the left of the current cell
                    if (j - 1 >= 0 && matrix[i][j - 1] == 1) {
                        count++;
                    }
                }
            }
        }

        // Return the total count of adjacent 1s for all 0s in the matrix
        return count;
      //Your Code End
    }
}
