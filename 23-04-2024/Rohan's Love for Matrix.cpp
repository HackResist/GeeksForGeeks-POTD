//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++
// User function Template for C++
//Your Code Start
class Solution {
  public:
    int firstElement(int n) {
        
        int modulo = 1e9+7; // Define modulo value
        if (n == 1 || n == 2) return 1; // Return 1 for n equals to 1 or 2
        int n1 = 1, n2 = 1; // Initialize the first two elements of the sequence
        int current = 0; // Initialize the variable to store the current element
        
        // Loop through the sequence starting from the third element (i = 3)
        for (int i = 2; i <= n; i++) {
            // Calculate the current element by adding the previous two elements
            current = n2 + n1;
            
            // Take modulo to avoid overflow and store the result back to curr
            current %= modulo;
            
            // Update n1 and n2 for the next iteration
            n1 = n2;
            n2 = current;
        }
         int Element= n1 % modulo;
       
        // Return the first element (n1) modulo mod
        return Element;
    }
 
};//Your Code End

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        Solution ob;
        cout << ob.firstElement(n) << endl;
    }
    return 0;
}

// } Driver Code Ends
