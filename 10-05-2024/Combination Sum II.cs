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

            var ip = Console.ReadLine().Trim().Split(' ');
            int n = int.Parse(ip[0]);
            int k = int.Parse(ip[1]);
            List<int> arr = new List<int>();
            ip = Console.ReadLine().Trim().Split(' ');
            for (int i = 0; i < n; i++) {
                arr.Add(int.Parse(ip[i]));
            }
            Solution obj = new Solution();
            var res = obj.CombinationSum2(arr, n, k);
            foreach (var v in res) {
                foreach (var vv in v) {
                    Console.Write(vv + " ");
                }
                Console.WriteLine();
            }
            if (res.Count == 0) Console.WriteLine();
        }
    }
}
}
// } Driver Code Ends


// User function Template for C#


class Solution {
    // Complete this function
    public List<List<int>> CombinationSum2(List<int> arr, int n, int k) {
        List<List<int>> result = new List<List<int>>();
        arr.Sort(); // Sort the array to handle duplicates
        
        // Call the recursive helper function
        FindCombinations(arr, 0, new List<int>(), k, result);
        
        return result;
    }
    
    private void FindCombinations(List<int> arr, int index, List<int> current, int target, List<List<int>> result) {
        if (target == 0) {
            result.Add(new List<int>(current));
            return;
        }
        
        for (int i = index; i < arr.Count; i++) {
            // Skip duplicates
            if (i > index && arr[i] == arr[i - 1]) continue;
            
            // If current element exceeds target, break
            if (arr[i] > target) break;
            
            // Add current element to the combination
            current.Add(arr[i]);
            
            // Recur with reduced target and next index
            FindCombinations(arr, i + 1, current, target - arr[i], result);
            
            // Backtrack - remove the last element to try other combinations
            current.RemoveAt(current.Count - 1);
        }
    }
}
