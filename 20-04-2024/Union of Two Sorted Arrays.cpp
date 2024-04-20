//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends



//Your Code Start
class Solution{

 public:
  // arr1,arr2 : the arrays
  // n, m: size of arrays
  // Function to return a list containing the union of the two arrays.
  vector<int> findUnion(int arr1[], int arr2[], int n, int m) {
    std::vector<int> unionVector;
    int i = 0, j = 0;
    // Define a constant to represent the minimum value of an integer
    const int MIN_INT = std::numeric_limits<int>::min();

    // Then, you can use MIN_INT as needed in your code
    int lastAdded = MIN_INT;
    while (i < n && j < m) {
      // If the current elements are equal and not equal to the last added
      // element
      if (arr1[i] == arr2[j] && arr1[i] != lastAdded) {
        // Add the element to the union vector
        unionVector.push_back(arr1[i]);
        // Update last added element
        lastAdded = arr1[i];
        // Move both pointers forward
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        // If not equal to the last added element
        if (arr1[i] != lastAdded) {
          // Add element from arr1 to union vector
          unionVector.push_back(arr1[i]);
          // Update last added element
          lastAdded = arr1[i];
        }
        // Move pointer for arr1 forward
        i++;
      } else {
        // If not equal to the last added element
        if (arr2[j] != lastAdded) {
          // Add element from arr2 to union vector
          unionVector.push_back(arr2[j]);
          // Update last added element
          lastAdded = arr2[j];
        }
        // Move pointer for arr2 forward
        j++;
      }
    }
    // Add remaining elements of arr1, if any
    while (i < n) {
      // If not equal to the last added element
      if (arr1[i] != lastAdded) {
        // Add element from arr1 to union vector
        unionVector.push_back(arr1[i]);
        // Update last added element
        lastAdded = arr1[i];
      }
      i++;
    }
    // Add remaining elements of arr2, if any
    while (j < m) {
      // If not equal to the last added element
      if (arr2[j] != lastAdded) {
        // Add element from arr2 to union vector
        unionVector.push_back(arr2[j]);
        // Update last added element
        lastAdded = arr2[j];
      }
      j++;
    }

    return unionVector;

    // Your code here
    // return vector with correct order of elements
  }

};


//Your Code End


//{ Driver Code Starts.

int main() {
	
	int T;
	cin >> T;
	
	while(T--){
	    
	    
	    
	    int N, M;
	    cin >>N >> M;
	    
	    int arr1[N];
	    int arr2[M];
	    
	    for(int i = 0;i<N;i++){
	        cin >> arr1[i];
	    }
	    
	    for(int i = 0;i<M;i++){
	        cin >> arr2[i];
	    }
	    Solution ob;
	    vector<int> ans = ob.findUnion(arr1,arr2, N, M);
	    for(int i: ans)cout<<i<<' ';
	    cout << endl;
	    
	}
	
	return 0;
}
// } Driver Code Ends
