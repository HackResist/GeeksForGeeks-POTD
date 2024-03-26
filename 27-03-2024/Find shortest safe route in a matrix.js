//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++){
        const [r, c] = readLine().split(' ').map(x => parseInt(x));

        let mat = [];
        for(let i=0;i<r;i++)
        {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            mat.push(a);
        }
        
        let obj = new Solution();
        let res = obj.findShortestPath(r, c, mat);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
     * @param {number} r
     * @param {number} c
     * @param {number[][]} mat
     * @returns {number}
     */
    findShortestPath(r, c, mat) {
      //Your Code Start
        const delrow = [-1, 0, 1, 0];
        const delcol = [0, 1, 0, -1];
        
        // Create a matrix to mark visited cells and obstacles
        const ans = [];
        for (let i = 0; i < r; i++) {
            ans.push(new Array(c).fill(1));
        }
        
        // Mark obstacles and adjacent cells as unreachable
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (mat[i][j] === 0) {
                    ans[i][j] = 0;
                    for (let k = 0; k < 4; k++) {
                        const nr = delrow[k] + i;
                        const nc = delcol[k] + j;
                        if (nr >= 0 && nr < r && nc >= 0 && nc < c) {
                            ans[nr][nc] = 0;
                        }
                    }
                }
            }
        }
        
        // BFS traversal
        const queue = [];
        for (let i = 0; i < r; i++) {
            if (ans[i][0] === 1) {
                queue.push([i, 0, 1]);
            }
        }
        
        while (queue.length > 0) {
            const [row, col, count] = queue.shift();
            if (col === c - 1) {
                return count;
            }
            for (let i = 0; i < 4; i++) {
                const nr = delrow[i] + row;
                const nc = delcol[i] + col;
                if (nr >= 0 && nr < r && nc >= 0 && nc < c && ans[nr][nc] === 1) {
                    ans[nr][nc] = 0; // Mark as visited
                    queue.push([nr, nc, count + 1]);
                }
            }
        }
        
        return -1; // No path found
 //Your Code End
    }
}
