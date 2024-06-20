//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");
            long p[] = new long[2];
            long q[] = new long[2];
            long r[] = new long[2];
            p[0] = Long.parseLong(S[0]);
            p[1] = Long.parseLong(S[1]);
            q[0] = Long.parseLong(S[2]);
            q[1] = Long.parseLong(S[3]);
            r[0] = Long.parseLong(S[4]);
            r[1] = Long.parseLong(S[5]);
            Solution ob = new Solution();
            long ans = ob.InternalCount(p, q, r);
            System.out.println(ans);
        }
    }
}
// } Driver Code Ends




// User function Template for Java

class Solution {
  //Your Code Start
  long gcd(long a, long b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }

    long countBoundaryPoints(long x1, long y1, long x2, long y2) {
        if (x1 == x2) {
            return Math.abs(y2 - y1) - 1;
        }
        if (y1 == y2) {
            return Math.abs(x2 - x1) - 1;
        }
        return gcd(Math.abs(x2 - x1), Math.abs(y2 - y1)) - 1;
    }

    long InternalCount(long p[], long q[], long r[]) {
        long x1 = p[0], y1 = p[1];
        long x2 = q[0], y2 = q[1];
        long x3 = r[0], y3 = r[1];

        // Calculate the number of boundary lattice points
        long boundaryPoints = countBoundaryPoints(x1, y1, x2, y2) +
                              countBoundaryPoints(x2, y2, x3, y3) +
                              countBoundaryPoints(x3, y3, x1, y1) + 3;

        // Calculate the signed area of the triangle
        long area = Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

        // Apply Pick's Theorem to find the number of interior lattice points
        long interiorPoints = (area - boundaryPoints + 2) / 2;

        return interiorPoints;
      //Your Code End
        
    }
};
