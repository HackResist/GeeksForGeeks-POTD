//{ Driver Code Starts
// INITIAL CODE
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DriverCode {

class GFG {
    static void Main(string[] args) {
        int testcases; // Taking testcase as input
        testcases = Convert.ToInt32(Console.ReadLine());
        while (testcases-- > 0) // Looping through all testcases
        {
            int N = Convert.ToInt32(Console.ReadLine());
            Solution obj = new Solution();
            long res = obj.countWays(N);

            Console.Write(res + "\n");
        }
    }
}
}

// } Driver Code Ends




// User function Template for C#
class Solution {
    // Complete this function
    // Function to count number of ways to reach the nth stair
    // when order does not matter.
    public long countWays(int n) {
        // Your Code Start
         return n/2+1;
      //Your Code End
    }
}
