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
            int N = Integer.parseInt(read.readLine());
            long Arr[] = new long[N];
            String[] S = read.readLine().split(" ");
            for (int i = 0; i < N; i++) Arr[i] = Long.parseLong(S[i]);
            Solution ob = new Solution();
            System.out.println(ob.pairAndSum(N, Arr));
        }
    }
}
// } Driver Code Ends




// User function Template for Java

class Solution {
    static long pairAndSum(int n, long arr[]) {
        //Your Code Start
     long temp = 0;

       
        for (int i = 0; i < 32; i++) {
           
            long a = 0;
            for (int b = 0; b < n; b++)
                if ((arr[b] & (1 << i)) != 0) a++;
            temp =temp + (1 << i) * (a * (a - 1) / 2);
        }

        return temp;
        //Your Code End
    }
}
