//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends


//Your Code Start
class Solution{
public:
    int countPairs(int arr[] , int n ) 
    {
        // Your code goes here 
        vector<int> products;
        for(int i = 0; i < n; i++){
            products.push_back(i * arr[i]);
        }
        vector<int> sorted_products = products;
        sort(sorted_products.begin(), sorted_products.end());
        
        int count = 0;
        for(int i = n - 1; i >= 0; i--){
            int upper_bound_index = upper_bound(sorted_products.begin(), sorted_products.end(), products[i]) - sorted_products.begin();
            int lower_bound_index = lower_bound(sorted_products.begin(), sorted_products.end(), products[i]) - sorted_products.begin();
            
            count += (sorted_products.size() - upper_bound_index);
            
            sorted_products.erase(sorted_products.begin() + lower_bound_index);
        }
        return count;
    }
};
//Your Code End

//{ Driver Code Starts.
// Driver code
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
    	int n;
    	cin>>n;
    	int a[n];
    	for(int i=0;i<n;i++)
    	cin>>a[i];
    	Solution ob;
    	cout<<ob.countPairs(a, n)<<endl;
    }
}
// } Driver Code Ends
