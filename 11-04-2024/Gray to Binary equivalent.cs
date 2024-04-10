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
            int T;// Taking testcase as input
            T = Convert.ToInt32(Console.ReadLine());
            while (T-- > 0)// Looping through all testcases
            {
                int N = Convert.ToInt32(Console.ReadLine());
                Solution obj = new Solution();
                int res = obj.grayToBinary(N);
                
                Console.Write(res+"\n");
          }

        }
    }
    
}

// } Driver Code Ends




//User function Template for C#

class Solution
{
    //Complete this function
    // function to convert a given Gray equivalent n to Binary equivalent.
    public int grayToBinary(int n)
    {
        //Your Code Start
        int ans=n;
        while(n!=0)
        {
        ans^=n>>1;
        n=n>>1;
        }
    return ans;
        
        
        // Your code End
        
    }

}
