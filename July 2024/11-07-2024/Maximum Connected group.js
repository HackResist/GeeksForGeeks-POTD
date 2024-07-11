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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let n = parseInt(readLine());

        let grid = [];
        for (let i = 0; i < n; i++) {
            let ar = readLine().trim().split(' ').map((x) => parseFloat(x));
            let a = [];
            for (let j = 0; j < n; j++) a.push(ar[j]);
            grid.push(a);
        }

        let obj = new Solution();
        let res = obj.MaxConnection(n, grid);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number n
    * @param number[][] grid

    * @returns number
    */
    MaxConnection(n, grid) {
        // Your Code Start
                this.n = n;
        this.dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        this.id = new Array(n).fill(null).map(() => new Array(n).fill(-1));
        this.compSize = new Map();
        this.compId = 0;

        // Find all components and their sizes
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < n; ++j) {
                if (grid[i][j] === 1) {
                    let size = this.dfs(grid, i, j);
                    this.compSize.set(this.compId, size);
                    ++this.compId;
                }
            }
        }

        // Initialize maxConn with largest component size
        let maxConn = 0;
        for (let size of this.compSize.values()) {
            maxConn = Math.max(maxConn, size);
        }

        // Check each zero cell
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < n; ++j) {
                if (grid[i][j] === 0) {
                    let seenComponents = new Set();
                    let potentialSize = 1; // count the flipped cell itself
                    for (let dir of this.dirs) {
                        let ni = i + dir[0], nj = j + dir[1];
                        if (this.isValid(ni, nj) && grid[ni][nj] === 2) {
                            let compId = this.id[ni][nj];
                            if (!seenComponents.has(compId)) {
                                seenComponents.add(compId);
                                potentialSize += this.compSize.get(compId);
                            }
                        }
                    }
                    maxConn = Math.max(maxConn, potentialSize);
                }
            }
        }

        return maxConn;
    }

    isValid(x, y) {
        return x >= 0 && x < this.n && y >= 0 && y < this.n;
    }

    dfs(grid, x, y) {
        let size = 1;
        grid[x][y] = 2; // mark as visited
        this.id[x][y] = this.compId;
        for (let dir of this.dirs) {
            let nx = x + dir[0], ny = y + dir[1];
            if (this.isValid(nx, ny) && grid[nx][ny] === 1) {
                size += this.dfs(grid, nx, ny);
            }
        }
        return size;
    //Your Code end
        
    }
    
}
