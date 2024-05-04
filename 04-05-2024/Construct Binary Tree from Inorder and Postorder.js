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

function preOrder(root, res){
    if (root === null)
        return;
    res.push(root.data);
    preOrder(root.left, res);
    preOrder(root.right, res);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let ino = [];
        let post = [];
        for(let i=0; i<n; i++){
            ino.push(input_ar1[i]);
            post.push(input_ar2[i]);
        }
        let obj = new Solution();
        let root = obj.buildTree(ino, post, n); 
        let res = [];
        preOrder(root, res); 
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] +" ";
        }
        console.log(s);
        
    }
}
// } Driver Code Ends




//User function Template for javascript
/**
 * @param {number[]} ino
 * @param {number[]} post
 * @param {number} n
 * @returns {Node}
*/

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
class Solution 
{
    //Function to return a tree created from postorder and inorder traversals.
    buildTree(ino, post, n)
    {
        // Index to keep track of the current element of the postorder traversal array
        let postIndex = [n - 1];

        // Helper function to construct the tree recursively
        const buildTreeUtil = (inStart, inEnd) => {
            // If start index is greater than end index, then no subtree exists.
            if (inStart > inEnd)
                return null;

            // Create a new node with the value at postIndex (last element of postorder).
            const node = new Node(post[postIndex[0]--]);

            // If the node has no children, return it.
            if (inStart === inEnd)
                return node;

            // Find the index of this node in the inorder traversal.
            const inIndex = ino.indexOf(node.data);

            // Recursively build right subtree first because postorder gives us root node last.
            node.right = buildTreeUtil(inIndex + 1, inEnd);

            // Then recursively build left subtree.
            node.left = buildTreeUtil(inStart, inIndex - 1);

            return node;
        };

        // Call the helper function with appropriate parameters
        return buildTreeUtil(0, n - 1);
    }
}
//Your Code End
