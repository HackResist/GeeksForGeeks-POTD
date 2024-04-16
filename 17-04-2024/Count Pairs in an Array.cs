//{ Driver Code Starts
//Initial Template for C#


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DriverCode
{

    class GFG
    {
        static void Main(string[] args)
        {
            int testcases;// Taking testcase as input
            testcases = Convert.ToInt32(Console.ReadLine());
            while (testcases-- > 0)// Looping through all testcases
            {
                var n = Console.ReadLine().Trim().Split(' ');
                int N = int.Parse(n[0]);
                int[] arr = new int[N];
                var a = Console.ReadLine().Trim().Split(' ');
                for (int i = 0; i < N; i++)
                {
                    arr[i] = int.Parse(a[i]);
                }
                Solution obj = new Solution();
                var res = obj.countPairs(arr,N);
                Console.WriteLine(res);
            }
        }
    }
}
// } Driver Code Ends



//Your Code Start

//User function Template for C#
class Solution
{
    // Complete this function
    // Function to count pairs with given sum.
    public int countPairs(int[] arr, int n) 
    {
        // Modify the array so that the problem reduces to 
        // counting inversions. 
        for (int i = 0; i < n; i++) 
            arr[i] = i * arr[i]; 

        // Count inversions using the same logic as 
        // the algorithm for counting inversions. 
        int[] temp = new int[n];
        return MergeSortAndCountInversions(arr, temp, 0, n - 1); 
    }

    // Return count of pair in the given array 
    // such that i*arr[i] > j*arr[j] 
    int Merge(int[] arr, int[] temp, int left, int mid, int right) 
    { 
        int inversionCount = 0; 

        int i = left; /* index for the left subarray */
        int j = mid; /* index for the right subarray */
        int k = left; /* index for the resultant subarray */
        while ((i <= mid - 1) && (j <= right)) 
        { 
            if (arr[i] <= arr[j]) 
                temp[k++] = arr[i++]; 
            else
            { 
                temp[k++] = arr[j++]; 

                inversionCount = inversionCount + (mid - i); 
            } 
        } 

        // Copy the remaining elements of the left subarray (if there are any) to temp
        while (i <= mid - 1) 
            temp[k++] = arr[i++]; 

        // Copy the remaining elements of the right subarray (if there are any) to temp
        while (j <= right) 
            temp[k++] = arr[j++]; 

        // Copy back the merged elements to the original array
        for (i = left; i <= right; i++) 
            arr[i] = temp[i]; 

        return inversionCount; 
    } 

    // An auxiliary recursive function that sorts the input array 
    // and returns the number of inversions in the array. 
    int MergeSortAndCountInversions(int[] arr, int[] temp, int left, int right) 
    { 
        int mid, inversionCount = 0; 
        if (right > left) 
        { 
            // Divide the array into two parts and call MergeSortAndCountInversions 
            // for each of the parts 
            mid = (right + left) / 2; 

            // Inversion count will be the sum of inversions in the left part, 
            // right part, and the number of inversions in merging 
            inversionCount = MergeSortAndCountInversions(arr, temp, left, mid); 
            inversionCount += MergeSortAndCountInversions(arr, temp, mid + 1, right); 

            // Merge the two parts
            inversionCount += Merge(arr, temp, left, mid + 1, right); 
        } 

        return inversionCount; 
    } 
}
//Your Code End
