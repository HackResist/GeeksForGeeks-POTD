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

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n1 = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for (let i = 1; i < n1; i++) {
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }
        let n2 = parseInt(readLine());
        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        let head2 = new Node(input_ar2[0]);
        let tail2 = head2;
        for (let i = 1; i < n2; i++) {
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }
        let obj = new Solution();
        if (obj.areIdentical(head1, head2)) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {boolean}
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
    // Function to check whether two linked lists are identical or not.
    areIdentical(head1, head2) {
    //Your Code Start
              while (head1 != null && head2 != null) {
            if (head1.data != head2.data) {
                return false;
            }
            head1 = head1.next;
            head2 = head2.next;
        }
        return head1 == null && head2 == null;
    }
    //Your Code End
}
