//{ Driver Code Starts
//Initial Template for Java


import java.util.*;
import java.io.*;
import java.lang.*;

class Main
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t  =Integer.parseInt(read.readLine());
        
        while(t-- > 0)
        {
            String st[] = read.readLine().trim().split(" ");
            int N = Integer.parseInt(st[0]);
            int M = Integer.parseInt(st[1]);
            
            int arr1[] = new int[N];
            int arr2[] = new int[M];
            
            st = read.readLine().trim().split(" ");
            for(int i = 0; i < N; i++)
              arr1[i] = Integer.parseInt(st[i]);
            
            st = read.readLine().trim().split(" ");  
            for(int i = 0; i< M; i++)
              arr2[i] = Integer.parseInt(st[i]);
            
            Solution obj = new Solution();
            ArrayList<Integer> res = new ArrayList<Integer>();
            res = obj.findUnion(arr1, arr2, N, M);
            for(int i = 0;i<res.size();i++)
                System.out.print(res.get(i) + " ");
            System.out.println(); 
        }
    }
}



// } Driver Code Ends




//User function Template for Java

//arr1,arr2 : the arrays
// n, m: size of arrays
//Your Code Start

class Solution {
    // Function to return a list containing the union of the two arrays.
    public static ArrayList<Integer> findUnion(int arr1[], int arr2[], int n, int m) {
        ArrayList<Integer> unionList = new ArrayList<>();
        int i = 0, j = 0;
        int lastAdded = Integer.MIN_VALUE; // Variable to track the last added element

        // Traverse both arrays simultaneously
        while (i < n && j < m) {
            // If the current elements are equal and not equal to the last added element
            if (arr1[i] == arr2[j] && arr1[i] != lastAdded) {
                // Add the element to the union list
                unionList.add(arr1[i]);
                // Update last added element
                lastAdded = arr1[i];
                // Move both pointers forward
                i++;
                j++;
            }
            // If element in arr1 is smaller
            else if (arr1[i] < arr2[j]) {
                // If not equal to the last added element
                if (arr1[i] != lastAdded) {
                    // Add element from arr1 to union list
                    unionList.add(arr1[i]);
                    // Update last added element
                    lastAdded = arr1[i];
                }
                // Move pointer for arr1 forward
                i++;
            }
            // If element in arr2 is smaller
            else {
                // If not equal to the last added element
                if (arr2[j] != lastAdded) {
                    // Add element from arr2 to union list
                    unionList.add(arr2[j]);
                    // Update last added element
                    lastAdded = arr2[j];
                }
                // Move pointer for arr2 forward
                j++;
            }
        }

        // Add remaining elements of arr1, if any
        while (i < n) {
            // If not equal to the last added element
            if (arr1[i] != lastAdded) {
                unionList.add(arr1[i]);
                lastAdded = arr1[i];
            }
            i++;
        }

        // Add remaining elements of arr2, if any
        while (j < m) {
            // If not equal to the last added element
            if (arr2[j] != lastAdded) {
                unionList.add(arr2[j]);
                lastAdded = arr2[j];
            }
            j++;
        }

        // Return the union list
        return unionList;
    }
}
//Your Code End
