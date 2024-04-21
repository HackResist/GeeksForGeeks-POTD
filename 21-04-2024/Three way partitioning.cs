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

                int N = Convert.ToInt32(Console.ReadLine());
                List<int> array = new List<int>();
                array = Console.ReadLine().Trim().Split(' ').Select(x => int.Parse(x)).ToList();

                int[] p = new int[2];
                p = Console.ReadLine().Trim().Split(' ').Select(x => int.Parse(x)).ToArray();
                int a = p[0];
                int b = p[1];

                Solution obj = new Solution();
                obj.threeWayPartition(array, a, b);
                bool ok = true;
                int k1 = 0,k2 = 0,k3 = 0;
                int kk1 = 0,kk2 = 0,kk3 = 0;
                
                for(int i = 0; i < array.Count; i++)
                {
                    if(array[i] > b)
                        k3++;
                    else if(array[i] <= b && array[i] >= a)
                        k2++;
                    else if(array[i] < b)
                        k1++;
                }
                
                for(int i = 0; i < k1; i++)
                {
                    if(array[i] < b) kk1++;
                }
                
                for(int i = k1; i < k1 + k2; i++)
                {
                    if(array[i] <= b && array[i] >= a) kk2++;
                }
                
                for(int i = k1 + k2; i < k1 + k2 + k3; i++)
                {
                    if(array[i] > b) kk3++;
                }
                
                
                if(k1 == kk1 && k2 == kk2 && k3 == kk3)
                    ok = true;
        
        
                Dictionary<int,int> ump = new Dictionary<int,int>();
        
                for(int i = 0; i < array.Count; i++){
                    if(ump.ContainsKey(array[i])) ump[array[i]]++;
                    else ump.Add(array[i],1);
                }
                
                for(int i = 0; i < array.Count; i++)
                    ump[array[i]]--;
                
                foreach(KeyValuePair<int,int> i in ump)
                    if(i.Value != 0)
                        ok=false;
        
                if(ok)
                    Console.Write(1+"\n");
                else
                    Console.Write(0+"\n");
          }

        }
    }
}
// } Driver Code Ends
//Your Code Start

//Remember This code Give you warning of "The variable `N' is assigned " But Dont Worry This Is part of Driver Code. You Can Submit THis code and this test passed .
class Solution
{
    // Function to partition the array around the range such 
    // that array is divided into three parts.
    public void threeWayPartition(List<int> array, int a, int b)
    {
        int low = 0; // Pointer for elements less than a
        int high = array.Count - 1; // Pointer for elements greater than b
        int i = 0; // Pointer for elements between a and b

        // Traverse the array
        while (i <= high)
        {
            if (array[i] < a)
            {
                // If the current element is less than a, swap it with the element at the low index
                int temp = array[i];
                array[i] = array[low];
                array[low] = temp;
                low++; // Move the low pointer to the right
                i++; // Move to the next element
            }
            else if (array[i] > b)
            {
                // If the current element is greater than b, swap it with the element at the high index
                int temp = array[i];
                array[i] = array[high];
                array[high] = temp;
                high--; // Move the high pointer to the left
                // Don't increment i, as we need to recheck the swapped element
            }
            else
            {
                // If the current element is between a and b, just move to the next element
                i++;
            }
        }
    }
}
//Your Code End
