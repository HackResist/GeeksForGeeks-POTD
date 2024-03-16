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

let head = null;

function findNode(head, search_for)
{
    let current = head;
    while (current !== null)
    {
        if (current.data == search_for)
            break;
        current = current.next;
    }
    return current;
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
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for(let i=1;i<n;i++){
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let k = parseInt(readLine());
        let del = findNode(head, k);
        if(del !== null && del.next !== null){
            let obj = new Solution();
            obj.deleteNode(del);
        }
        printlist(head);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} del
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;

*/

//Function to delete a node without any reference to head pointer.
class Solution {
    
    deleteNode(del_node)
    {       //your code start
      // Copy data from the next node to the current node
        del_node.data = del_node.next.data;

        // Point the current node to the node after the next node
        del_node.next = del_node.next.next;
        //your code end
    }
}
