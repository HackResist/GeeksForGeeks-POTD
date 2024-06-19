//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            String arr[] = read.readLine().trim().split("\\s+");
            double perimeter = Double.parseDouble(arr[0]);
            double area = Double.parseDouble(arr[1]);

            Solution ob = new Solution();
            double ans = ob.maxVolume(perimeter, area);
            System.out.println(String.format("%.2f", ans));
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {

    double maxVolume(double perimeter, double area) {
      //Your Code Start
          // Calculate the length of one side of the base
        double len = (perimeter - Math.sqrt((perimeter * perimeter) - 24 * area)) / 12.0;
        
        // Calculate the volume of the cuboid
        double vol = len * len * ((perimeter / 4.0) - 2 * len);
        
        // Round the volume to two decimal places
        return Math.round(vol * 100.0) / 100.0;
      //Your Code End
    }
}
