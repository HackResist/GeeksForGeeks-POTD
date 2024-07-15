//{ Driver Code Starts
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Position this line where user code will be pasted.

namespace DriverCode {

class GFG {
    static void Main(string[] args) {
        int testcases; // Taking testcase as input
        testcases = Convert.ToInt32(Console.ReadLine());
        while (testcases-- > 0) // Looping through all testcases
        {
            string[] inputs = Console.ReadLine().Split();
            int s = int.Parse(inputs[0]);
            int d = int.Parse(inputs[1]);

            Solution ob = new Solution();
            Console.WriteLine(ob.SmallestNumber(s, d));
        }
    }
}
}

// } Driver Code Ends


// User function Template for C#

public class Solution {
    // Complete this function
    public string SmallestNumber(int s, int d) {
        // Your Code Start
                // If the sum of digits is greater than the maximum possible sum for the given number of digits, return "-1"
        if (s > 9 * d)
        {
            return "-1";
        }
        
        // Initialize the result string with spaces of length 'digits'
        char[] result = new char[d];
        for (int i = 0; i < d; i++)
        {
            result[i] = ' ';
        }
        
        // Decrease sum by 1 to handle the most significant digit separately
        s--;
        
        // Fill the digits from the least significant to the most significant using a different loop structure
        for (int pos = d - 1; pos > 0; pos--)
        {
            // Assign the maximum possible value (either 9 or the remaining sum)
            int val = Math.Min(9, s);
            result[pos] = (char)('0' + val);
            s -= val;
        }
        
        // Set the most significant digit
        result[0] = (char)('1' + s);
        
        return new string(result);
        //Your Code End
    }
}
