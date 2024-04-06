//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    int n = sc.nextInt();
                    int m = sc.nextInt();
                    int a[] = new int[n];
                    int b[] = new int[m];
                    for(int i = 0;i<n;i++)
                        a[i] = sc.nextInt();
                    for(int i = 0;i<m;i++)
                        b[i] = sc.nextInt();    
                    Solution ob = new Solution();
                    System.out.println(ob.maxDotProduct(n, m, a, b));
                }
        }
}    
// } Driver Code Ends




//User function Template for Java

class Solution
{
	public int maxDotProduct(int n, int m, int a[], int b[]) 
	{ 
//Your Code Start
	         int[][] dp = new int[m + 1][n + 1];
        for (int y = 1; y <= m; ++y) {
            for (int x = y; x <= n; ++x) {
                int mx = dp[y - 1][x - 1] + a[x - 1] * b[y - 1];
                mx = Math.max(mx, dp[y][x - 1]);
                dp[y][x] = mx;
            }
        }
        return dp[m][n];
		// Your Code End
	} 
}
