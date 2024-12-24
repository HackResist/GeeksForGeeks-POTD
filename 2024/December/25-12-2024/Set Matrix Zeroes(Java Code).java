//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();
        while (tc-- > 0) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int arr[][] = new int[n][m];

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    arr[i][j] = sc.nextInt();
                }
            }
            new Solution().setMatrixZeroes(arr);
            for (int[] row : arr) {
                for (int val : row) {
                    System.out.print(val + " ");
                }
                System.out.println();
            }

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


//Back-end complete function Template for Java
//Your Code Starts
class Solution {
    public void setMatrixZeroes(int[][] mat) {
        int n = mat.length;
        int m = mat[0].length;
        
        boolean firstRowZero = false, firstColZero = false;
        for (int i = 0; i < n; i++) {
            if (mat[i][0] == 0) {
                firstColZero = true;
                break;
            }
        }
        for (int j = 0; j < m; j++) {
            if (mat[0][j] == 0) {
                firstRowZero = true;
                break;
            }
        }
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][j] == 0) {
                    mat[i][0] = 0;
                    mat[0][j] = 0;
                }
            }
        }
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][0] == 0 || mat[0][j] == 0) {
                    mat[i][j] = 0;
                }
            }
        }
        if (firstRowZero) {
            for (int j = 0; j < m; j++) {
                mat[0][j] = 0;
            }
        }
        if (firstColZero) {
            for (int i = 0; i < n; i++) {
                mat[i][0] = 0;
            }
        }
    }
}
//Your Code Ends
