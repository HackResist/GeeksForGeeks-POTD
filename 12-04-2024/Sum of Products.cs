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
                long[] Arr = new long[N];

                string elements = Console.ReadLine().Trim();
                elements = elements + " " + "0";
                Arr = Array.ConvertAll(elements.Split(), long.Parse);

                Solution obj = new Solution();
                long res = obj.pairAndSum(N, Arr);
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
        //Function to calculate and return the sum of the array elements.
        public long pairAndSum(int N, long[] Arr)
        {
            //Your Code Start
             long value = 0;
             for (int i = 0; i < 32; i++)
               {
          
            long b = 0; 
            for (int j = 0; j < N; j++)
            {
                if ((Arr[j] & (1 << i)) != 0)
                {
                    b=b+1;
                }
            }

            value =value+ (1 << i) * (b * (b - 1) / 2);
        }

        return value;
            //Your code End
        }

    }
