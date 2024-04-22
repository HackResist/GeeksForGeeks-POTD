//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++


//Your Code Start
class Solution {
  public:
    int minRow(int n, int m, vector<vector<int>> a) {
        // code here
           int Minindex = 1; // Initialize the index of the row with the minimum ones count
        int MinCount = 1000; // Initialize the minimum ones count with a large value
        
        // Iterate over each row
        for (int i = 0; i < n; i++) {
            int cnt = 0; // Initialize count for ones in the current row
            
            // Count the number of ones in the current row
            for (int j = 0; j < m; j++) {
                if (a[i][j] == 1) {
                    cnt++;
                }
            }
            
            // Update the minimum ones count and corresponding row index if a smaller count is found
            if (cnt < MinCount) {
                MinCount = cnt;
                Minindex = i + 1;
            }
        }
        
        // Return the index of the row with the minimum ones count
        return Minindex;
    }
};
//Your Code End

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N, M;
        cin >> N >> M;
        vector<vector<int>> A(N, vector<int>(M));
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                cin >> A[i][j];
            }
        }
        Solution ob;
        cout << ob.minRow(N, M, A) << "\n";
    }
}
// } Driver Code Ends
