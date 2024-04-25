//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String s[] = read.readLine().split(" ");
            int N = Integer.parseInt(s[0]);
            int M = Integer.parseInt(s[1]);
            int Mat[][] = new int[N][M];
            for (int i = 0; i < N; i++) {
                String S[] = read.readLine().split(" ");
                for (int j = 0; j < M; j++) {
                    Mat[i][j] = Integer.parseInt(S[j]);
                }
            }
            Solution ob = new Solution();
            System.out.println(ob.findMaxSum(N, M, Mat));
        }
    }
}
// } Driver Code Ends


// User function Template for Java
//your Code  Start
class Solution {
    int findMaxSum(int n, int m, int mat[][]) {
        int cons = 3;
        if (m < cons || n < cons )
            return -1;
        int fix = -1;
        for (int a = 0; a < n - 2; a++) {
            for (int b = 0; b < m - 2; b++) {
                int maxi = mat[a][b] + mat[a][b + 1] + mat[a][b + 2] +
                           mat[a + 1][b + 1] +
                           mat[a + 2][b] + mat[a + 2][b + 1] + mat[a + 2][b + 2];
                fix = Math.max(fix, maxi);
            }
        }
        return fix;
    }
}
//Your Code End
