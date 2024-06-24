//{ Driver Code Starts

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    long long sumMatrix(long long n, long long q) {
        // Your Code Start
           if (q == 1 || q > 2 * n) return 0;
        
        long midCount = n;
        long midElement = n + 1;
        long ans = 0;
        
        if (q >= midElement) {
            ans = midCount - q + midElement;
        } else {
            ans = midCount - midElement + q;
        }
        
        return ans;
      //Your Code End
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long n,q;
        
        cin>>n>>q;

        Solution ob;
        cout << ob.sumMatrix(n,q) << endl;
    }
    return 0;
}
// } Driver Code Ends
