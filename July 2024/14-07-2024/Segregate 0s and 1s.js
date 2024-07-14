//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        // let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let n = arr.length;
        let obj = new Solution();
        let res = obj.segregate0and1(arr);
        let s = "";
        for (let j = 0; j < n; j++) {
            s += arr[j] + " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr

*/

class Solution {

    segregate0and1(arr) {

   //Your Code Start
        let l = 0;
        let r = arr.length -1;
        while (l<r){

            while(arr[l] === 0 && l<r){
                l += 1; 
            }
            
            while(arr[r]===1 && l<r){
                r -= 1;
            }
       
            if (l < r){
              let temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                l += 1;
                r -= 1;
            }
      
    }
      //Your Code End
        
    }

}
