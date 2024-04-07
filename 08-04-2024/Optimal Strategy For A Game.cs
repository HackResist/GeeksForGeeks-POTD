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

                int n = Convert.ToInt32(Console.ReadLine());
                int[] arr = new int[n];

                string elements = Console.ReadLine().Trim();
                elements = elements + " " + "0";
                arr = Array.ConvertAll(elements.Split(), int.Parse);


                Solution obj = new Solution();
                long res = obj.maximumAmount(arr, n);
                
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
    public long maximumAmount(int[] arr, int n)
    {
        //Your Code Start
                int[,] dp = new int[n, n];

        for (int g = 0; g < n; g++)
        {
            for (int i = 0, j = g; j < n; i++, j++)
            {
                if (g == 0)
                    dp[i, j] = arr[i];
                else if (g == 1)
                    dp[i, j] = Math.Max(arr[i], arr[j]);
                else
                {
                    dp[i, j] = Math.Max(
                        arr[i] + Math.Min(dp[i + 2, j], dp[i + 1, j - 1]),
                        arr[j] + Math.Min(dp[i + 1, j - 1], dp[i, j - 2])
                    );
                }
            }
        }

        return dp[0, n - 1];
        //Your code End
    }
}
