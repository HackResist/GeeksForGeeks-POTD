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
                string elements = Console.ReadLine().Trim();
                elements = elements + " " + "0";
                int[] arr = Array.ConvertAll(elements.Split(), int.Parse);
                int x = arr[0];
                int y = arr[1];
                Solution obj = new Solution();
                int res = obj.ways(x, y);
                Console.Write(res+"\n");
          }

        }
    }
}
// } Driver Code Ends


//User function Template for C#
//Your Code Start
class Solution
{
    //Complete this function
    public int ways(int x, int y)
    {
           // Define a constant for modular arithmetic
        int modulo = 1000000007;
         // Initialize a 2D array to store the number of ways to reach each point
        int[,] dp = new int[x + 1, y + 1];

        // Base case: there is only one way to reach the starting point (0, 0)
        dp[0, 0] = 1;

        // Iterate through each point in the grid
        for (int i = 0; i <= x; i++)
        {
            for (int j = 0; j <= y; j++)
            {
                // Check if current point is not the starting point
                if (!(i == 0 && j == 0))
                {
                    // Calculate the number of ways to reach the current point
                    // by summing the number of ways from the left and from above
                    dp[i, j] = ((i > 0 ? dp[i - 1, j] : 0) + (j > 0 ? dp[i, j - 1] : 0)) % modulo;
                }
            }
        }

        // Return the number of ways to reach the target point (x, y)
        return dp[x, y];
        //code here.
    }
}
//Your Code End
