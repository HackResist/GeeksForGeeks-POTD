//{ Driver Code Starts
import java.io.*;
import java.util.*;

class IntArray {
    public static int[] input(BufferedReader br, int n) throws IOException {
        String[] s = br.readLine().trim().split(" ");
        int[] a = new int[n];
        for (int i = 0; i < n; i++) a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            int n;
            n = Integer.parseInt(br.readLine());

            int x;
            x = Integer.parseInt(br.readLine());

            int y;
            y = Integer.parseInt(br.readLine());

            int[] arr = IntArray.input(br, n);

            int[] brr = IntArray.input(br, n);

            Solution obj = new Solution();
            long res = obj.maxTip(n, x, y, arr, brr);

            System.out.println(res);
        }
    }
}

// } Driver Code Ends



class Solution {
    public static long maxTip(int n, int x, int y, int[] arr, int[] brr) {
        // Your Code Start
    List<int[]> diffList = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            diffList.add(new int[]{Math.abs(arr[i] - brr[i]), i});
        }
        diffList.sort((a, b) -> b[0] - a[0]);
        
        long totalTip = 0;
        int countA = 0, countB = 0;
        
        for (int[] diff : diffList) {
            int idx = diff[1];
            if ((arr[idx] > brr[idx] && countA < x) || countB >= y) {
                totalTip += arr[idx];
                countA++;
            } else {
                totalTip += brr[idx];
                countB++;
            }
        }
        
        return totalTip;
      //Your Code End
    }
}
