//{ Driver Code Starts
// Initial Template for java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");
            int n = Integer.parseInt(S[0]);
            int m = Integer.parseInt(S[1]);
            int k = Integer.parseInt(S[2]);
            int mat[][] = new int[n][m];
            for (int i = 0; i < n; i++) {
                String S1[] = read.readLine().split(" ");
                for (int j = 0; j < m; j++) {
                    mat[i][j] = Integer.parseInt(S1[j]);
                }
            }
            Solution ob = new Solution();
            int ans[][] = ob.rotateMatrix(k, mat);
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) System.out.print(ans[i][j] + " ");
                System.out.println();
            }
        }
    }
}

// } Driver Code Ends


// User function template for java

class Solution {
    int[][] rotateMatrix(int k, int mat[][]) {
       
      //Your Code Start
        int r_no = mat.length; // Number of rows in the matrix
        int c_no = mat[0].length; // Number of columns in the matrix
        
        // If k is a multiple of c_no, the matrix remains unchanged
        if (k % c_no == 0) return mat;
        
        // Rotate each row individually
        for (int i = 0; i < r_no; i++) {
            int[] v = mat[i].clone(); // Copy the current row
            for (int j = 0; j < c_no; j++) {
                // Calculate the new position for each element in the row
                mat[i][(c_no - k % c_no + j) % c_no] = v[j];
            }
        }
        return mat;
      //Your Code End
    }
}
