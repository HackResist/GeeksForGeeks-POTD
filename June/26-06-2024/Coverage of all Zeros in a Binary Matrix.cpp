//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends


class Solution {
  public:
    int findCoverage(vector<vector<int>>& matrix) {
      //Your Code Start
            // Initialize the coverage counter to 0
        int count = 0;
        int F_loop = matrix.size();
        int L_loop = matrix[0].size();
        
        // Iterate over each row in the matrix
        for (int i = 0; i < F_loop ; i++) {
            // Iterate over each column in the current row
            for (int j = 0; j < L_loop; j++) {
                // Check if the current element is 0
                if (matrix[i][j] == 0) {
                    // Check the cell below the current cell
                    if (i + 1 < F_loop && matrix[i + 1][j] == 1) {
                        count++;
                    }
                    // Check the cell above the current cell
                    if (i - 1 >= 0 && matrix[i - 1][j] == 1) {
                        count++;
                    }
                    // Check the cell to the right of the current cell
                    if (j + 1 < L_loop && matrix[i][j + 1] == 1) {
                        count++;
                    }
                    // Check the cell to the left of the current cell
                    if (j - 1 >= 0 && matrix[i][j - 1] == 1) {
                        count++;
                    }
                }
            }
        }

        // Return the total count of adjacent 1s for all 0s in the matrix
        return count;
    //Your Code End
        
    }
};


//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int n, m;
        cin >> n >> m;
        vector<vector<int>> matrix(n, vector<int>(m, 0));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                cin >> matrix[i][j];
        Solution obj;
        int ans = obj.findCoverage(matrix);
        cout << ans << "\n";
    }
    return 0;
}
// } Driver Code Ends
