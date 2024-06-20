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

            long[] arr = new long[6];
            string elements = Console.ReadLine().Trim();
            elements = elements + " " + "0";
            arr = Array.ConvertAll(elements.Split(), long.Parse);
            long[] p = { arr[0], arr[1] };
            long[] q = { arr[2], arr[3] };
            long[] r = { arr[4], arr[5] };

            Solution obj = new Solution();
            long res = obj.InternalCount(p, q, r);
            Console.Write(res + "\n");
        }
    }
}
}
// } Driver Code Ends




// User function Template for C#

class Solution {
  //Your Code Start  
       public long gcd(long a, long b) {
        while (b != 0) {
            long temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public long CountBoundaryPoints(long[] p, long[] q) {
        long x1 = p[0], y1 = p[1];
        long x2 = q[0], y2 = q[1];

        if (x1 == x2) {
            return Math.Abs(y2 - y1) - 1;
        }
        if (y1 == y2) {
            return Math.Abs(x2 - x1) - 1;
        }
        return gcd(Math.Abs(x2 - x1), Math.Abs(y2 - y1)) - 1;
    }

    public long InternalCount(long[] p, long[] q, long[] r) {
        long boundaryPoints = CountBoundaryPoints(p, q) +
                              CountBoundaryPoints(q, r) +
                              CountBoundaryPoints(r, p) + 3;

        long area = Math.Abs(p[0] * (q[1] - r[1]) +
                             q[0] * (r[1] - p[1]) +
                             r[0] * (p[1] - q[1]));

        long interiorPoints = (area - boundaryPoints + 2) / 2;

        return interiorPoints;
      //Your Code End
    }
}
