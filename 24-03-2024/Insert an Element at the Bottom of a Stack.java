//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    static File file;
    static BufferedReader in;
    static PrintWriter out;

    public static void main(String args[]) throws IOException {
        in=new BufferedReader(new InputStreamReader(System.in));
        out=new PrintWriter(System.out);
        int t = Integer.parseInt(in.readLine());

        while (t-- > 0) {

            String s[] = in.readLine().trim().split(" ");
            int n = Integer.parseInt(s[0]);
            int x = Integer.parseInt(s[1]);
            s = in.readLine().trim().split(" ");
            Stack<Integer> st = new Stack<>();
            for (int i = 0; i < n; i++) {
                st.push(Integer.parseInt(s[i]));
            }
            Solution ob = new Solution();
            Stack<Integer> S = ob.insertAtBottom(st, x);
            for (int i : S) {
                out.print(i + " ");
            }
            out.println();
        }
        out.close();
    }
}

// } Driver Code Ends


//User function Template for Java
class Solution {
    public Stack<Integer> insertAtBottom(Stack<Integer> st, int x) {
      //Your Code Start
        if (st.isEmpty()) {
            // If the stack is empty, simply push the element
            st.push(x);
        } else {
            // Pop all elements and store them in the function call stack
            int temp = st.pop();
            // Recursively insert the element at the bottom
            insertAtBottom(st, x);
            // Push the elements back onto the stack
            st.push(temp);
        }
        return st;
      //Your Code End
        
    }
}
