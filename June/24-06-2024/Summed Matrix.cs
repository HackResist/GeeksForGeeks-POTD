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
                var ip = Console.ReadLine().Trim().Split(' ');
                long n = long.Parse(ip[0]);
                long q = long.Parse(ip[1]);
                Solution obj = new Solution();
                long res = obj.sumMatrix(n, q);
                Console.Write(res+"\n");
            }

        }
    }
}

// } Driver Code Ends


//User function Template for C#

class Solution
    {
        //Complete this function
        //Function to find the sum of all the elements of the given matrix.
        public long sumMatrix(long n, long q)
        {
          //Your Code Start
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
            //Your code End
        }
    }
