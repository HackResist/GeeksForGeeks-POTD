//{ Driver Code Starts
import java.util.*;

class ExtraElement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] a = new int[n];
            int[] b = new int[n - 1];
            for (int i = 0; i < n; i++) a[i] = sc.nextInt();
            for (int i = 0; i < n - 1; i++) b[i] = sc.nextInt();
            Solution g = new Solution();
            System.out.println(g.findExtra(n, a, b));
        }
    }
}
// } Driver Code Ends




/*Complete the function below*/
class Solution {
    public int findExtra(int n, int arr1[], int arr2[]) {
        // Your Code Start
           int left = 0, right = n - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr1[mid] == arr2[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
      //Your Code End
    }
}
