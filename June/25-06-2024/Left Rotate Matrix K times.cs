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
            int m = int.Parse(ip[1]);
            int k = int.Parse(ip[2]);
            int[][] arr = new int [n][];

            for (int i = 0; i < n; i++) {
                arr[i] = new int[m];
            }
            for (int i = 0; i < n; i++) {
                var ipp = Console.ReadLine().Trim().Split(' ');
                for (int j = 0; j < m; j++) {
                    arr[i][j] = int.Parse(ipp[j]);
                }
            }
            Solution obj = new Solution();
            var res = obj.rotateMatrix(k, arr);
            foreach (int[] i in res) {
                foreach (int j in i) {
                    Console.Write(j + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
}
// } Driver Code Ends


// User function Template for C#

class Solution {
    // Complete this function
    public int[][] rotateMatrix(int k, int[][] mat) {
//Your Code Start
         int r_no = mat.Length; // Number of rows in the matrix
        int c_no = mat[0].Length; // Number of columns in the matrix
        
        // If k is a multiple of c_no, the matrix remains unchanged
        if (k % c_no == 0) return mat;
        
        // Rotate each row individually
        for (int i = 0; i < r_no; i++) {
            int[] v = (int[])mat[i].Clone(); // Copy the current row
            for (int j = 0; j < c_no; j++) {
                // Calculate the new position for each element in the row
                mat[i][(c_no - k % c_no + j) % c_no] = v[j];
            }
        }
        return mat;
        //Your Code End
    }
}
