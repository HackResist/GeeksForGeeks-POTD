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

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function printlist(head){
    let current = head; 
    let s='';
    while (current !== null)
    {
        s+=current.data+" ";
        current = current.next;
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for(let i=1;i<n;i++){
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }
        let m = parseInt(readLine());
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let head2 = new Node(input_ar2[0]);
        let tail2 = head2;
        for(let i=1;i<m;i++){
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countPairs(head1, head2, x);
        console.log(res);
    }
}


// } Driver Code Ends




//User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
 * @param {number} x
 * @returns {number}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    
    countPairs(head1, head2, x)
    {
      //Your Code Start
         let set = new Set();

        // Traverse the second list and store its elements in a set
        let temp = head2;
        while (temp !== null) {
            set.add(temp.data);
            temp = temp.next;
        }

        let count = 0;

        // Traverse the first list and for each element, check if its complement exists in the set
        temp = head1;
        while (temp !== null) {
            if (set.has(x - temp.data)) {
                count++;
            }
            temp = temp.next;
        }

        return count;
        //your code End
    }
}
