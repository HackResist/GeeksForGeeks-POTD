//{ Driver Code Starts
//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
class GFG {
	public static void main (String[] args) {
	    
	    //taking input using Scanner class
		Scanner sc=new Scanner(System.in);
		
		//taking total testcases
		int t=sc.nextInt();
		sc.nextLine();
		while(t-->0)
		{
		    //taking the String
		    String s=sc.nextLine();
		    Solution ob = new Solution();
		    //calling method sumSubstrings() 
		    System.out.println(ob.sumSubstrings(s));
		}
	}
}
// } Driver Code Ends




//User function Template for Java

class Solution
{
    //Function to find sum of all possible substrings of the given string.
    //Your Code Start
     private static final long MOD = 1000000007;

    public long sumSubstrings(String s) {
        long ans = 0;
        long temp = 0;
        int n = s.length();
        for (int i = 0; i < n; i++) {
            temp = temp * 10 + (i + 1) * (s.charAt(i) - '0');
            temp %= MOD;
            ans += temp;
            ans %= MOD;
        }
        return ans;
        //Your Code End
    }
}
