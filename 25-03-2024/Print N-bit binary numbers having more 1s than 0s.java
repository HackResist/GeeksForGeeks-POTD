//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int n = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            ArrayList<String> result = ob.NBitBinary(n);
            for(String value  : result){
                System.out.print(value + " ");
            }
            System.out.println();
        }
    }
}
// } Driver Code Ends


//User function Template for Java

class Solution {
  //your Code Start
     private static ArrayList<String> ans;
    ArrayList<String> NBitBinary(int N) {
        // code here
        char[] arr = new char[N];
        ans = new ArrayList<>();
        solve(arr, 0, 0);
        return ans;
    }
    private static void solve(char[] arr, int ptr, int oneCt) {
        if(ptr == arr.length) {
            ans.add(new String(arr));
            return;
        }
        // put '1'
        arr[ptr] = '1';
        solve(arr, ptr + 1, oneCt + 1);
        

        // put '0'
        int noOfZeros = ptr - oneCt;
        if(noOfZeros + 1 <= oneCt) {
            arr[ptr] = '0';
            solve(arr, ptr + 1, oneCt);
        }
//Your Code End
    }
}
