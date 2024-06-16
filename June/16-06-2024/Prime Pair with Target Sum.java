//{ Driver Code Starts
import java.io.*;
import java.util.*;
import java.util.ArrayList;

class IntArray {
    public static int[] input(BufferedReader br, int n) throws IOException {
        String[] s = br.readLine().trim().split(" ");
        int[] a = new int[n];
        for (int i = 0; i < n; i++) a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            int n;
            n = Integer.parseInt(br.readLine());

            Solution obj = new Solution();
            ArrayList<Integer> res = obj.getPrimes(n);

            IntArray.print(res);
        }
    }
}

// } Driver Code Ends


//Your Code Start
class Solution {
      // Function to check if a number is prime
    private static boolean isPrime(int number) {
        if (number <= 1) return false;
        for (int divisor = 2; divisor <= Math.sqrt(number); divisor++) {
            if (number % divisor == 0) return false;
        }
        return true;
    }

    // Function to find two prime numbers that sum up to n
    public static ArrayList<Integer> getPrimes(int n) {
        ArrayList<Integer> result = new ArrayList<>();

        // Iterate through potential first prime numbers
        for (int firstPrime = 2; firstPrime <= n / 2; firstPrime++) {
            int secondPrime = n - firstPrime;

            // Check if both numbers are prime
            if (isPrime(firstPrime) && isPrime(secondPrime)) {
                result.add(firstPrime);
                result.add(secondPrime);
                return result; // Return the pair of prime numbers
            }
        }

        // If no such pair is found, return {-1, -1}
        result.add(-1);
        result.add(-1);
        return result;
      //Your Code End
}
}
