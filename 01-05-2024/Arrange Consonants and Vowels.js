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

let a = null;
let b = null;

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine().trim().split(" ");
    let list = new Node(arr[0]);
    let tail = list;
    for(let j = 1;j<n;j++){
      tail.next = new Node(arr[j]);
      tail = tail.next;
    }
    
    let obj = new Solution();
    let res = obj.arrangeCV(list);
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
 * @return {Node}
*/
//your Code Start

class Solution {
  arrangeCV(head) {
    if (!head || !head.next) return head; // If the list is empty or has only one node, return as it is
    
    let vowelHead = null, vowelTail = null;
    let consonantHead = null, consonantTail = null;
    
    let current = head;
    while (current) {
      if ('aeiou'.includes(current.data.toLowerCase())) {
        // If the current node is a vowel
        if (!vowelHead) {
          vowelHead = vowelTail = current;
        } else {
          vowelTail.next = current;
          vowelTail = current;
        }
      } else {
        // If the current node is a consonant
        if (!consonantHead) {
          consonantHead = consonantTail = current;
        } else {
          consonantTail.next = current;
          consonantTail = current;
        }
      }
      current = current.next;
    }
    
    // Connect the vowel list with the consonant list
    if (vowelHead) {
      vowelTail.next = consonantHead;
    }
    
    // Set the next of the last node in consonant list to null
    if (consonantTail) {
      consonantTail.next = null;
    }
    
    // Return the head of the rearranged linked list
    return vowelHead || consonantHead;
  }
}
//Your Code End
