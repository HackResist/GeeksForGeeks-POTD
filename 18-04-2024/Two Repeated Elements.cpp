//{ Driver Code Starts
//Initial template for C++

#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function template for C++


//Your Code Start
class Solution {
public:
    //Function to find two repeated elements.
    vector<int> twoRepeated(int arr[], int n) {
        unordered_map<int, int> freqMap;
        vector<int> result;

        for (int i = 0; i < n + 2; ++i) {
            // If the element is already present in the map, it's repeated.
            if (freqMap.find(arr[i]) != freqMap.end()) {
                // If this is the first time we encounter this repeated element,
                // add it to the result.
                if (freqMap[arr[i]] == 1) {
                    result.push_back(arr[i]);
                }
            }
            // Increment the frequency of the current element.
            ++freqMap[arr[i]];
        }

        // Iterate through the frequency map to find the elements
        // that are repeated twice.
        for (auto it = freqMap.begin(); it != freqMap.end(); ++it) {
            if (it->second == 2) {
                result.push_back(it->first);
            }
        }

        return result;
    }

};
//Your Code End


//{ Driver Code Starts.

int main()
{
    int t,n;
    cin>>t;
    
    while(t--)
    {
        cin>>n;
        
        int a[n+2];
        
        for(int i=0;i<n+2;i++)
            cin>>a[i];
        
        Solution obj;
        vector<int> res;
        res = obj.twoRepeated(a, n);
        cout<<res[0]<<" "<<res[1]<<endl;
    }
    return 0;
}

// } Driver Code Ends
