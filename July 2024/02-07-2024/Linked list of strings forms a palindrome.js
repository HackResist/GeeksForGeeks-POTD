//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function printList(head) {
    let s = "";
    while (head) {
        s += head.data;
        s += " ";
        head = head.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ");
        let list = new Node(arr[0]);
        let tail = list;
        for (let j = 1; j < n; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }

        let obj = new Solution();
        let res = obj.compute(list);
        if (res)
            console.log("true");
        else
            console.log("false");
    }
}

// } Driver Code Ends


// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {boolean}
 */

class Solution {
    compute(head) {
//Your Code Start
      // Step 1: Concatenate all strings in the linked list into a single string
        let combStr = "";
        let curr = head;
        while (curr !== null) {
            combStr += curr.data;
            curr = curr.next;
        }

        // Step 2: Check if the combined string is a palindrome
        let l = 0;
        let r = combStr.length - 1;
        while (l < r) {
            if (combStr[l] !== combStr[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
        //Your Code End
    }
}
