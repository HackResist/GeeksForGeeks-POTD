//{ Driver Code Starts
using System;

namespace DriverCode {
class GFG {
    static void Main(string[] args) {
        int testcases;
        testcases = Convert.ToInt32(Console.ReadLine());
        while (testcases-- > 0) {

            int n = Convert.ToInt32(Console.ReadLine().Trim());

            Solution obj = new Solution();
            int res = obj.countNumberswith4(n);
            Console.WriteLine(res);
        }
    }
}
}

// } Driver Code Ends





class Solution {
    public int countNumberswith4(int n) {
        //Your Code Start
        int count = 0;
        for (int i = 1; i <= n; i++) {
            if (i.ToString().Contains('4')) {
                count++;
            }
        }
        return count;
      //Your Code End
    }
}
