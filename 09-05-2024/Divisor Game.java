//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.math.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int n = sc.nextInt();
            Solution obj = new Solution();
            String ans = obj.divisorGame(n) ? "True" : "False";
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends


// User function Template for Java

class Solution {
    public static boolean divisorGame(int n) {
        // Your Code Start
           // Alice will win if `n` is even, as she can always subtract a proper divisor (2) and give Bob an odd number.
        // Bob is left with an odd number and can't make a valid move, so Alice wins.
        // If `n` is odd, Alice has no valid move, so Bob wins.
        return n % 2 == 0;
      //Your Code End
    }
}
