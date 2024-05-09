//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution {
  public:
    bool divisorGame(int n) {
        // Your Code Start
        // Alice will win if `n` is even, as she can always subtract a proper divisor (2) and give Bob an odd number.
        // Bob is left with an odd number and can't make a valid move, so Alice wins.
        // If `n` is odd, Alice has no valid move, so Bob wins.
        return n % 2 == 0;
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

        Solution obj;
        bool ans = obj.divisorGame(n);
        if (ans)
            cout << "True" << endl;
        else
            cout << "False" << endl;
    }
    return 0;
}
// } Driver Code Ends
