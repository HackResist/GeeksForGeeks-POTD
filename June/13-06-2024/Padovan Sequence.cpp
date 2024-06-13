//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution
{
    public:
    int padovanSequence(int n)
    {
        
    //Your Code Start
        if (n == 0 || n == 1 || n == 2) {
            return 1;
        }

        const int MOD = 1e9 + 7;
        int p0 = 1, p1 = 1, p2 = 1;  
        int p_curr = 0;

        for (int i = 3; i <= n; ++i) {
            p_curr = (p1 + p0) % MOD;
            p0 = p1;
            p1 = p2;
            p2 = p_curr;
        }

        return p_curr;
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
    	int n;
    	cin>>n;
    	Solution ob;
    	cout<<ob.padovanSequence(n)<<endl;
    }
    return 0;
}
// } Driver Code Ends
