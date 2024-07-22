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

class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}

function buildTree(str)
{
	// Corner Case
	if (str.length === 0 || str[0] == 'N')
		return null;

	// Creating vector of strings from input
	// string after spliting by space
	let ip = new Array();
    
    let ip_str = str.split(" ");
    
	for (let i=0;i<ip_str.length;i++)
		ip.push(ip_str[i]);

	// Create the root of the tree
    let root = new Node(parseInt(ip[0]));

	// Push the root to the queue
	let queue = new Array();
	queue.push(root);

	// Starting from the second element
	let i = 1;
	while (queue.length!==0 && i < ip.length) {

		// Get and remove the front of the queue
		let currNode = queue[0];
		queue.shift();

		// Get the current node's value from the string
		let currVal = ip[i];

		// If the left child is not null
		if (currVal != "N") {

			// Create the left child for the current node
			currNode.left = new Node(parseInt(currVal));

			// Push it to the queue
			queue.push(currNode.left);
		}

		// For the right child
		i++;
		if (i >= ip.length)
			break;
		currVal = ip[i];

		// If the right child is not null
		if (currVal != "N") {

			// Create the right child for the current node
			currNode.right = new Node(parseInt(currVal));

			// Push it to the queue
			queue.push(currNode.right);
		}
		i++;
	}

	return root;
}



function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        let obj = new Solution();
       
        let res = obj.largestBst(root);
        console.log(res);
    }
}

// } Driver Code Ends


//User function Template for javascript

/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number}
*/


//Your Code Start
class BST {
    constructor(isBST, size, min, max) {
        this.isBST = isBST;
        this.size = size;
        this.min = min;
        this.max = max;
    }
}

class Solution {
    static subHelp(root, maxSize) {
        if (root === null) {
            return new BST(true, 0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
        }

        let left = Solution.subHelp(root.left, maxSize);
        let right = Solution.subHelp(root.right, maxSize);

        let curr = new BST(false, 0, 0, 0);

        if (left.isBST && right.isBST && root.key > left.max && root.key < right.min) {
            curr.isBST = true;
            curr.size = left.size + 1 + right.size;
            curr.min = Math.min(root.key, left.min);
            curr.max = Math.max(root.key, right.max);
            maxSize[0] = Math.max(maxSize[0], curr.size);
        } else {
            curr.size = Math.max(left.size, right.size);
        }

        return curr;
    }
    
   largestBst(root) {
        let maxSize = [0];
        Solution.subHelp(root, maxSize);
        return maxSize[0];
    }
}
//Your Code End
