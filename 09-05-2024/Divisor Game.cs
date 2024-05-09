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
            int n = Convert.ToInt32(Console.ReadLine()); // Input for size of array
            Solution obj = new Solution();
            bool res = obj.divisorGame(n);
            if (res) {
                Console.Write("True");
            } else {
                Console.Write("False");
            }
            Console.Write("\n");
        }
    }
}
}

// } Driver Code Ends


// User function Template for Csharp

class Solution {
    // Your Code Start
    public bool divisorGame(int n) {
        // Alice will win if `n` is even, as she can always subtract a proper divisor (2) and give Bob an odd number.
        // Bob is left with an odd number and can't make a valid move, so Alice wins.
        // If `n` is odd, Alice has no valid move, so Bob wins.
        return n % 2 == 0;
      //Your Code End
    }
}
