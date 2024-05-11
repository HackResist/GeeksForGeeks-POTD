//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while (t-- > 0) {
            long n = Long.parseLong(in.readLine());

            Solution ob = new Solution();
            List<Long> ans = new ArrayList<>();
            StringBuilder out = new StringBuilder();
            ans = ob.jugglerSequence(n);
            for (int i = 0; i < ans.size(); i++) out.append(ans.get(i) + " ");
            System.out.println(out);
        }
    }
}
// } Driver Code Ends




// User function Template for Java

class Solution {
    static List<Long> jugglerSequence(long n) {
 //Your Code Start
       List<Long> sequence = new ArrayList<>();
        sequence.add(n); 
        
        while (1<n) {
            if (n % 2 == 1) {
                 n = (long) (Math.sqrt(n) * n);
            } else {
                n = (long) Math.sqrt(n); 
            }
            sequence.add(n); 
        }
        
        return sequence;
      //Your Code End
    }
}
