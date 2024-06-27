//{ Driver Code Starts
import java.util.*;

class Check_IsToepliz {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T > 0) {
            int N = sc.nextInt();
            int M = sc.nextInt();
            int arr[][] = new int[N][M];
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < M; j++) arr[i][j] = sc.nextInt();
            }

            Solution g = new Solution();
            boolean b = g.isToeplitz(arr);

            if (b == true)
                System.out.println("true");
            else
                System.out.println("false");

            T--;
        }
    }
}
// } Driver Code Ends


class Solution {
    /*You are required to complete this method*/
    boolean isToeplitz(int mat[][]) {
        // Your code Start
           int r = mat.length;
        int c = mat[0].length;
        
        for (int row = 0; row < r - 1; ++row) {
            for (int col = 0; col < c - 1; ++col) {
                if (mat[row][col] != mat[row + 1][col + 1]) {
                    return false;
                }
            }
        }
        return true;
        //Your Code End
    }
}
