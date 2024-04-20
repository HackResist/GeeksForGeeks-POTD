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

                var ip = Console.ReadLine().Trim().Split(' ');
                int n = int.Parse(ip[0]);
                int m = int.Parse(ip[1]);
                int[] arr1 = new int[n];
                ip = Console.ReadLine().Trim().Split(' ');
                for (int i = 0; i < n; i++)
                {
                    arr1[i] = int.Parse(ip[i]);
                }
                int[] arr2 = new int[m];
                ip = Console.ReadLine().Trim().Split(' ');
                for (int i = 0; i < m; i++)
                {
                    arr2[i] = int.Parse(ip[i]);
                }
                Solution obj = new Solution();
                var res = obj.findUnion(arr1, arr2, n, m);
                foreach (int i in res)
                {
                    Console.Write(i + " ");
                }
                Console.WriteLine();
            }

        }
    }
}
// } Driver Code Ends




//User function Template for C#
//Your Code Start
public class Solution
{   
    //Complete this function
    //	Function to return a list containing the union of the two arrays. 
    public List<int> findUnion(int[] arr1, int[] arr2, int n, int m)
    {
        List<int> unionList = new List<int>();
           int i = 0, j = 0;
           int lastAdded = int.MinValue;
           // Traverse both arrays simultaneously
while (i < n && j < m)
{
    // If the current elements are equal and not equal to the last added element
    if (arr1[i] == arr2[j] && arr1[i] != lastAdded)
    {
        // Add the element to the union list
        unionList.Add(arr1[i]);
        // Update last added element
        lastAdded = arr1[i];
        // Move both pointers forward
        i++;
        j++;
    }
    // If element in arr1 is smaller
    else if (arr1[i] < arr2[j])
    {
        // If not equal to the last added element
        if (arr1[i] != lastAdded)
        {
            // Add element from arr1 to union list
            unionList.Add(arr1[i]);
            // Update last added element
            lastAdded = arr1[i];
        }
        // Move pointer for arr1 forward
        i++;
    }
    // If element in arr2 is smaller
    else
    {
        // If not equal to the last added element
        if (arr2[j] != lastAdded)
        {
            // Add element from arr2 to union list
            unionList.Add(arr2[j]);
            // Update last added element
            lastAdded = arr2[j];
        }
        // Move pointer for arr2 forward
        j++;
    }
}
// Add remaining elements of arr1, if any
while (i < n)
{
    // If not equal to the last added element
    if (arr1[i] != lastAdded)
    {
        // Add element from arr1 to union list
        unionList.Add(arr1[i]);
        // Update last added element
        lastAdded = arr1[i];
    }
    i++;
}
// Add remaining elements of arr2, if any
while (j < m)
{
    // If not equal to the last added element
    if (arr2[j] != lastAdded)
    {
        // Add element from arr2 to union list
        unionList.Add(arr2[j]);
        // Update last added element
        lastAdded = arr2[j];
    }
    j++;
}
      // Return the union list
        return unionList;

        //Your code here
        //return list with correct order of elements
    }
}
//Your Code End
