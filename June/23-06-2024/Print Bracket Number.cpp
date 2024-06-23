//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function template for C++
class Solution {
  public:

    vector<int> bracketNumbers(string str) {
        // Your code Start
    vector<int> res(str.length(), 0); // Initialize the result vector
        stack<pair<int, int>> stk;
        int count = 0;
        
        for (int i = 0; i < str.length(); ++i) {
            if (str[i] == '(') {
                count++;
                stk.push({i, count});
                res[i] = count;
            } else if (str[i] == ')') {
                pair<int, int> p = stk.top();
                stk.pop();
                res[i] = p.second;
                res[p.first] = p.second;
            }
        }
        
        vector<int> bracketNum;
        for (int num : res) {
            if (num != 0) {
                bracketNum.push_back(num);
            }
        }
        
        return bracketNum;
      //Your Code End
    }
};

//{ Driver Code Starts.

int main() {

    ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    string tc;
    getline(cin, tc);
    t = stoi(tc);
    while (t--) {
        string s;
        getline(cin, s);

        Solution ob;

        vector<int> ans = ob.bracketNumbers(s);

        for (auto i : ans)
            cout << i << " ";

        cout << "\n";
    }

    return 0;
}
// } Driver Code Ends
