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

                var ip = Console.ReadLine().Trim().Split(' ');
                int N = int.Parse(ip[0]);
                int M = int.Parse(ip[1]);
                List<List<int>> mat = new List<List<int>>();
                for (int i = 0; i < N; i++)
                {
                    mat.Add(new List<int>());
                }
                for (int i = 0; i < N; i++)
                {
                    ip = Console.ReadLine().Trim().Split(' ');
                    for (int j = 0; j < M; j++)
                    {
                        mat[i].Add(int.Parse(ip[j]));
                    }
                }
                Solution obj = new Solution();
                var res = obj.minRow(N, M, mat);
                Console.WriteLine(res);
            }
        }
    }
}

// } Driver Code Ends




//User function Template for C#
///Your Code start
class Solution
    {
        //Complete this function
        public int minRow(int N, int M, List<List<int>> A)
        {
             int minIndex = -1; // Initialize the index of the row with the minimum ones count to an invalid value
        int minCount = int.MaxValue; // Initialize the minimum ones count with a large value
        
        // Iterate over each row
        for (int i = 0; i < N; i++)
        {
            int cnt = 0; // Initialize count for ones in the current row
            
            // Count the number of ones in the current row
            for (int j = 0; j < M; j++)
            {
                if (A[i][j] == 1)
                {
                    cnt++;
                }
            }
            
            // Update the minimum ones count and corresponding row index if a smaller count is found
            if (cnt < minCount)
            {
                minCount = cnt;
                minIndex = i + 1;
            }
        }
        
        // Return the index of the row with the minimum ones count
        return minIndex;
        }

    }
//Your Code End
