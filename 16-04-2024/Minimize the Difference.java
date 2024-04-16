//{ Driver Code Starts
import java.io.*;
import java.util.*;


class IntArray
{
    public static int[] input(BufferedReader br, int n) throws IOException
    {
        String[] s = br.readLine().trim().split(" ");
        int[] a = new int[n];
        for(int i = 0; i < n; i++)
            a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a)
    {
        for(int e : a)
            System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a)
    {
        for(int e : a)
            System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            int n;
            n = Integer.parseInt(br.readLine());
            
            
            int k;
            k = Integer.parseInt(br.readLine());
            
            
            int[] arr = IntArray.input(br, n);
            
            Solution obj = new Solution();
            int res = obj.minimizeDifference(n, k, arr);
            
            System.out.println(res);
            
        }
    }
}

// } Driver Code Ends


//Your Code Start

class Solution {
    public static int minimizeDifference(int n, int k, int[] arr) {
        // code here
        int[][] pre = new int[n][2],pos = new int[n][2];
        pre[0][0] = pre[0][1] = arr[0];
        pos[n-1][0] = pos[n-1][1] = arr[n-1];
        for(int i=1;i<n;i++) 
        {
            pre[i][0] = Math.min(pre[i-1][0],arr[i]);
            pre[i][1] = Math.max(pre[i-1][1],arr[i]);
        }
        for(int i=n-2;i>=0;i--)
        {
            pos[i][0] = Math.min(pos[i+1][0],arr[i]);
            pos[i][1] = Math.max(pos[i+1][1],arr[i]);
        }
        int ans = pos[k][1]-pos[k][0];
        for(int i=k+1;i<n;i++)
        {
            int curr = Math.max(pre[i-k-1][1],pos[i][1])-Math.min(pre[i-k-1][0],pos[i][0]);
            ans = Math.min(ans,curr);
        }
        ans = Math.min(ans,pre[n-k-1][1]-pre[n-k-1][0]);
        
        return ans;
    }
}
        //Your Code End
