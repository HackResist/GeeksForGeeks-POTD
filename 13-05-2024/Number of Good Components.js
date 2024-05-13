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

        let e = parseInt(readLine());

        let v = parseInt(readLine());

        let edges = [];
        for (let i = 0; i < e; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            edges.push(a);
        }

        let obj = new Solution();
        let res = obj.findNumberOfGoodComponent(e, v, edges);
        console.log(res);
    }
}

// } Driver Code Ends


//Your Code Start
class Solution {
    /**
    * @param {number} e
    * @param {number} v
    * @param {number[][]} edges
    * @returns {number}
    */
    findNumberOfGoodComponent(e, v, edges) {
        function isConnected(check, visited, adj) {
            const checkList = [...adj[check], check].sort((a, b) => a - b);
            for (const i of adj[check]) {
                visited[i] = true;
                const temp = [...adj[i], i].sort((a, b) => a - b);
                if (checkList.join(',') !== temp.join(',')) return false;
            }
            return true;
        }

        let ans = 0;
        const visited = new Array(v + 1).fill(false);
        const adj = Array.from({ length: v + 1 }, () => []);
        
        for (const [start, end] of edges) {
            adj[start].push(end);
            adj[end].push(start);
        }
        
        for (let i = 1; i <= v; i++) {
            if (!visited[i]) {
                const isConnectedComponent = isConnected(i, visited, adj);
                if (isConnectedComponent) ans++;
            } 
        }
        
        return ans;
    }
}
//Your Code End
