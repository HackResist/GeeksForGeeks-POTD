//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
//Your Code Start
   long long gcd(long long a, long long b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

long long countBoundaryPoints(long long x1, long long y1, long long x2, long long y2) {
    if (x1 == x2) {
        return abs(y2 - y1) - 1;
    }
    if (y1 == y2) {
        return abs(x2 - x1) - 1;
    }
    return gcd(abs(x2 - x1), abs(y2 - y1)) - 1;
}

long long InternalCount(long long p[], long long q[], long long r[]) {
    long long x1 = p[0], y1 = p[1];
    long long x2 = q[0], y2 = q[1];
    long long x3 = r[0], y3 = r[1];

    // Calculate the number of boundary lattice points
    long long boundaryPoints = countBoundaryPoints(x1, y1, x2, y2) +
                               countBoundaryPoints(x2, y2, x3, y3) +
                               countBoundaryPoints(x3, y3, x1, y1) + 3;

    // Calculate the signed area of the triangle
    long long area = abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

    // Apply Pick's Theorem to find the number of interior lattice points
    long long interiorPoints = (area - boundaryPoints + 2) / 2;

    return interiorPoints;
  //Your Code End
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long int p[2], q[2], r[2];
        cin >> p[0] >> p[1] >> q[0] >> q[1] >> r[0] >> r[1];
        Solution ob;
        long long int ans = ob.InternalCount(p, q, r);
        cout << ans << "\n";
    }
}
// } Driver Code Ends
