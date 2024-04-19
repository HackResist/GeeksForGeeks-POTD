//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

//Your Code Start
class Solution{
	
	
	public:
	vector<int> findMissing(int a[], int b[], int n, int m) 
	{ 
	          // Convert array b to an unordered_set for faster lookup
        unordered_set<int> setB(b, b + m);
        
        // Initialize a vector to store missing elements
        vector<int> missing;
        
        // Iterate through array a
        for (int i = 0; i < n; ++i) {
            // If the current element of array a is not present in setB (array b),
            // add it to the list of missing elements
            if (setB.find(a[i]) == setB.end()) {
                missing.push_back(a[i]);
            }
        }
        
        return missing;
	   
	} 
};
//Your Code End
	

//{ Driver Code Starts.

int main() 
{
   	
   
   	int t;
    cin >> t;
    while (t--)
    {
    	int n;
        cin>>n;
        int m;
        cin>>m;
        int a[n];
        int b[m];
        for(int i=0;i<n;i++)
        cin>>a[i];
        for(int i=0;i<m;i++)
        cin >> b[i];
        vector<int> ans;
        

        Solution ob;
        ans=ob.findMissing(a,b,n,m);
        for(int i=0;i<ans.size();i++)
        cout<<ans[i]<<" ";
	    
        
	    cout << "\n";
	     
    }
    return 0;
}
// } Driver Code Ends
