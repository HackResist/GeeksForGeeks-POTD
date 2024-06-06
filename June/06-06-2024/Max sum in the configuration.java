//{ Driver Code Starts
import java.util.*;

class Maxsum_Among_All_Rotations_Array {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t > 0) {
            int n = sc.nextInt();
            int arr[] = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();

            System.out.println(new Solution().max_sum(arr, n));

            t--;
        }
    }
}

// } Driver Code Ends


class Solution {
    long max_sum(int a[], int n) {
        // Your code Start
            long totalSum = 0;
        for (int i = 0; i < n; i++) totalSum += a[i];
        
        long currentSum = 0;
        for (int i = 0; i < n; i++) {
            long elementValue = a[i];
            elementValue = elementValue * i;
            currentSum += elementValue;
        }
        
        long maximumSum = currentSum;
        for (int i = n - 1; i >= 0; i--) {
            currentSum += totalSum;
            long elementValue = a[i];
            long product = elementValue * n;
            currentSum -= product;
            maximumSum = Math.max(maximumSum, currentSum);
        }
        
        return maximumSum;
      //Your Code End
    }
}
