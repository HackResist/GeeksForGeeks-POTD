//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++
class Solution {
  public:
    string smallestNumber(int s, int d) {
        // Your Code Start
           // If the sum of digits is greater than the maximum possible sum for the given number of digits, return "-1"
        if (s > 9 * d)
        {
            return "-1";
        }
        // Initialize the result string with spaces of length 'digits'
        string result(d, ' ');
        
        // Decrease sum by 1 to handle the most significant digit separately
        s--;
        
        // Fill the digits from the least significant to the most significant using a different loop structure
        for (int pos = d- 1; pos > 0; pos--) {
            // Assign the maximum possible value (either 9 or the remaining sum)
            int val = min(9, s);
            result[pos] = '0' + val;
            s -= val;
        }
        
        // Set the most significant digit
        result[0] = '1' + s;
        
        return result;
        //Your Code End
    }
};

//{ Driver Code Starts.

int main() {

    ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;
    while (t--) {
        int s, d;
        cin >> s >> d;
        Solution ob;
        cout << ob.smallestNumber(s, d) << "\n";
    }

    return 0;
}
// } Driver Code Ends
