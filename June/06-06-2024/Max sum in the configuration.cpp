//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
/*You are required to complete this method*/
class Solution {
  public:
    long long max_sum(int a[], int n) {
      //Your Code Start
    unsigned long long totalSum = 0;
        for (int i = 0; i < n; i++) totalSum += a[i];
        
        unsigned long long currentSum = 0;
        for (int i = 0; i < n; i++) {
            long long elementValue = a[i];
            elementValue = elementValue * i;
            currentSum += elementValue;
        }
        
        unsigned long long maximumSum = currentSum;
        for (int i = n - 1; i >= 0; i--) {
            currentSum += totalSum;
            unsigned long long elementValue = a[i];
            unsigned long long product = elementValue * n;
            currentSum -= product;
            maximumSum = max(maximumSum, currentSum);
        }
        
        return maximumSum;
      ///Your Code End
    }
};

//{ Driver Code Starts.
int main() {
    int T;
    cin >> T;
    while (T--) {
        int N;
        cin >> N;
        int A[N];
        for (int i = 0; i < N; i++) {
            cin >> A[i];
        }
        Solution ob;
        cout << ob.max_sum(A, N) << endl;
        /*keeping track of the total sum of the array*/
    }
}

// } Driver Code Ends
