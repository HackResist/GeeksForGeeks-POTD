//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

//Your Code Starts
class Solution {

    int countPairs(int arr[], int target) {
        // Your code here
        int[] freq = new int[200001];
        int count = 0;

        for (int i = 0; i < arr.length; i++) {
            int comp = target - arr[i];
            count += freq[comp + 10000];
            freq[arr[i] + 10000]++;
        }

        return count;
    }
}
//Your Code Ends


//{ Driver Code Starts.

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            String line = read.readLine().trim();
            String[] numsStr = line.split(" ");
            int[] nums = new int[numsStr.length];
            for (int i = 0; i < numsStr.length; i++) {
                nums[i] = Integer.parseInt(numsStr[i]);
            }

            int target = Integer.parseInt(read.readLine());

            Solution obj = new Solution();

            System.out.println(obj.countPairs(nums, target));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends
