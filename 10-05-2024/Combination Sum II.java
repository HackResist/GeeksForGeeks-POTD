//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter ot = new PrintWriter(System.out);
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            String s[] = br.readLine().trim().split(" ");
            int n = Integer.parseInt(s[0]);
            int k = Integer.parseInt(s[1]);
            int a[] = new int[n];
            s = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) a[i] = Integer.parseInt(s[i]);
            List<List<Integer>> ans = new Solution().CombinationSum2(a, n, k);
            for (List<Integer> list : ans) {
                for (int x : list) ot.print(x + " ");
                ot.println();
            }
            if (ans.size() == 0) ot.println();
        }
        ot.close();
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    public List<List<Integer>> CombinationSum2(int arr[], int n, int k) {
        // Your Code Start
          List<List<Integer>> result = new ArrayList<>();
        // Sort the array to handle duplicates and to efficiently prune the search space
        Arrays.sort(arr);
        dfs(arr, 0, new ArrayList<>(), result, k);
        return result;
    }
    
    private void dfs(int[] arr, int start, List<Integer> path, List<List<Integer>> result, int target) {
        if (target == 0) {
            result.add(new ArrayList<>(path));
            return;
        }
        if (target < 0) {
            return;
        }
        for (int i = start; i < arr.length; i++) {
            // Avoid duplicates by skipping identical elements
            if (i > start && arr[i] == arr[i - 1]) {
                continue;
            }
            path.add(arr[i]);
            dfs(arr, i + 1, path, result, target - arr[i]);
            path.remove(path.size() - 1);
        }
      //Your Code End
    }
}
