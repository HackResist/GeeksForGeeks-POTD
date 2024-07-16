//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function template for C++
class Solution {
  public:

    string printString(string s, char ch, int count) {
      //Your Code Start
            int occ = 0;
    
    for (size_t i = 0; i < s.length(); ++i) {
        if (s[i] == ch) {
            occ++;
            if (occ == count) {
                return s.substr(i + 1);
            }
        }
    }
    
    return "";
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
        string s;
        char ch;
        int count;

        cin >> s >> ch >> count;
        Solution ob;
        cout << ob.printString(s, ch, count) << "\n";
    }

    return 0;
}
// } Driver Code Ends
