//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let [n, m] = readLine().trim().split(" ").map((x) => parseInt(x));
        let edges = [];
        for (let i = 0; i < m; i++) {
            let inputLine = readLine().trim().split(" ").map((x) => parseInt(x));
            edges.push(inputLine);
        }
        let d = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findCity(n, m, edges, d);
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for JavaScript
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @returns {number}
*/

class Solution {
    //Function to find the city with the smallest number of neighbors
    findCity(n, m, edges, distanceThreshold) {
        //Your Code Start
        const g = new Map();
        
        for (const [u, v, w] of edges) {
            if (!g.has(u)) g.set(u, []);
            if (!g.has(v)) g.set(v, []);
            g.get(u).push([v, w]);
            g.get(v).push([u, w]);
        }
        
        function dijkstra(n) {
            const costs = new Map([[n, 0]]);
            const q = [[0, n]];
            while (q.length > 0) {
                const [cost0, n0] = q.shift();
                for (const [nbr, c] of g.get(n0) || []) {
                    const cost = cost0 + c;
                    if (cost > distanceThreshold) continue;
                    if (!costs.has(nbr) || costs.get(nbr) > cost) {
                        costs.set(nbr, cost);
                        q.push([cost, nbr]);
                    }
                }
            }
            return costs.size;
        }
        
        let ans = 0;
        let cnt = n;
        for (let k = 0; k < n; k++) {
            const c = dijkstra(k);
            if (c <= cnt) {
                cnt = c;
                ans = k;
            }
        }
        return ans;
 //Your Code End
    }
}
