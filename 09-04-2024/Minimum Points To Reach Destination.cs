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
                int m = int.Parse(ip[0]);
                int n = int.Parse(ip[1]);
                List<List<int>> matrix = new List<List<int>>();
                for (int i = 0; i < m; i++)
                {
                    matrix.Add(new List<int>());
                }
                for (int i = 0; i < m; i++)
                {
                    ip = Console.ReadLine().Trim().Split(' ');
                    for (int j = 0; j < n; j++)
                    {
                        matrix[i].Add(int.Parse(ip[j]));
                    }
                }
                Solution obj = new Solution();
                var res = obj.minPoints(matrix, m, n);
                Console.WriteLine(res);
            }

        }
    }
}
// } Driver Code Ends


//User function Template for C#

class Solution
    {
        //Complete this function
        //Your Code Start
        public int minPoints(List<List<int>> points, int m, int n) 
        { 
             int[][] dp = new int[m][];

        for (int i = 0; i < m; i++) {
            dp[i] = new int[n];
        }

        // Initialize the bottom-right cell
        dp[m - 1][n - 1] = Math.Max(1, 1 - points[m - 1][n - 1]);

        // Fill the last column
        for (int i = m - 2; i >= 0; i--) {
            dp[i][n - 1] = Math.Max(1, dp[i + 1][n - 1] - points[i][n - 1]);
        }

        // Fill the last row
        for (int j = n - 2; j >= 0; j--) {
            dp[m - 1][j] = Math.Max(1, dp[m - 1][j + 1] - points[m - 1][j]);
        }

        // Fill the rest of the cells starting from the second-to-last row and column
        for (int i = m - 2; i >= 0; i--) {
            for (int j = n - 2; j >= 0; j--) {
                int minPointsRequired = Math.Min(dp[i + 1][j], dp[i][j + 1]);
                dp[i][j] = Math.Max(1, minPointsRequired - points[i][j]);
            }
        }

        return dp[0][0];
            //Your code End
        } 
    }
