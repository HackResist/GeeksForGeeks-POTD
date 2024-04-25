//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++
//Your Code Start
class Solution {
  public:
    int findMaxSum(int n, int m, vector<vector<int>> mat) {
        // code here
         int cons = 3;
        if (m < cons || n < cons)
            return -1;
        int fix = -1;
        for (int a = 0; a < n - 2; a++) {
            for (int b = 0; b < m - 2; b++) {
                int maxi = mat[a][b] + mat[a][b + 1] + mat[a][b + 2] +
                           mat[a + 1][b + 1] +
                           mat[a + 2][b] + mat[a + 2][b + 1] + mat[a + 2][b + 2];
                fix = max(fix, maxi);
            }
        }
        return fix;
    }
};
//your Code End

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N, M, i, j;
        cin >> N >> M;
        vector<vector<int>> Mat(N, vector<int>(M));
        for (i = 0; i < N; i++)
            for (j = 0; j < M; j++) cin >> Mat[i][j];
        Solution ob;
        cout << ob.findMaxSum(N, M, Mat) << "\n";
    }
}
// } Driver Code Ends
