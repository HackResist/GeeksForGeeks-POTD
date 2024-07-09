//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function template for C++

// arr : given vector of elements
// target : given sum value

class Solution {
  public:
    int threeSumClosest(vector<int> arr, int target) {
        // Your code Start
                // Sort the array
        std::sort(arr.begin(), arr.end());
        
        int n = arr.size();
        int closeSum = arr[0] + arr[1] + arr[2]; // Initialize closestSum with the first triplet
        
        // Iterate through the array
        for (int i = 0; i < n - 2; ++i) {
            int l = i + 1;
            int r = n - 1;
            
            // Use two-pointer technique
            while (l< r) {
                int currSum = arr[i] + arr[l] + arr[r];
                
                // If the current sum is exactly equal to the target, return it
                if (currSum == target) {
                    return currSum;
                }
                
                // Update the closest sum if the current sum is closer to the target
                if (std::abs(currSum - target) < std::abs(closeSum - target)) {
                    closeSum = currSum;
                } else if (std::abs(currSum - target) == std::abs(closeSum - target) && currSum > closeSum) {
                    // Prefer the maximum sum if the difference is the same
                    closeSum = currSum;
                }
                
                // Move the pointers
                if (currSum < target) {
                    ++l;
                } else {
                    --r;
                }
            }
        }
        
        return closeSum;
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
        // cin.ignore();
        // if (f)
        //     return 0;
        Solution ob;
        cout << ob.threeSumClosest(arr, key) << endl;
    }
    return 0;
}
// } Driver Code Ends
