//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());

        while (tc-- > 0) {

            String[] str = br.readLine().trim().split(" ");
            int[] a = new int[str.length];
            for (int i = 0; i < str.length; i++) {
                a[i] = Integer.parseInt(str[i]);
            }
            String[] nk = br.readLine().trim().split(" ");
            int k = Integer.parseInt(nk[0]);
            Solution sln = new Solution();
            int ans = sln.kthMissing(a, k);

            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends

//Your Code Starts
class Solution {
    public int kthMissing(int[] arr, int k) {
        // code here
       int n = arr.length; 
        int l = 0, h = n - 1, mis;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            mis = arr[mid] - (mid + 1); 
            
            if (mis < k) {
                l = mid + 1; 
            } else {
                h = mid - 1;
            }
        }
        return l + k;
    }
}

//Your Code Ends
