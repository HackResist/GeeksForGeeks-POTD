//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] === "N") return null;

    // Create the root of the tree
    let root = new Node(parseInt(str[0]));

    // Push the root to the queue
    let queue = [];
    let start = 0;
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== start && i < str.length) {

        // Get and remove the front of the queue
        let currNode = queue[start];
        start++;

        // Get the current node's value from the string
        let currVal = str[i];

        // If the left child is not null
        if (currVal !== "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= str.length) break;
        currVal = str[i];

        // If the right child is not null
        if (currVal !== "N") {

            // Create the right child for the current node
            currNode.right = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.right);
        }
        i++;
    }

    return root;
}

// printing binary tree inorder form
function inorder(root) {
    let s = "";

    function inorderUtil(node) {
        if (!node) {
            return;
        }
        inorderUtil(node.left);
        s += node.data;
        s += " ";
        inorderUtil(node.right);
    }

    inorderUtil(root);
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_root1 = readLine().split(' ');
        let root1 = buildTree(input_root1);

        let input_root2 = readLine().split(' ');
        let root2 = buildTree(input_root2);

        let obj = new Solution();
        let res = obj.merge(root1, root2);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    }
}

// } Driver Code Ends


/*

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    /**
    * @param Node root1
    * @param Node root2

    * @returns number[]
    */
    //Your Code Start
    merge(root1, root2) {
        // Step 1: Perform in-order traversal of both trees to get sorted lists
        const list1 = [];
        const list2 = [];
        this.inorder(root1, list1);
        this.inorder(root2, list2);

        // Step 2: Merge the two sorted lists
        return this.mergeLists(list1, list2);
    }

    // Helper function to perform in-order traversal
    inorder(root, result) {
        if (root === null) return;
        this.inorder(root.left, result);
        result.push(root.data);
        this.inorder(root.right, result);
    }

    // Helper function to merge two sorted lists
    mergeLists(list1, list2) {
        const merged = [];
        let i = 0, j = 0;
        while (i < list1.length && j < list2.length) {
            if (list1[i] < list2[j]) {
                merged.push(list1[i]);
                i++;
            } else {
                merged.push(list2[j]);
                j++;
            }
        }
        // Append remaining elements, if any
        while (i < list1.length) {
            merged.push(list1[i]);
            i++;
        }
        while (j < list2.length) {
            merged.push(list2[j]);
            j++;
        }
        return merged;
    }
}
//Your Code End
