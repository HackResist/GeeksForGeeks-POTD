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
            int ans = sln.findPages(a, k);

            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends



//Back-end complete function Template for Java


//Your Code Starts

class Solution {
    private boolean isFeasible(int[] arr, int k, int maxPages) {
        int stu = 1; 
        int currSum = 0;

        for (int pages : arr) {
            if (pages > maxPages) return false; 
            if (currSum + pages > maxPages) {
                stu++;
                currSum = pages; 
                if (stu > k) return false;
            } else {
                currSum += pages;
            }
        }
        return true;
    }
    public int findPages(int[] arr, int k) {
        int n = arr.length;
        if (k > n) return -1;

        int l = Arrays.stream(arr).max().getAsInt(); 
        int h = Arrays.stream(arr).sum(); 
        int res = -1;

        while (l <= h) {
            int mid = l + (h - l) / 2;
            if (isFeasible(arr, k, mid)) {
                res = mid; 
                h = mid - 1; 
            } else {
                l = mid + 1; 
            }
        }
        return res;
    }
}

//Your Code Ends 
