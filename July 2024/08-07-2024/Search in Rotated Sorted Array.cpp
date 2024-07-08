//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution {
  public:
    int search(vector<int>& arr, int key) {
        // Your Code Start
        int n = arr.size();
        int l = 0, r = n - 1;
        
        while (l <= r) {
            int m = l + (r - l) / 2;
            
            if (arr[m] == key) {
                return m;
            }
            
            // Left half is sorted
            if (arr[l] <= arr[m]) {
                if (key >= arr[l] && key < arr[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
            // Right half is sorted
            else {
                if (key > arr[m] && key <= arr[r]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }
        
        return -1; // Key not found
        //Your Code End
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        cin.ignore();
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        int key;
        cin >> key;
        Solution ob;
        cout << ob.search(arr, key) << endl;
    }
    return 0;
}
// } Driver Code Ends
