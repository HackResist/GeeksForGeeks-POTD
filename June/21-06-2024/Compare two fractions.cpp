//{ Driver Code Starts

#include <iostream>
#include <regex>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
  string compareFrac(string str) {
    //Your Code Start
        regex fractionRegex("(-?\\d+)\\s*/\\s*(-?\\d+)");
        smatch matches;
        int numerators[2], denominators[2];
        
        auto words_begin = sregex_iterator(str.begin(), str.end(), fractionRegex);
        auto words_end = sregex_iterator();
        
        int idx = 0;
        for (sregex_iterator i = words_begin; i != words_end; ++i, ++idx) {
            smatch match = *i;
            numerators[idx] = stoi(match[1].str());
            denominators[idx] = stoi(match[2].str());
        }
        
        int a = numerators[0], b = denominators[0];
        int c = numerators[1], d = denominators[1];
        
        long long lhs = static_cast<long long>(a) * d;
        long long rhs = static_cast<long long>(c) * b;
        
        if (lhs > rhs) return to_string(a) + "/" + to_string(b);
        else if (lhs < rhs) return to_string(c) + "/" + to_string(d);
        else return "equal";
    //Your Code End
    }
};


//{ Driver Code Starts.

int main() {
    Solution ob;
    int t;
    cin >> t;
    cin.ignore();
    for (int i = 0; i < t; i++) {

        string str;
        getline(cin, str);

        cout << ob.compareFrac(str) << endl;
    }
    return 0;
}

// } Driver Code Ends
