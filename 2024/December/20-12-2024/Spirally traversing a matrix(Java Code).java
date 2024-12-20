//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int r = sc.nextInt();
            int c = sc.nextInt();

            int matrix[][] = new int[r][c];

            for (int i = 0; i < r; i++) {
                for (int j = 0; j < c; j++) matrix[i][j] = sc.nextInt();
            }
            Solution ob = new Solution();
            ArrayList<Integer> ans = ob.spirallyTraverse(matrix);
            for (Integer val : ans) System.out.print(val + " ");
            System.out.println();

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

//Your Code Starts
class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    public ArrayList<Integer> spirallyTraverse(int mat[][]) {
        // code here
         int row_0 = 0, col_0 = 0, row_1 = mat.length - 1, col_1 = mat[0].length - 1;
        ArrayList<Integer> res = new ArrayList<>();
        
        while (row_0 <= row_1 && col_0 <= col_1) {
            for (int j = col_0; j <= col_1; j++) res.add(mat[row_0][j]);
            row_0++;
            for (int i = row_0; i <= row_1; i++) res.add(mat[i][col_1]);
            col_1--;
            if (row_0 <= row_1) {
                for (int j = col_1; j >= col_0; j--) res.add(mat[row_1][j]);
                row_1--;
            }
            if (col_0 <= col_1) {
                for (int i = row_1; i >= row_0; i--) res.add(mat[i][col_0]);
                col_0++;
            }
        }
        return res;
    }
}
//Your Code Ends
