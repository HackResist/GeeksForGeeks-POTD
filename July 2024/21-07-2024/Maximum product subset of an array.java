//{ Driver Code Starts
import java.util.*;

public class GFG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();

        while (tc-- > 0) {
            int n = sc.nextInt();
            List<Integer> list = new ArrayList<>();

            for (int i = 0; i < n; i++) list.add(sc.nextInt());

            Solution obj = new Solution();
            long ans = obj.findMaxProduct(list);

            System.out.println(ans);
        }
    }
}
// } Driver Code Ends


class Solution {
    public long findMaxProduct(List<Integer> arr) {
        // Your code start
                int size = arr.size();
        if (size == 1) return arr.get(0);

        long mod = 1000000007;
        boolean z = false;
        long mProd = 1;
        long a = Long.MIN_VALUE;

        for (int i = 0; i < size; ++i) {
            int num = arr.get(i);
            if (num == 0) {
                z = true;
            } else if (num > 0) {
                mProd = (mProd * num) % mod;
            } else {
                mProd = (mProd * num) % mod;
                a = Math.max(a, (long) num);
            }
        }

        if (mProd < 0) {
            mProd = mProd / a;
        }

        if (mProd == 1 && z) {
            return 0;
        }

        return mProd;
        //Your code end
    }
}
