//{ Driver Code Starts
// Initial function template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function template for C++
//Your Code Starts
class Solution {
  public:
    int kthMissing(vector<int> &arr, int k) {
        // Your code goes here
        int n = arr.size();
        int l = 0, h = n - 1, mis;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            mis = arr[mid] - (mid + 1); 
            if (mis < k) {
                l = mid + 1; 
            } else {
                h = mid - 1; 
            }
        }
        return l + k;
    }
};
//Your Code Ends

//{ Driver Code Starts.

int main() {
    int test_case;
    cin >> test_case;
    cin.ignore();
    while (test_case--) {

        int d;
        vector<int> arr, brr, crr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        getline(cin, input);
        ss.clear();
        ss.str(input);
        while (ss >> number) {
            crr.push_back(number);
        }
        d = crr[0];
        int n = arr.size();
        Solution ob;
        int ans = ob.kthMissing(arr, d);
        cout << ans << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends
