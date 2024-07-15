//{ Driver Code Starts
import java.util.*;

class GFG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();

        while (tc-- > 0) {
            int s = sc.nextInt();
            int d = sc.nextInt();

            Solution obj = new Solution();
            String res = obj.smallestNumber(s, d);

            System.out.println(res);
        }
    }
}
// } Driver Code Ends



class Solution {
    public String smallestNumber(int s, int d) {
        // Your CCode Start
                // If the sum of digits is greater than the maximum possible sum for the given number of digits, return "-1"
        if (s > 9 * d) {
            return "-1";
        }
        
        // Initialize the result string with spaces of length 'digits'
        char[] result = new char[d];
        for (int i = 0; i < d; i++) {
            result[i] = ' ';
        }
        
        // Decrease sum by 1 to handle the most significant digit separately
        s--;
        
        // Fill the digits from the least significant to the most significant using a different loop structure
        for (int pos = d - 1; pos > 0; pos--) {
            // Assign the maximum possible value (either 9 or the remaining sum)
            int val = Math.min(9, s);
            result[pos] = (char) ('0' + val);
            s -= val;
        }
        
        // Set the most significant digit
        result[0] = (char) ('1' + s);
        
        return new String(result);
    //Your Code End
    }
}
