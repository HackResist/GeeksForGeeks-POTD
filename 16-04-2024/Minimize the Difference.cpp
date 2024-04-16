//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


class Array
{
public:
    template <class T>
    static void input(vector<T> &A,int n)
    {
        for (int i = 0; i < n; i++)
        {
            scanf("%d ",&A[i]);
        }
    }

    template <class T>
    static void print(vector<T> &A)
    {
        for (int i = 0; i < A.size(); i++)
        {
            cout << A[i] << " ";
        }
        cout << endl;
    }
};


// } Driver Code Ends


//Your Code Start
class Solution {
public:
    int minimizeDifference(int length, int k, vector<int>& array) {
        // Arrays to hold the minimum and maximum values of the prefix and suffix.
        vector<pair<int, int>> prefixMinMax(length), suffixMinMax(length);
        
        // Initializing prefix and suffix arrays.
        prefixMinMax[0] = {array[0], array[0]};
        suffixMinMax[length - 1] = {array[length - 1], array[length - 1]};
        
        for (int i = 1; i < length; i++) {
            int revIdx = length - i - 1;
            prefixMinMax[i] = {
                min(prefixMinMax[i - 1].first, array[i]),
                max(prefixMinMax[i - 1].second, array[i])
            };
            suffixMinMax[revIdx] = {
                min(suffixMinMax[revIdx + 1].first, array[revIdx]),
                max(suffixMinMax[revIdx + 1].second, array[revIdx])
            };
        }
        
        // Start with the difference for the first possible removal scenario.
        int minDiff = INT_MAX;

        // Compute the minimum difference considering the remaining segments after each potential removal.
        for (int i = 0; i <= length - k; i++) {
            int minElem = i == 0 ? suffixMinMax[i + k].first : (i + k == length ? prefixMinMax[i - 1].first : min(prefixMinMax[i - 1].first, suffixMinMax[i + k].first));
            int maxElem = i == 0 ? suffixMinMax[i + k].second : (i + k == length ? prefixMinMax[i - 1].second : max(prefixMinMax[i - 1].second, suffixMinMax[i + k].second));
            minDiff = min(minDiff, maxElem - minElem);
        }
        
        return minDiff;
    }

};
//Your Code End

//{ Driver Code Starts.

int main(){
    int t;
    scanf("%d ",&t);
    while(t--){
        
        int n;
        scanf("%d",&n);
        
        
        int k;
        scanf("%d",&k);
        
        
        vector<int> arr(n);
        Array::input(arr,n);
        
        Solution obj;
        int res = obj.minimizeDifference(n, k, arr);
        
        cout<<res<<endl;
        
    }
}

// } Driver Code End
