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
                int[][] arr = new int[N][];
                for (int i = 0; i < N; i++)
                {
                    arr[i] = new int[M];
                }
                for (int i = 0; i < N; i++)
                {
                    var ipp = Console.ReadLine().Trim().Split(' ');
                    for (int j = 0; j < M; j++)
                    {
                        arr[i][j] = int.Parse(ipp[j]);
                    }
                }
                Solution obj = new Solution();
                var res = obj.findMaxSum(N, M, arr);
                Console.WriteLine(res);
            }
        }
    }
}
// } Driver Code Ends


//User function Template for C#
//Your Code Start
class Solution {
    // Complete this function
    public int findMaxSum(int N, int M, int[][] Mat) {
        int cons = 3;
        if (M < cons || N < cons)
            return -1;
        int fix = -1;
        for (int a = 0; a < N - 2; a++) {
            for (int b = 0; b < M - 2; b++) {
                int maxi = Mat[a][b] + Mat[a][b + 1] + Mat[a][b + 2] +
                           Mat[a + 1][b + 1] +
                           Mat[a + 2][b] + Mat[a + 2][b + 1] + Mat[a + 2][b + 2];
                fix = Math.Max(fix, maxi);
            }
        }
        return fix;
    }
}
//Your Code End
