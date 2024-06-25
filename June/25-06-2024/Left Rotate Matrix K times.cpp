//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    vector<vector<int>> rotateMatrix(int k, vector<vector<int>> mat) {
      //Your Code Start
     int r_no = mat.size(); // Number of rows in the matrix
        int c_no = mat[0].size(); // Number of columns in the matrix
        
        // If k is a multiple of c_no, the matrix remains unchanged
        if (k % c_no == 0) return mat;
        
        // Rotate each row individually
        for (int i = 0; i < r_no; i++) {
            vector<int> v = mat[i]; // Copy the current row
            for (int j = 0; j < c_no; j++) {
                // Calculate the new position for each element in the row
                mat[i][(c_no - k % c_no + j) % c_no] = v[j];
            }
        }
        return mat;
      //Your Code End
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, m, k;
        cin >> n >> m >> k;
        vector<vector<int>> mat(n, vector<int>(m));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                cin >> mat[i][j];
        Solution ob;
        vector<vector<int>> ans = ob.rotateMatrix(k, mat);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++)
                cout << ans[i][j] << " ";
            cout << "\n";
        }
    }
}

// } Driver Code Ends
