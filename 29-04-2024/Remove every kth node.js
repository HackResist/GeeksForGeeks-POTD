//{ Driver Code Starts
//Initial Template for javascript

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

class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}

function printList(head){
  let s = "";
  while(head){
    s+=head.data;
    s+=" ";
    head = head.next;
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine().trim().split(" ").map((x) => parseInt(x));
    let k = parseInt(readLine());
    let head = new Node(arr[0]);
    let tail = head;
    for(let j = 1;j<n;j++){
      tail.next = new Node(arr[j]);
      tail = tail.next;
    }
    let obj = new Solution();
    let res = obj.deleteK(head,k);
    printList(res);
  } 

}
// } Driver Code Ends


//User function Template for javascript

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
 * @param {number} k
 * @return {Node}
*/

class Solution {
  deleteK(head,k){
    //Your Code Start
       if (k === 1) { // If k is 1, every node needs to be deleted, so return null
      return null;
    }

    let dummy = new Node(0); // Create a dummy node to handle edge case when head needs to be deleted
    dummy.next = head;
    let prev = dummy;
    let current = head;
    let count = 0;

    while (current !== null) {
      count++;

      if (count % k === 0) { // If count is a multiple of k, delete the current node
        prev.next = current.next;
      } else {
        prev = current;
      }

      current = current.next;
    }

    return dummy.next;
    //Your Code End
  }
}
