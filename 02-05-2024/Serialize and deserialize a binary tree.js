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
        this.left = null;
        this.right = null;
    }
}

function buildTree(str){
   // Corner Case
   if(str.length === 0 || str[0] === "N")
       return null;

   // Create the root of the tree
   let root = new Node(parseInt(str[0]));

   // Push the root to the queue
   let queue = [];
   let start = 0;
   queue.push(root);

   // Starting from the second element
   let i = 1;
   while(queue.length !== start && i < str.length) {

       // Get and remove the front of the queue
       let currNode = queue[start];
       start++;

       // Get the current node's value from the string
       let currVal = str[i];

       // If the left child is not null
       if(currVal !== "N") {

           // Create the left child for the current node
           currNode.left = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.left);
       }

       // For the right child
       i++;
       if(i >= str.length)
           break;
       currVal = str[i];

       // If the right child is not null
       if(currVal !== "N") {

           // Create the right child for the current node
           currNode.right = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.right);
       }
       i++;
   }

   return root;
}

function inorderUtil(root, res){
    if (root === null)
        return;
    inorderUtil(root.left, res);
    res.push(root.data);
    inorderUtil(root.right, res);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let serial = new Solution();
        let deserial = new Solution();
        let A = serial.serialize(root);
        root = null;
        let getRoot = deserial.deSerialize(A);
        let res = [];
        inorderUtil(getRoot, res);
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] +" ";
        }
        console.log(s);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
//Your Code Start
class Solution {
    constructor() {
        this.index = 0;
    }

    // Function to serialize a tree and return a list containing nodes of tree.
    serialize(root) {
        const serialized = [];
        this.serializeUtil(root, serialized);
        return serialized;
    }

    // Utility function to serialize the tree
    serializeUtil(root, serialized) {
        if (root === null) {
            serialized.push(null); // Append null for null nodes
        } else {
            serialized.push(root.data);
            this.serializeUtil(root.left, serialized);
            this.serializeUtil(root.right, serialized);
        }
    }

    // Function to deserialize a list and construct the tree.
    deSerialize(A) {
        return this.kewl(A);
    }

    // Utility function to construct the tree.
    kewl(A) {
        if (this.index === A.length || A[this.index] === null) {
            this.index++; // Move index to next element
            return null;
        }

        const root = new Node(A[this.index++]); // Create node with current value

        root.left = this.kewl(A); // Deserialize left subtree
        root.right = this.kewl(A); // Deserialize right subtree

        return root;
    }
}
//Your Code End
