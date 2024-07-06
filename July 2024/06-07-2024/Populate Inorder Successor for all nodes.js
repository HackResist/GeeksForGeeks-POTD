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
        this.next = null;
    }
}

function buildTree(str) {
    if (str.length === 0 || str[0] === "N") return null;

    let ip = str.split(" ");

    let root = new Node(parseInt(ip[0]));

    let queue = [];
    queue.push(root);

    let i = 1;
    while (queue.length > 0 && i < ip.length) {
        let currNode = queue.shift();

        let currVal = ip[i];

        if (currVal !== "N") {
            currNode.left = new Node(parseInt(currVal));
            queue.push(currNode.left);
        }

        i++;
        if (i >= ip.length) break;
        currVal = ip[i];

        if (currVal !== "N") {
            currNode.right = new Node(parseInt(currVal));
            queue.push(currNode.right);
        }
        i++;
    }

    return root;
}

function inorder(root) {
    let s = "";

    function inorderUtil(node) {
        if (!node) {
            return;
        }
        inorderUtil(node.left);
        s += node.data + " ";
        inorderUtil(node.right);
    }

    inorderUtil(root);
    console.log(s);
}

function inorderFirstNode(root) {
    if (!root) return null;
    let node = root;
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

function main() {
    let t = parseInt(readLine());
    while (t--) {
        let treeString = readLine();
        let root = buildTree(treeString);
        let solution = new Solution();
        solution.populateNext(root);
        let ptr = inorderFirstNode(root);
        while (ptr) {
            process.stdout.write(ptr.data + "->" + (ptr.next ? ptr.next.data : -1) +
                                 " ");
            ptr = ptr.next;
        }
        console.log();
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
    * @param Node root

    * @returns none
    */
    populateNext(root) {
        //your code Start
        if (root === null) {
            return;
        }

        // Initialize the stack and set the previous node to null
        let stk = [];
        let curr = root;
        let pre = null;

        // Iterate until the stack is empty or the current node is not null
        while (stk.length > 0 || curr !== null) {
            // Reach the leftmost node of the current node
            while (curr !== null) {
                stk.push(curr);
                curr = curr.left;
            }

            // Current must be null at this point, so we pop from the stack
            curr = stk.pop();

            // Process the current node
            if (pre !== null) {
                pre.next = curr;
            }
            pre = curr;

            // Move to the right subtree
            curr = curr.right;
        }

        // The next pointer of the last node should be null
        if (pre !== null) {
            pre.next = null;
        }
        // Your Code End
    }
}
