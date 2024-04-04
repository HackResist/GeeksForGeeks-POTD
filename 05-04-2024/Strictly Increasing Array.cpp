//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution {
  public:
  //Your Code Start

       int min_operations(vector<int>& nums) {
        int n = nums.size();
        vector<int> dp(n, 1);
        for(int i = 0; i < n; i++)
            for(int j = 0; j < i; j++)
                if(nums[i] - nums[j] >= i - j)
                    dp[i] = max(dp[i], dp[j] + 1);
        return n - *max_element(dp.begin(), dp.end());
        //Your Code End
    }
};


//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int n;
        cin >> n;
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        Solution ob;
        int ans = ob.min_operations(nums);
        cout << ans << "\n";
    }
    return 0;
}
// } Driver Code Ends
