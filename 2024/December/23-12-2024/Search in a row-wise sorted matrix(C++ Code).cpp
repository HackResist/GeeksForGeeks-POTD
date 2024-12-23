//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

//Your Code Starts
class Solution {
  public:
    // Function to search a given number in row-column sorted matrix.
    bool searchRowMatrix(vector<vector<int>> &mat, int x) {
        // code here
            return any_of(mat.begin(), mat.end(), [&](const auto& row) {
            return binary_search(row.begin(), row.end(), x);
        });
    }
    
};
//Your Code Ends

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {

        int n, m;
        cin >> n >> m;
        vector<vector<int> > matrix(n);

        for (int i = 0; i < n; i++) {
            matrix[i].assign(m, 0);
            for (int j = 0; j < m; j++) {
                cin >> matrix[i][j];
            }
        }

        int x;
        cin >> x;
        Solution obj;
        if (obj.searchRowMatrix(matrix, x))
            cout << "true\n";
        else
            cout << "false\n";

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends
