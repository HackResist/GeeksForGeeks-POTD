//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG
{
	public static void main(String[] args) throws IOException
	{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while(t-->0)
        {
            int n = Integer.parseInt(br.readLine().trim());
            int a[] = new int[(int)n];
            String inputLine[] = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                a[i] = Integer.parseInt(inputLine[i]);
            }
            
            Solution obj = new Solution();  
            System.out.println(obj.countPairs(a, n));
            
        }
	}
}

// } Driver Code Ends


//User function Template for Java


//Your Code start

class Solution {
    static int countPairs(int arr[], int n) {
        if (n <= 2) {
            return 0;
        }
        List<Integer> res = new ArrayList<>();
        Map<Integer, Integer> mp = new HashMap<>();
        int count = 0;
        for (int i = 0; i < n; i++) {
            res.add(i * arr[i]);
        }
        List<Integer> dup = new ArrayList<>(res);
        dup.sort(null);

        for (int i = 0; i < n; i++) {
            int index = dup.indexOf(res.get(i));
            if (res.get(i) == 0) {
                dup.remove(index);
                continue;
            }
            dup.remove(index);
            count += index;
        }
        return count;
    }
}
//Your Code End
