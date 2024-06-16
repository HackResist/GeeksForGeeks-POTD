//{ Driver Code Starts
using System;

using System.Collections.Generic;

public class IntArray {
    public static void input(int[] A, int n) {
        string[] stringArray = Console.ReadLine().Split(' ');
        for (int i = 0; i < n; i++) {
            A[i] = int.Parse(stringArray[i]);
        }
    }

    public static void print(List<int> A) {
        for (int i = 0; i < A.Count; i++) {
            Console.Write(A[i] + " ");
        }
        Console.WriteLine();
    }

    public static void print(int[] A) {
        for (int i = 0; i < A.Length; i++) {
            Console.Write(A[i] + " ");
        }
        Console.WriteLine();
    }
}

namespace DriverCode {
class GFG {
    static void Main(string[] args) {
        int testcases;
        testcases = Convert.ToInt32(Console.ReadLine());
        while (testcases-- > 0) {

            int n = Convert.ToInt32(Console.ReadLine().Trim());

            Solution obj = new Solution();
            List<int> res = obj.getPrimes(n);

            IntArray.print(res);
        }
    }
}
}

// } Driver Code Ends



class Solution {
  //Your Code Start
  // Function to check if a number is prime
    private bool isPrime(int number) {
        if (number <= 1) return false; // 0 and 1 are not prime numbers
        if (number <= 3) return true;  // 2 and 3 are prime numbers
        if (number % 2 == 0 || number % 3 == 0) return false; // Eliminate multiples of 2 and 3

        // Check for factors from 5 to the square root of the number
        for (int i = 5; i * i <= number; i += 6) {
            if (number % i == 0 || number % (i + 2) == 0) return false;
        }
        return true;
    }

    // Function to find two prime numbers that sum up to n
    public List<int> getPrimes(int n) {
        // Iterate through potential first prime numbers
        for (int firstPrime = 2; firstPrime <= n / 2; firstPrime++) {
            int secondPrime = n - firstPrime;

            // Check if both numbers are prime
            if (isPrime(firstPrime) && isPrime(secondPrime)) {
                return new List<int> { firstPrime, secondPrime };
            }
        }

        // If no such pair is found, return [-1, -1]
        return new List<int> { -1, -1 };
      //Your Code End
    }
}
