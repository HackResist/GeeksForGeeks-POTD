//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution{
		
	public:
	int maxDotProduct(int n, int m, int a[], int b[]) 
	{ 
	    //Your Code Start
	      // Dynamic programming approach
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        for (int y = 1; y <= m; ++y) {
            for (int x = y; x <= n; ++x) {
                int mx = dp[y - 1][x - 1] + a[x - 1] * b[y - 1];
                mx = max(mx, dp[y][x - 1]);
                dp[y][x] = mx;
            }
        }
        return dp[m][n];
		// Your Code End
	} 
};



//{ Driver Code Starts.
int main() 
{
   
   
   	int t;
    cin >> t;
    while (t--)
    {
        int n, m;
        cin >> n >> m;

        int a[n], b[m];

        for(int i = 0; i < n; i++)
        	cin >> a[i];

        for(int i = 0; i < m; i++)
        	cin >> b[i];

       

	    Solution ob;
	    cout << ob.maxDotProduct(n, m, a, b) << "\n";
	     
    }
    return 0;
}

// } Driver Code Ends
