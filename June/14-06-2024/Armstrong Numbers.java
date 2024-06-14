//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int n = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.armstrongNumber(n));
        }
    }
}
// } Driver Code Ends


// User function Template for Java
class Solution {
    static String armstrongNumber(int n) {
    //Your Code Start
         // Convert the number to a string to easily iterate through each digit
        String numStr = Integer.toString(n);
        
        // Number of digits
        int numDigits = numStr.length();
        
        // Compute the sum of each digit raised to the power of the number of digits
        int sumOfPowers = 0;
        for (char digitChar : numStr.toCharArray()) {
            int digit = Character.getNumericValue(digitChar);
            sumOfPowers += Math.pow(digit, numDigits);
        }
        
        // Check if the sum of powers is equal to the original number
        if (sumOfPowers == n) {
            return "true";
        } else {
            return "false";
        }

      //Your Code End
    }
}
