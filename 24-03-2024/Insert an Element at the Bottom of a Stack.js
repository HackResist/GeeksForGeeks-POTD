//{ Driver Code Starts
//Initial Template for javascript


'use strict';


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {
        let [n,x] = readLine().trim().split(" ").map((x) => Number(x));
        let arr = readLine().trim().split(" ").map((x) => Number(x));
        let obj = new Solution();
        let res = obj.insertAtBottom(arr, x);
        let s = "";
        for(let it of res){
            s+=it+" ";
        }
        console.log(s);
    }
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {Stack} st
 * @param {number} x
 * @returns {Stack}
*/

class Solution {
    //Function to insert an element at the bottom of a stack.
    insertAtBottom(st, x) {
        //your code Start
              if (st.length === 0) {
            // If the stack is empty, simply push the element.
            st.push(x);
        } else {
            // Remove all elements and store them in a function call stack.
            let temp = st.pop();
            // Recursively insert the element at the bottom.
            this.insertAtBottom(st, x);
            // Push the elements back onto the stack.
            st.push(temp);
        }
        return st;
      //Your Code End
    }
}
