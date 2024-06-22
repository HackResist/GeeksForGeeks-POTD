//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
import java.util.regex.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S = read.readLine();
            Solution ob = new Solution();
            System.out.println(ob.ExtractNumber(S));
        }
    }
}
// } Driver Code Ends




// User function Template for Java

class Solution {
    long ExtractNumber(String sentence) {
       //Your Code Start
// Regular expression to find all numbers
        Pattern pattern = Pattern.compile("\\d+");
        Matcher matcher = pattern.matcher(sentence);
        
        long maxNumber = -1;
        
        while (matcher.find()) {
            String matchStr = matcher.group();
            
            // Check if the number contains '9'
            if (!matchStr.contains("9")) {
                long num = Long.parseLong(matchStr);
                if (num > maxNumber) {
                    maxNumber = num;
                }
            }
        }
        
        return maxNumber;
        //Your Code End
    }
}
