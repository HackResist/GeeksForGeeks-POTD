//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            Long X = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.reversedBits(X));
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    static Long reversedBits(Long x) {
        //Your Code Start
         long ans = 0;
        long i = 0;
        
        while (x != 0) {
            long bit = x & 1;
            ans |= bit << (31 - i);
            x >>= 1;
            i++;
        }
        
        // If the original number was negative, set the leftmost bit to 1
        if (ans < 0) {
            ans = (long) (Math.pow(2, 32) + ans); // 2^32
        }
        
        return ans;
        //Your Code End
    }
};
