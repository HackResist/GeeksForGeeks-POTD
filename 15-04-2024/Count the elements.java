//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;


class Array {
    
    // Driver code
	public static void main (String[] args) throws IOException{
		// Taking input using buffered reader
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int testcases = Integer.parseInt(br.readLine());
		// looping through all testcases
		while(testcases-- > 0){
		    int n=Integer.parseInt(br.readLine());
		    String line1 = br.readLine();
		    String line2 = br.readLine();
		    String[] a1 = line1.trim().split("\\s+");
		    String[] b1 = line2.trim().split("\\s+");
		    int a[]=new int[n];
		    int b[]=new int[n];
		    
		    for(int i=0;i<n;i++)
		    {
		        a[i]=Integer.parseInt(a1[i]);
		        b[i]=Integer.parseInt(b1[i]);
		    }
		    int q = Integer.parseInt(br.readLine());
		    int query[]=new int[q];
		    for(int i=0;i<q;i++)
		    {
		        query[i]=Integer.parseInt(br.readLine());
		    }
		    Solution ob=new Solution();
		    int ans[]=ob.countElements(a,b,n,query,q);
		    for(int i=0;i<q;i++)
		    System.out.println(ans[i]);
		    
		}
	}
}

// } Driver Code Ends




//User function Template for Java


class Solution
{
  //Your Code Start
      public static int[] countElements(int a[], int b[], int n, int query[], int q) {
        // Sort array b
        Arrays.sort(b);

        int[] ans = new int[q];

        // Iterate through each query
        for (int i = 0; i < q; i++) {
            // Use binary search to find the number of elements <= query value
            int count = upperBound(b, a[query[i]]);
            ans[i] = count;
        }

        return ans;
    }

    // Custom implementation of upperBound
    private static int upperBound(int[] arr, int key) {
        int low = 0;
        int high = arr.length;

        while (low < high) {
            int mid = low + (high - low) / 2;

            if (arr[mid] <= key) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
      //Your Code End
}
}
