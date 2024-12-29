//{ Driver Code Starts
// Initial Template for C#

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DriverCode {

class GFG {
    static void Main(string[] args) {
        int testcases; // Taking testcase as input
        testcases = Convert.ToInt32(Console.ReadLine());
        while (testcases-- > 0) // Looping through all testcases
        {
            var a = new int[100001];
            var b = new int[100001];
            a = Array.ConvertAll(Console.ReadLine().Trim().Split(' '), int.Parse);
            b = Array.ConvertAll(Console.ReadLine().Trim().Split(' '), int.Parse);
            Solution ob = new Solution();
            List<int> res = ob.intersectionWithDuplicates(a, b);

            res.Sort(); // Sort the result list

            if (res.Count == 0) {
                Console.WriteLine("[]");
            } else {
                Console.WriteLine(string.Join(" ", res));
            }

            Console.WriteLine("~");
        }
    }
}
}
// } Driver Code Ends


// User function template for C#
//Your Code Starts
class Solution {
    public List<int> intersectionWithDuplicates(int[] a, int[] b) {
        Dictionary<int, int> freqMap = new Dictionary<int, int>();
        foreach (int num in a)
        {
            if (freqMap.ContainsKey(num))
                freqMap[num]++;
            else
                freqMap[num] = 1;
        }
        HashSet<int> resSet = new HashSet<int>();
        foreach (int num in b)
        {
            if (freqMap.ContainsKey(num))
            {
                resSet.Add(num);
            }
        }
        return new List<int>(resSet);
}
}
//Your COde ENns
