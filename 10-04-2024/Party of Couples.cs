//{ Driver Code Starts
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
                int[] arr = new int[N];
                var stringArray = Console.ReadLine().Split(' ');
                for (int i = 0; i < N; i++)
                {
                    arr[i] = Convert.ToInt32(stringArray[i]);
                }

                Solution obj = new Solution();
                int res = obj.findSingle(N, arr);
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
        public int findSingle(int N, int[] arr)
        {
            //Your Code Start
           int var = 0;
           for (int i = 0; i < N; i++) {
              var ^= arr[i];
             }
           return var;
           

            //Your code End
        }
    }
