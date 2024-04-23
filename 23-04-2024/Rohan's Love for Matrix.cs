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

                Solution obj = new Solution();
                int res = obj.firstElement(N);
                Console.Write(res+"\n");
          }

        }
    }
   

}

// } Driver Code Ends

//Your Code Start
class Solution
    {
       // Complete this function
    // Function to find the first element in the array.
    public int firstElement(int n)
    {
        // Define modulo value
        int mod = 1000000007;

        // Check if n is 1 or 2, return 1 as per the problem statement
        if (n == 1 || n == 2)
            return 1;

        // Initialize the first two elements of the sequence
        int n1 = 1, n2 = 1;

        // Initialize the variable to store the current element
        int current = 0;

        // Loop through the sequence starting from the third element (i = 3)
        for (int i = 2; i <= n; i++)
        {
            // Calculate the current element by adding the previous two elements
            current = n2 + n1;

            // Take modulo to avoid overflow and store the result back to current
            current %= mod;

            // Update n1 and n2 for the next iteration
            n1 = n2;
            n2 = current;
        }

        // Calculate the first element modulo mod
        int firstElement = n1 % mod;

        // Return the first element
        return firstElement;
    }
    }
//Your Code End
