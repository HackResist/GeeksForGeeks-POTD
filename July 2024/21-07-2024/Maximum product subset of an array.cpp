//{ Driver Code Starts
/* Driver program to test above function */

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++
class Solution {
  public:
    long long int findMaxProduct(vector<int>& arr) {
        // Your Code Start
          int size = arr.size();
        if (size == 1) return arr[0];

        long long mod = 1e9 + 7;
        bool z = false;
        long long mProd = 1;
        long long a = LLONG_MIN;

        for (int i = 0; i < size; ++i) {
            if (arr[i] == 0) {
                z = true;
            } else if (arr[i] > 0) {
                mProd = (mProd * arr[i]) % mod;
            } else {
                mProd = (mProd * arr[i]) % mod;
                a = max(a, (long long)arr[i]);
            }
        }

        if (mProd < 0) {
            mProd = mProd / a;
        }

        if (mProd == 1 && z) {
            return 0;
        }

        return mProd;
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
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        Solution ob;
        long long int ans = ob.findMaxProduct(arr);
        cout << ans << endl;
    }
    return 0;
}

// } Driver Code Ends
