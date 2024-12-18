//{ Driver Code Starts
// Initial function template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends


//Your Code Starts
class Solution {
  public:
   bool isFea(vector<int>& arr, int k, int maxPages) {
        int s = 1;
        int currSum = 0;

        for (int pages : arr) {
            if (pages > maxPages) return false; 
            if (currSum + pages > maxPages) {
                s++; 
                currSum = pages; 
                if (s > k) return false; 
            } else {
                currSum += pages;
            }
        }
        return true;
    }

    int findPages(vector<int>& arr, int k) {
        int n = arr.size();
        if (k > n) return -1; 
        int l = *max_element(arr.begin(), arr.end()); 
        int h = accumulate(arr.begin(), arr.end(), 0); 
        int res = -1;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            if (isFea(arr, k, mid)) {
                res = mid; 
                h = mid - 1; 
            } else {
                l = mid + 1;
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
        int ans = ob.findPages(arr, d);
        cout << ans << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends
