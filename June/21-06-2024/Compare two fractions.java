//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

class GFG {
    public static void main(String args[]) throws IOException {

        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));

        Solution ob = new Solution();
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String str = read.readLine().trim();
            String ans = ob.compareFrac(str);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends


// User function Template for Java

class Solution {

    String compareFrac(String str) {
       //Your Code Start
            Pattern fractionPattern = Pattern.compile("(-?\\d+)\\s*/\\s*(-?\\d+)");
        Matcher matcher = fractionPattern.matcher(str);
        
        int[] numerators = new int[2];
        int[] denominators = new int[2];
        int idx = 0;

        while (matcher.find() && idx < 2) {
            numerators[idx] = Integer.parseInt(matcher.group(1));
            denominators[idx] = Integer.parseInt(matcher.group(2));
            idx++;
        }

        int a = numerators[0], b = denominators[0];
        int c = numerators[1], d = denominators[1];

        long lhs = (long) a * d;
        long rhs = (long) c * b;

        if (lhs > rhs) {
            return a + "/" + b;
        } else if (lhs < rhs) {
            return c + "/" + d;
        } else {
            return "equal";
        }
      //Your Code End
    }
}
