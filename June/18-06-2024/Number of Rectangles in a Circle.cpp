//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    int rectanglesInCircle(int r) {
      //Your Code Start
        // Initialize count to keep track of valid rectangles
        int count = 0;

        // Iterate over all possible widths (w) from 1 to 2r
        for (int w = 1; w <= 2 * r; ++w) {
            // Iterate over all possible heights (h) from 1 to 2r
            for (int h = 1; h <= 2 * r; ++h) {
                // Check if the rectangle with width w and height h can fit inside the circle
                // This is true if the sum of squares of width and height is less than or equal to the square of the diameter
                if (w * w + h * h <= 4 * r * r) {
                    // Increment the count of valid rectangles
                    ++count;
                }
            }
        }

        // Return the total count of rectangles that can fit inside the circle
        return count;
      //Your Code End
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        Solution ob;
        int ans = ob.rectanglesInCircle(n);
        cout << ans << "\n";
    }
}
// } Driver Code Ends
