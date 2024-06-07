//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution {
  public:
    // l and r are input array
    // maxx : maximum in r[]
    // n: size of array
    // arr[] : declared globally with size equal to maximum in l[] and r[]
    // Function to find the maximum occurred integer in all ranges.
    int maxOccured(int n, int l[], int r[], int maxx) {
    
      // Create an array to keep track of the ranges
      //Your Code Start
        vector<int> arr(maxx + 2, 0);

        // Increment start points and decrement points just after end points
        for (int i = 0; i < n; i++) {
            arr[l[i]]++;
            if (r[i] + 1 <= maxx) {
                arr[r[i] + 1]--;
            }
        }

        // Compute the prefix sum to find the number of active intervals at each point
        int maxOccuredValue = 0;
        int maxOccuredIndex = 0;
        int currentSum = 0;
        for (int i = 0; i <= maxx; i++) {
            currentSum += arr[i];
            if (currentSum > maxOccuredValue) {
                maxOccuredValue = currentSum;
                maxOccuredIndex = i;
            }
        }

        return maxOccuredIndex;
        // Your code End
    }
};



//{ Driver Code Starts.

int main() {

    int t;

    // taking testcases
    cin >> t;

    while (t--) {
        int n;

        // taking size of array
        cin >> n;
        int l[n];
        int r[n];

        // adding elements to array L
        for (int i = 0; i < n; i++) {
            cin >> l[i];
        }

        int maxx = 0;

        // adding elements to array R
        for (int i = 0; i < n; i++) {

            cin >> r[i];
            if (r[i] > maxx) {
                maxx = r[i];
            }
        }
        Solution ob;

        // calling maxOccured() function
        cout << ob.maxOccured(n, l, r, maxx) << endl;
    }

    return 0;
}
// } Driver Code Ends
