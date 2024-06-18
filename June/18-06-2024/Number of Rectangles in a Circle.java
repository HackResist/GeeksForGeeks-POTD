//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            int ans = ob.rectanglesInCircle(N);
            System.out.println(ans);
        }
    }
}
// } Driver Code Ends




// User function Template for Java

class Solution {
    int rectanglesInCircle(int r) {
    //Your Code Start
       int count = 0;
        
        // Calculate the square of the diameter of the circle (2r)^2 = 4r^2
        int diameterSquared = 4 * r * r;

        // Iterate over all possible widths (w) from 1 to 2r
        for (int w = 1; w <= 2 * r; ++w) {
            // Iterate over all possible heights (h) from 1 to 2r
            for (int h = 1; h <= 2 * r; ++h) {
                // Check if the rectangle with width w and height h can fit inside the circle
                // This is true if the sum of squares of width and height is less than or equal to the square of the diameter
                if (w * w + h * h <= diameterSquared) {
                    // Increment the count of valid rectangles
                    ++count;
                }
            }
        }

        // Return the total count of rectangles that can fit inside the circle
        return count;
      //Your Code End
    }
};
