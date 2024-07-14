//{ Driver Code Starts
// Initial template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function template for C++

class Solution {
  public:
    void segregate0and1(vector<int> &arr) {
//Your Code Start
        int l = 0;
        int r = arr.size() - 1;
         while (l < r) {
            while (arr[l] == 0 && l< r) {
                l++;
            }
            while (arr[r] == 1 && l < r) {
                r--;
            }
            if (l < r) {
                std::swap(arr[l], arr[r]);
                l++;
                r--;
            }
        }
        //Your Code End
    }
};

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
        int n = arr.size();
        Solution ob;
        ob.segregate0and1(arr);
        for (int i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        cout << "\n";
    }
    return 0;
}
// } Driver Code Ends
