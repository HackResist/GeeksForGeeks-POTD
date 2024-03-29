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


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let [V,E] = readLine().trim().split(" ").map((x) => parseInt(x));
        let adj = new Array(V);
        for(let j =0;j < V;j++){
            adj[j] = new Array();
        }

        for(let j = 0;j<E;j++){
            let [u,v] =  readLine().trim().split(" ").map((x) => parseInt(x));
            adj[u].push(v);
            adj[v].push(u);
        }
        let obj = new Solution();
        let res = obj.isEularCircuitExist(V,adj);
        console.log(Number(res));
    }
}
// } Driver Code Ends





//User function Template for javascript

/**
 * @param {number} v
 * @param {number[][]} adj
 * @return {number} 
*/

class Solution {
    isEularCircuitExist(v, adj){
      //Your Code Start
         for (let i = 0; i < v; i++) {
            if (adj[i].length % 2 !== 0) {
                return false;
              //Your Code End
            }
        }
        
        return true;
       //code here
    }
}
