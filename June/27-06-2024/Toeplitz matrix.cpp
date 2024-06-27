//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

bool isToeplitz(vector<vector<int>> &mat);

int main() {
    // your code goes here
    int t;
    cin >> t;
    while (t--) {
        int n, m;
        cin >> n >> m;
        vector<vector<int>> a(n, vector<int>(m, 0));

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++)
                cin >> a[i][j];
        }

        bool b = isToeplitz(a);

        if (b == true)
            cout << "true";
        else
            cout << "false";

        cout << endl;
    }
    return 0;
}
// } Driver Code Ends



bool isToeplitz(vector<vector<int>>& mat) {
    //Your Code Start
      int r = mat.size();
    int c = mat[0].size();
    
    for (int row = 0; row < r - 1; ++row) {
        for (int col = 0; col < c - 1; ++col) {
            if (mat[row][col] != mat[row + 1][col + 1]) {
                return false;
            }
        }
    }
    return true;
  //Your Code End
}
