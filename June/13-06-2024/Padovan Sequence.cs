//{ Driver Code Starts
// Initial Template for C#

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
                int N = Convert.ToInt32(Console.ReadLine());// Input for size of array
                Solution obj = new Solution();
                int res = obj.padovanSequence(N);
                Console.Write(res);
                Console.Write("\n");
          }

        }
    }
}
// } Driver Code Ends


//User function Template for C#
class Solution
    {
        //Complete this function
        public int padovanSequence(int n)
        {
             //Your Code Start

        if (n == 0 || n == 1 || n == 2)
        {
            return 1;
        }

        const int MOD = 1000000007;
        int p0 = 1, p1 = 1, p2 = 1;
        int p_current = 0;

        for (int i = 3; i <= n; ++i)
        {
            p_current = (p1 + p0) % MOD;
            p0 = p1;
            p1 = p2;
            p2 = p_current;
            
           
        }

        return p_current;
          //Your Code End
        }
        
    }
