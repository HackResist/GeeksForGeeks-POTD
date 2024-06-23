//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S = read.readLine();
            Solution ob = new Solution();
            ArrayList<Integer> result = ob.bracketNumbers(S);
            for (int value : result) out.print(value + " ");
            out.println();
        }
        out.close();
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    ArrayList<Integer> bracketNumbers(String str) {
     //Your Code Start
                ArrayList<Integer> res = new ArrayList<>();
        Stack<int[]> stk = new Stack<>();
        int count = 0;

        // Initialize result with zeros initially
        for (int i = 0; i < str.length(); i++) {
            res.add(0);
        }

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == '(') {
                count++;
                stk.push(new int[]{i, count});
                res.set(i, count);
            } else if (ch == ')') {
                int[] pair = stk.pop();
                res.set(i, pair[1]);
                res.set(pair[0], pair[1]);
            }
        }

        ArrayList<Integer> bracketNum = new ArrayList<>();
        for (int num : res) {
            if (num != 0) {
                bracketNum.add(num);
            }
        }

        return bracketNum;
    //Your Code End
    }
};
