//{ Driver Code Starts
// Initial template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function template for C++

class Solution {
  public:
    long long pairAndSum(int n, long long arr[]) {
        //Your Code Start
        
        long long temp = 0; 

       
        for (int i = 0; i < 32; i++) {
         
            long long a = 0; 
            for (int b = 0; b < n; b++)
                if ((arr[b] & (1 << i))) a++;

            temp =temp+ (1 << i) * (a * (a - 1) / 2);
        }

        return temp;
        //Your Code End
    }

};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        cin >> N;
        long long Arr[N];
        for (int i = 0; i < N; i++) {
            cin >> Arr[i];
        }
        Solution ob;
        cout << ob.pairAndSum(N, Arr) << endl;
    }
    return 0;
}
// } Driver Code Ends
