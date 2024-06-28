//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution {
  public:
  //Your Code start
  
  
   // Helper function to check if a sequence is a palindrome
    bool isPalindrome(vector<int> &seq) {
        int l = 0, r = seq.size() - 1;
        while (l < r) {
            if (seq[l] != seq[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    string pattern(vector<vector<int>> &arr) {
        int n = arr.size();
        
        // Check each row
        for (int i = 0; i < n; ++i) {
            if (isPalindrome(arr[i])) {
                return to_string(i) + " R";
            }
        }

        // Check each column
        for (int j = 0; j < n; ++j) {
            vector<int> col;
            for (int i = 0; i < n; ++i) {
                col.push_back(arr[i][j]);
            }
            if (isPalindrome(col)) {
                return to_string(j) + " C";
            }
        }
        
        return "-1" ;
    }
    //Your Code End
};


//{ Driver Code Starts.

int main() {

    int t, n, i, j, flag, k;
    cin >> t;

    while (t--) {
        cin >> n;
        vector<vector<int>> a(n, vector<int>(n));

        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++)
                cin >> a[i][j];
        }
        Solution ob;
        cout << ob.pattern(a) << endl;
    }
    return 0;
}
// } Driver Code Ends
