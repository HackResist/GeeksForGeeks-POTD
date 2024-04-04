//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution
{
    public:
   
    long long sumSubstrings(string s){
        //Your Code Start
        int mod = 1000000007;
        long long ans = 0, temp = 0;
        int n = s.size();
        for (int i = 0; i < n; i++){
            temp = temp * 10 + (i + 1) * (s[i] - '0');
            temp %= mod;
            ans += temp;
            ans %= mod;
        }
        return ans;
        //Your Code End
    }
};


//{ Driver Code Starts.
int main()
{
    //taking total testcases
    int t;
    cin>>t;
    while(t--)
    {
        //taking string
        string s;
        cin>>s;
        Solution ob;
        //calling sumSubstrings() function
        cout << ob.sumSubstrings(s) << endl;
        
    }
    return 0;
}

// } Driver Code Ends
