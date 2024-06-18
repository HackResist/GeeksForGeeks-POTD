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
            int N = Convert.ToInt32(Console.ReadLine());
            Solution obj = new Solution();
            int res = obj.rectanglesInCircle(N);
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
    public int rectanglesInCircle(int r) {
        // Your code Start
                // Initialize count to keep track of valid rectangles
        int count = 0;
        // Calculate the square of the diameter of the circle (2r)^2 = 4r^2
        int diameterSquared = 4 * r * r;

        // Iterate over all possible widths (w) from 1 to 2r
        for (int w = 1; w <= 2 * r; ++w) {
            // Iterate over all possible heights (h) from 1 to 2r
            for (int h = 1; h <= 2 * r; ++h) {
                // Check if the rectangle with width w and height h can fit inside the circle
                // This is true if the sum of squares of width and height is less than or equal to the square of the diameter
                if (w * w + h * h <= diameterSquared) {
                    // Increment the count of valid rectangles
                    count++;
                }
            }
        }

        // Return the total count of rectangles that can fit inside the circle
        return count;
      //Your Code End
    }
}
