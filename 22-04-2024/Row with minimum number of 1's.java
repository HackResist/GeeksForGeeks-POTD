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
            int A[][] = new int[N][M];
            for (int i = 0; i < N; i++) {
                String S[] = read.readLine().split(" ");
                for (int j = 0; j < M; j++) {
                    A[i][j] = Integer.parseInt(S[j]);
                }
            }
            Solution ob = new Solution();
            System.out.println(ob.minRow(N, M, A));
        }
    }
}

// } Driver Code Ends


// User function Template for Java
//Your Code Start
class Solution {
    int minRow(int n, int m, int a[][]) {
        // code here
          int Minindex = 1; // Initialize the index of the row with the minimum ones count
        int MinCount = 1000; // Initialize the minimum ones count with a large value
        
        // Iterate over each row
        for (int i = 0; i < n; i++) {
            int cnt = 0; // Initialize count for ones in the current row
            
            // Count the number of ones in the current row
            for (int j = 0; j < m; j++) {
                if (a[i][j] == 1) {
                    cnt++;
                }
            }
            
            // Update the minimum ones count and corresponding row index if a smaller count is found
            if (cnt < MinCount) {
                MinCount = cnt;
                Minindex = i + 1;
            }
        }
        
        // Return the index of the row with the minimum ones count
        return Minindex;
    }
};

//Your Code End
