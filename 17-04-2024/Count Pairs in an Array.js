//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
    let obj = new Solution();
    console.log(obj.countPairs(arr, n));
  }
}
// } Driver Code Ends


// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/


//Your Code Start
class Solution {
    // Function to find the count of all pairs with given sum.
    countPairs(arr, n) {
        // Modify the array so that the problem 
        // reduces to the count inversion problem. 
        for (let i = 0; i < n; i++) {
            arr[i] = i * arr[i];
        }

        // Count inversions using the same 
        // logic as in the post 
        // https://www.geeksforgeeks.org/counting-inversions/ 
        const temp = new Array(n).fill(0);
        return this._mergeSort(arr, temp, 0, n - 1);
    }

    merge(arr, temp, left, mid, right) { 
        let inversionCount = 0;
        let i = left; // index for the left subarray 
        let j = mid; // index for the right subarray 
        let k = left; // index for the resultant subarray 
        while (i <= mid - 1 && j <= right) { 
            if (arr[i] <= arr[j]) { 
                temp[k] = arr[i]; 
                i++;
                k++;
            } else { 
                temp[k] = arr[j]; 
                k++;
                j++;

                inversionCount += (mid - i); 
            }
        }
        
        // Copy the remaining elements of the left 
        // subarray (if any) to temp 
        while (i <= mid - 1) { 
            temp[k] = arr[i]; 
            i++;
            k++;
        }

        // Copy the remaining elements of the right 
        // subarray (if any) to temp 
        while (j <= right) { 
            temp[k] = arr[j]; 
            k++;
            j++;
        }

        // Copy back the merged elements 
        // to the original array 
        for (let i = left; i <= right; i++) { 
            arr[i] = temp[i]; 
        }

        return inversionCount; 
    }
    
    _mergeSort(arr, temp, left, right) { 
        let inversionCount = 0;
        if (right > left) { 

            // Divide the array into two parts 
            // and call _mergeSortAndCountInv() 
            // for each of the parts 
            const mid = Math.floor((right + left) / 2);

            // Inversion count will be the sum of 
            // inversions in the left part, right part 
            // and the number of inversions in merging 
            inversionCount = this._mergeSort(arr, temp, left, mid); 
            inversionCount += this._mergeSort(arr, temp, mid + 1, right); 

            // Merge the two parts 
            inversionCount += this.merge(arr, temp, left, mid + 1, right); 
        }

        return inversionCount; 
    }
}

//Your Code End
