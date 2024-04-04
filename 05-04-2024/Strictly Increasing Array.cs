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

                int N = Convert.ToInt32(Console.ReadLine());
                List<int> nums = new List<int>();
                var ip = Console.ReadLine().Trim().Split(' ');
                for (int i = 0; i < N; i++)
                {
                    nums.Add(int.Parse(ip[i]));
                }
                Solution obj = new Solution();
                int res = obj.min_operations(nums);
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
        //Function to return the minimum number of operations required to make all elements equal.
     
          //Your Code Start
    public int min_operations(List<int> nums)
    {
       int n = nums.Count;
        int[] dp = new int[n];
        Array.Fill(dp, 1);

        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < i; j++)
            {
                if (nums[i] - nums[j] >= i - j)
                {
                    dp[i] = Math.Max(dp[i], dp[j] + 1);
                }
            }
        }

        int maxOps = dp.Max();
        return n - maxOps;
        //Your Code End
    }


    }
