//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while (t-- > 0) {
            int d = Integer.parseInt(in.readLine());

            Solution ob = new Solution();
            System.out.println(ob.minSteps(d));
        }
    }
}
// } Driver Code Ends




// User function Template for Java

class Solution {
    static int minSteps(int d) {
      //Your Code Start
        int addition = 1;
        int element = 0;
        int count = 0;
        while (element < d) {
            element += addition;
            addition++;
            count++;
        }
        while ((element - d) % 2 != 0) {
            count++;
            element += addition;
            addition++;
        }
        return count;
      //Your Code End
    }
}
