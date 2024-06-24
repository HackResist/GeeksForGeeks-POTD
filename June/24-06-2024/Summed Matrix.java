//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");

            long n = Long.parseLong(S[0]);
            long q = Long.parseLong(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.sumMatrix(n, q));
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    static long sumMatrix(long n, long q) {
        // Your Code Start
            if (q == 1 || q > 2 * n) return 0;
        
        long midCnt = n;
        long midElement = n + 1;
        long ans = 0;
        
        if (q >= midElement) {
            ans = midCnt - q + midElement;
        } else {
            ans = midCnt - midElement + q;
        }
        
        return ans;
      //Your Code End
    }
}
