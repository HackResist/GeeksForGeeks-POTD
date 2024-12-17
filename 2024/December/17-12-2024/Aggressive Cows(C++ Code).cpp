//{ Driver Code Starts
// Initial function template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++


//Your Code Start
class Solution {
  public:
    bool cancowplace(vector<int> &stalls, int k, int dist) {
        int count = 1;
        int end = stalls[0]; 

        for (int i = 1; i < stalls.size(); i++) {
            if (stalls[i] - end >= dist) {
                count++;
                end = stalls[i]; 
            }
            if (count >= k) return true; 
        }
        return false;
    }
    int aggressiveCows(vector<int> &stalls, int k) {
        sort(stalls.begin(), stalls.end());

        int l = 1,h = stalls.back() - stalls.front(),res = 0;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            if (cancowplace(stalls, k, mid)) {
                res = mid; 
                l = mid + 1;
            } else {
                h = mid - 1; 
            }
        }
        return res;
    }
};

//Your Code Ends

//{ Driver Code Starts.

int main() {
    int test_case;
    cin >> test_case;
    cin.ignore();
    while (test_case--) {

        int k;
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        string in;
        getline(cin, in);
        stringstream sss(in);
        int num;
        while (sss >> num) {
            k = num;
        }
        Solution ob;
        int ans = ob.aggressiveCows(arr, k);
        cout << ans << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends
