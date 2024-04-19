//{ Driver Code Starts
//Initial Template for Java





import java.io.*;
import java.util.*;


// } Driver Code Ends
//User function Template for Java

//Your Code Start

class Solution
{
    ArrayList<Integer> findMissing(int a[], int b[], int n, int m)
    {
         ArrayList<Integer> missing = new ArrayList<>();
        
        // Convert array b to a HashSet for faster lookup
        HashSet<Integer> setB = new HashSet<>();
        for (int num : b) {
            setB.add(num);
        }
        
        // Iterate through array a
        for (int num : a) {
            // If the current element of array a is not present in setB (array b),
            // add it to the list of missing elements
            if (!setB.contains(num)) {
                missing.add(num);
            }
        }
        
        return missing;
        
    }
}
//Your Code End


//{ Driver Code Starts.

// Driver class
class Array {

    // Driver code
    public static void main(String[] args) throws IOException {
        // Taking input using buffered reader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int testcases = Integer.parseInt(br.readLine());
        // looping through all testcases
        while (testcases-- > 0) {
//            int n = Integer.parseInt(br.readLine());
            String line = br.readLine();
            String[] q = line.trim().split("\\s+");
            int n =Integer.parseInt(q[0]);
            int m =Integer.parseInt(q[1]);
            //int y =Integer.parseInt(q[2]);
            String line1 = br.readLine();
            String[] a1 = line1.trim().split("\\s+");
            int a[] = new int[n];
            for (int i = 0; i < n; i++) {
                a[i] = Integer.parseInt(a1[i]);
            }
            String line2 = br.readLine();
            String[] a2 = line2.trim().split("\\s+");
            int b[] = new int[m];
            for (int i = 0; i < m; i++) {
                b[i] = Integer.parseInt(a2[i]);
            }
            Solution ob = new Solution();
            ArrayList<Integer> ans=ob.findMissing(a,b,n,m);
            for (int i = 0; i < ans.size(); i++) {
                System.out.print(ans.get(i)+" ");
            }
            System.out.println();

        }
    }
}



// } Driver Code Ends
