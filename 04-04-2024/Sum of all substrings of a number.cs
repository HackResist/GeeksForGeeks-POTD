//{ Driver Code Starts
//Initial Template for C#


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DriverCode
{

    class GFG
    {
        static void Main(string[] args)
        {
            int testcases;// Taking testcase as input
            testcases = Convert.ToInt32(Console.ReadLine());
            while (testcases-- > 0)// Looping through all testcases
            {
                string name = Console.ReadLine();
                Solution obj = new Solution();
                long res = obj.sumSubstrings(name);
                Console.Write(res+"\n");
            }

        }
    }
}

// } Driver Code Ends




//User function Template for C#

class Solution
{
     private const long Mod = 1000000007;
    //Complete this function
    //Function to find sum of all possible substrings of the given string.
    public long sumSubstrings(string s)
    {
        //Your code Start
          long ans = 0;
        long temp = 0;
        int n = s.Length;
        for (int i = 0; i < n; i++) {
            temp = temp * 10 + (i + 1) * (s[i] - '0');
            temp %= Mod;
            ans += temp;
            ans %= Mod;
        }
        return ans;
        //Your Code End
    }
}
