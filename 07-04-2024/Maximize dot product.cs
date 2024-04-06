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
                int n = int.Parse(ip[0]);
                int m = int.Parse(ip[1]);
                int[] arr = new int[n];
                ip = Console.ReadLine().Trim().Split(' ');
                for (int i = 0; i < n; i++)
                {
                    arr[i] = int.Parse(ip[i]);
                }
                int[] brr = new int[m];
                ip = Console.ReadLine().Trim().Split(' ');

                for (int i = 0; i < m; i++)
                {
                    brr[i] = int.Parse(ip[i]);
                }
                Solution ab = new Solution();
                Console.WriteLine(ab.maxDotProduct(n, m, arr, brr));
            }

        }
    }
}
// } Driver Code Ends




//User function Template for C#

class Solution
{
    //Complete this function
    public int maxDotProduct(int n, int m, int[] A, int[] B)
    {
        //Your Code Start
          // Initialize a 2D array for dynamic programming
        int[,] dp = new int[m + 1, n + 1];
        
        // Iterate over the array elements to compute the maximum dot product
        for (int y = 1; y <= m; y++)
        {
            for (int x = y; x <= n; x++)
            {
                int mx = dp[y - 1, x - 1] + A[x - 1] * B[y - 1];
                mx = Math.Max(mx, dp[y, x - 1]);
                dp[y, x] = mx;
            }
        }
        
        // Return the maximum dot product
        return dp[m, n];
        //Your code End
    }
}
