//{ Driver Code Starts
// Initial Template for C#

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
            int d = Convert.ToInt32(Console.ReadLine());
            Solution obj = new Solution();
            int res = obj.minSteps(d);
            Console.Write(res);
            Console.Write("\n");
        }
    }
}

}

// } Driver Code Ends




// User function Template for C#

class Solution {
    // Complete this function
    public int minSteps(int d) {
        // Your Code Start
        int addition = 1;
        int element = 0;
        int count = 0;
        while (element < d) {
            element += addition;
            addition++;
            count++;
        }
        while ((element - d) % 2 != 0) {
            count++;
            element += addition;
            addition++;
        }
        return count;
      //Your Code End
    }
}
