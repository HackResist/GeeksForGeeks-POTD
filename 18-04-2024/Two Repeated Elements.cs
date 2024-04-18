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
                int[] arr = new int[N+2];
                string elements = Console.ReadLine().Trim();
                elements = elements + " " + "0";
                arr = Array.ConvertAll(elements.Split(), int.Parse);
                Solution obj = new Solution();
                List<int> res = new List<int>();
                res = obj.twoRepeated(arr, N);
                for(int i=0;i<res.Count;i++){
                    Console.Write(res[i]+" ");
                }
                Console.Write("\n");
          }

        }
    }
}

// } Driver Code Ends


//User function template for C#
//Your Code Start
class Solution {
    // Function to find two repeated elements.
    public List<int> twoRepeated(int[] arr, int N) {
        List<int> list = new List<int>();
        Dictionary<int, int> countMap = new Dictionary<int, int>();

        for (int i = 0; i < arr.Length; i++) {
            if (countMap.ContainsKey(arr[i])) {
                list.Add(arr[i]);
            } else {
                countMap[arr[i]] = 1;
            }
        }

        return list;
    }
}
//Your Code End
