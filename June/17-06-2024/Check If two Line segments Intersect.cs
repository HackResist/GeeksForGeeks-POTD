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
            int[] p1 = new int[2];
            int[] q1 = new int[2];
            int[] p2 = new int[2];
            int[] q2 = new int[2];
            var ip = Console.ReadLine().Trim().Split(' ');
            p1[0] = int.Parse(ip[0]);
            p1[1] = int.Parse(ip[1]);
            q1[0] = int.Parse(ip[2]);
            q1[1] = int.Parse(ip[3]);
            ip = Console.ReadLine().Trim().Split(' ');
            p2[0] = int.Parse(ip[0]);
            p2[1] = int.Parse(ip[1]);
            q2[0] = int.Parse(ip[2]);
            q2[1] = int.Parse(ip[3]);
            Solution obj = new Solution();
            string res = obj.doIntersect(p1, q1, p2, q2);
            Console.Write(res + "\n");
        }
    }
}
}
// } Driver Code Ends


// User function Template for C#
///Your Code Start
class Solution {
     // Function to find the orientation of the triplet (p, q, r)
    private int Orientation(int[] p, int[] q, int[] r) {
        long val = (long)(q[1] - p[1]) * (r[0] - q[0]) - (long)(q[0] - p[0]) * (r[1] - q[1]);
        if (val == 0) return 0;  // collinear
        return (val > 0) ? 1 : 2; // clockwise or counterclockwise
    }

    // Function to check if point q lies on segment pr
    private bool OnSegment(int[] p, int[] q, int[] r) {
        if (q[0] <= Math.Max(p[0], r[0]) && q[0] >= Math.Min(p[0], r[0]) &&
            q[1] <= Math.Max(p[1], r[1]) && q[1] >= Math.Min(p[1], r[1]))
            return true;
        return false;
    }

    // Function to check if the two line segments intersect
    public string doIntersect(int[] p1, int[] q1, int[] p2, int[] q2) {
        // Find the four orientations needed for general and special cases
        int o1 = Orientation(p1, q1, p2);
        int o2 = Orientation(p1, q1, q2);
        int o3 = Orientation(p2, q2, p1);
        int o4 = Orientation(p2, q2, q1);

        // General case
        if (o1 != o2 && o3 != o4)
            return "true";

        // Special Cases
        // p1, q1 and p2 are collinear and p2 lies on segment p1q1
        if (o1 == 0 && OnSegment(p1, p2, q1)) return "true";

        // p1, q1 and q2 are collinear and q2 lies on segment p1q1
        if (o2 == 0 && OnSegment(p1, q2, q1)) return "true";

        // p2, q2 and p1 are collinear and p1 lies on segment p2q2
        if (o3 == 0 && OnSegment(p2, p1, q2)) return "true";

        // p2, q2 and q1 are collinear and q1 lies on segment p2q2
        if (o4 == 0 && OnSegment(p2, q1, q2)) return "true";

        // If none of the cases
        return "false";
    }
}
//Your Code End
