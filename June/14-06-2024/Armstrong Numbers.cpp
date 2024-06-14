//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++
class Solution {
  public:
    string armstrongNumber(int n) {
     //Your Code Start
           // Convert the number to a string to easily iterate through each digit
        string numStr = to_string(n);
        
        // Number of digits
        int numDigits = numStr.size();
        
        // Compute the sum of each digit raised to the power of the number of digits
        int sumOfPowers = 0;
        for (char digitChar : numStr) {
            int digit = digitChar - '0'; // Convert char to int
            sumOfPowers += pow(digit, numDigits);
        }
        
        // Check if the sum of powers is equal to the original number
        if (sumOfPowers == n) {
            return "true";
        } else {
            return "false";
        }
      //Your Code End
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        Solution ob;
        cout << ob.armstrongNumber(n) << endl;
    }
    return 0;
}

// } Driver Code Ends
