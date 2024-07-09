//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);

        int t = Integer.parseInt(in.readLine().trim());
        while (t-- > 0) {
            String line = in.readLine();
            String[] tokens = line.split(" ");

            // Create an ArrayList to store the integers
            ArrayList<Integer> array = new ArrayList<>();

            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;

            int key = Integer.parseInt(in.readLine().trim());

            out.println(new Solution().threeSumClosest(arr, key));
        }
        out.close();
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    static int threeSumClosest(int[] array, int target) {
        //Your Code Start
       // Sort the array
        Arrays.sort(array);
        
        int n = array.length;
        int closeSum = array[0] + array[1] + array[2]; // Initialize closeSum with the first triplet
        
        // Iterate through the array
        for (int i = 0; i < n - 2; ++i) {
            int l = i + 1;
            int r = n - 1;
            
            // Use two-pointer technique
            while (l < r) {
                int currSum = array[i] + array[l] + array[r];
                
                // If the current sum is exactly equal to the target, return it
                if (currSum == target) {
                    return currSum;
                }
                
                // Update the closeSum if the current sum is closer to the target
                if (Math.abs(currSum - target) < Math.abs(closeSum - target)) {
                    closeSum = currSum;
                } else if (Math.abs(currSum - target) == Math.abs(closeSum - target) && currSum > closeSum) {
                    // Prefer the maximum sum if the difference is the same
                    closeSum = currSum;
                }
                
                // Move the pointers
                if (currSum < target) {
                    ++l;
                } else {
                    --r;
                }
            }
        }
        
        return closeSum;
        //Your Code End
    
    }
}
