//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    long long ExtractNumber(string sentence) {
      //Your Code Start
            // Regular expression to find all numbers
        regex numberPattern("\\d+");
        auto words_begin = sregex_iterator(sentence.begin(), sentence.end(), numberPattern);
        auto words_end = sregex_iterator();
        
        long long maxNumber = -1;
        
        for (sregex_iterator i = words_begin; i != words_end; ++i) {
            string matchStr = (*i).str();
            
            // Check if the number contains '9'
            if (matchStr.find('9') == string::npos) {
                long long num = stoll(matchStr);
                if (num > maxNumber) {
                    maxNumber = num;
                }
            }
        }
        
        return maxNumber;
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
        cout << ob.ExtractNumber(s) << "\n";
    }

    return 0;
}

// } Driver Code Ends
