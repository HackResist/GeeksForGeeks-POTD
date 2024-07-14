//{ Driver Code Starts


// Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            String line = br.readLine();
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

            new Solution().segregate0and1(arr);
            for (int i = 0; i < array.size(); i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.println();
            // System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java

class Solution {
    void segregate0and1(int[] arr) {
   //Your Code Start
        int l = 0;
        int r = arr.length -1;
        while (l<r){

            while(arr[l] == 0 && l<r){
                l += 1; 
            }
            
            while(arr[r]==1 && l<r){
                r -= 1;
            }
       
            if (l < r){
              int temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                l += 1;
                r -= 1;
            }
      
    }
      //Your Code End
        
    }

}
