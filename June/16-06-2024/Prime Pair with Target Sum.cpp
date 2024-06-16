//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

class Array {
  public:
    template <class T>
    static void input(vector<T> &A, int n) {
        for (int i = 0; i < n; i++) {
            scanf("%d ", &A[i]);
        }
    }

    template <class T>
    static void print(vector<T> &A) {
        for (int i = 0; i < A.size(); i++) {
            cout << A[i] << " ";
        }
        cout << endl;
    }
};


// } Driver Code Ends

class Solution {
  public:
//Your Code Start
  
   // Function to check if a given number is prime
    bool isPrime(int number) {
        // Numbers less than or equal to 1 are not prime
        if (number <= 1) return false;
        
        // Check for factors from 2 to the square root of the number
        for (int divisor = 2; divisor <= sqrt(number); divisor++) {
            // If a factor is found, the number is not prime
            if (number % divisor == 0) return false;
        }
        
        // If no factors are found, the number is prime
        return true;
    }

    // Function to find two prime numbers that sum up to the given total
    vector<int> getPrimes(int total) {
        // Iterate through potential first prime numbers
        for (int firstPrime = 2; firstPrime <= total / 2; firstPrime++) {
            // Calculate the second prime number
            int secondPrime = total - firstPrime;
            
            // Check if both numbers are prime
            if (isPrime(firstPrime) && isPrime(secondPrime)) {
                // Return the pair of prime numbers
                return {firstPrime, secondPrime};
            }
        }
        
        // If no such pair is found, return {-1, -1}
        return {-1, -1};
      //Your Code End
}

};


//{ Driver Code Starts.

int main() {
    int t;
    scanf("%d ", &t);
    while (t--) {

        int n;
        scanf("%d", &n);

        Solution obj;
        vector<int> res = obj.getPrimes(n);

        Array::print(res);
    }
}

// } Driver Code Ends
