//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

//Your Code Start
class Solution
{
public:
    int ways(int x, int y)
    {
            // Define a constant modulo to be used for modular arithmetic
    int modulo = 1000000007;
         // Initialize a 2D vector to store the number of ways to reach each point
        vector<vector<int>> dp(x + 1, vector<int>(y + 1, 0));
        
        // Iterate through each point in the grid
        for (int i = 0; i <= x; i++) {
            for (int j = 0; j <= y; j++) {
                // Base case: there is only one way to reach the starting point (0, 0)
                if (i == 0 || j == 0) {
                    dp[i][j] = 1;
                    continue;
                }
                
                // Calculate the number of ways to reach the current point
                // by summing the number of ways from the left and from above
                dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % modulo;
            }
        }
        
        // Return the number of ways to reach the target point (x, y)
        return dp[x][y];
        //code here.
    }
};
//Your Code End


//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int x,y;
        cin>>x>>y;
        Solution ob;
        cout<<ob.ways(x,y)<<endl;
    }
	return 0;
}

// } Driver Code Ends
