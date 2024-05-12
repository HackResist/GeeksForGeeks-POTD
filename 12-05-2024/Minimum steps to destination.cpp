//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    int minSteps(int d) {
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
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int d;
        cin >> d;

        Solution ob;
        cout << ob.minSteps(d) << "\n";
    }
    return 0;
}
// } Driver Code Ends
