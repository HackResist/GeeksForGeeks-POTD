//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++

class Solution{
public:
    vector<vector<int>> CombinationSum2(vector<int> arr,int n,int k)
    {
        //Your Code Start
         vector<vector<int>> result;
        // Sort the array to handle duplicates and to efficiently prune the search space
        sort(arr.begin(), arr.end());
        vector<int> path;
        dfs(arr, 0, path, result, k);
        return result;
    }
    
private:
    void dfs(const vector<int>& arr, int start, vector<int>& path, vector<vector<int>>& result, int target) {
        if (target == 0) {
            result.push_back(path);
            return;
        }
        if (target < 0 || start == arr.size()) {
            return;
        }
        for (int i = start; i < arr.size(); i++) {
            // Avoid duplicates by skipping identical elements
            if (i > start && arr[i] == arr[i - 1]) {
                continue;
            }
            path.push_back(arr[i]);
            dfs(arr, i + 1, path, result, target - arr[i]);
            path.pop_back();
        }
      //Your Code End
    }
};

//{ Driver Code Starts.


int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n,k;
        cin>>n>>k;
        vector<int> arr(n);
        for(int i=0;i<n;i++)
        {
            cin>>arr[i];
        }
        Solution ob;
        auto obj=ob.CombinationSum2(arr,n,k);
        for(int i=0;i<obj.size();i++)
        {
            for(int j=0;j<obj[i].size();j++)
            {
                cout<<obj[i][j]<<" ";
            }
            cout<<"\n";
        }
        if(obj.size()==0) cout<<"\n";
    }
    return 0;
}
// } Driver Code Ends
