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
                    Solution ob = new Solution();
                    System.out.println(ob.padovanSequence(n));
                }
        }
}    
// } Driver Code Ends


//User function Template for Java

class Solution
{
  public int padovanSequence(int n)
    {
          //Your Code Start
        if (n == 0 || n == 1 || n == 2) {
            return 1;
        }

        final int MOD = 1000000007;
        int p0 = 1, p1 = 1, p2 = 1;  
        int p_curr = 0;

        for (int i = 3; i <= n; ++i) {
            p_curr= (p1 + p0) % MOD;
            p0 = p1;
            p1 = p2;
            p2 = p_curr;
        }

        return p_curr;
    //Your Code End
    }
    
}
