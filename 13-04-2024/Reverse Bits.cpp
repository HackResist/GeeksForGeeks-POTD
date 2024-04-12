//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
  public:
    long long reversedBits(long long x) {
//Your Code Start

         long bit=0;
        long ans =0;
        for (int i=0;x!=0;i++)
        {
        	bit=x&1;
        	ans=ans | (bit<<(31-i));
        	x=x>>1;
		}
		return ans;
//Your Code End
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long X;
        
        cin>>X;

        Solution ob;
        cout << ob.reversedBits(X) << endl;
    }
    return 0;
}
// } Driver Code Ends
