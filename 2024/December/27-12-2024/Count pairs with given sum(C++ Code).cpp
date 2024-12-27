//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

//Your Code Starts
class Solution {
  public:
    int countPairs(vector<int> &arr, int target) {
        // Code here
        int freq[200001] = {0}; 
        int count = 0;

        for (int i = 0; i < arr.size(); i++) {
            int comp = target - arr[i];
            count += freq[comp + 10000]; 
            freq[arr[i] + 10000]++;   
        }

        return count;
    }
};
//Your Code Ends

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        int target;
        cin >> target;
        cin.ignore();
        Solution ob;
        int res = ob.countPairs(arr, target);

        cout << res << endl << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends
