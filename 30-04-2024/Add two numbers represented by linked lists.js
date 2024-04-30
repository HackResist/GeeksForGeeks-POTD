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
        let num1 = new Node(input_ar1[0]);
        let tail1 = num1;
        for(let i=1;i<n;i++){
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }
        
        let m = parseInt(readLine());
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let num2 = new Node(input_ar2[0]);
        let tail2 = num2;
        for(let i=1;i<m;i++){
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }
        
        let obj = new Solution();
        let res = obj.addTwoLists(num1, num2);
        printlist(res);
    }
}
// } Driver Code Ends




//User function Template for javascript

/**
 * @param {Node} first
 * @param {Node} second
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/
//Your Code Start
class Solution {
    //Function to add two numbers represented by linked list.
    addTwoLists(num1, num2)
    {
        const reverse = (head) => {
            let prev = null;
            let curr = head;
            while (curr) {
                let nextNode = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextNode;
            }
            return prev;
        };

        num1 = reverse(num1);
        num2 = reverse(num2);
        let result = null;
        let temp = null;
        let carry = 0;
        while (num1 || num2 || carry) {
            let sumVal = carry;
            if (num1) {
                sumVal += num1.data;
                num1 = num1.next;
            }
            if (num2) {
                sumVal += num2.data;
                num2 = num2.next;
            }
            carry = Math.floor(sumVal / 10);
            sumVal = sumVal % 10;
            let newNode = new Node(sumVal);
            if (!result) {
                result = newNode;
            } else {
                temp.next = newNode;
            }
            temp = newNode;
        }
        if (carry > 0) {
            temp.next = new Node(carry);
        }
        result = reverse(result);
        while (result && result.data === 0 && result.next) {
            result = result.next;
        }
        return result;
    }
}
//Your Code End
