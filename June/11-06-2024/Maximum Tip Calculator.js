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

        let x = parseInt(readLine());

        let y = parseInt(readLine());

        let arr = new Array(n);
        let input_a = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_a[i];
        }

        let brr = new Array(n);
        let input_b = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            brr[i] = input_b[i];
        }

        let obj = new Solution();
        let res = obj.maxTip(n, x, y, arr, brr);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number n
    * @param number x
    * @param number y
    * @param number[] a
    * @param number[] b

    * @returns number
    */
    maxTip(n, x, y, arr, brr) {
        // Your Code Start
           let diffList = [];
        for (let i = 0; i < n; i++) {
            diffList.push([Math.abs(arr[i] - brr[i]), i]);
        }
        
        diffList.sort((a, b) => b[0] - a[0]);
        
        let totalTip = 0;
        let countA = 0;
        let countB = 0;
        
        for (let i = 0; i < n; i++) {
            let idx = diffList[i][1];
            if ((arr[idx] > brr[idx] && countA < x) || countB >= y) {
                totalTip += arr[idx];
                countA++;
            } else {
                totalTip += brr[idx];
                countB++;
            }
        }
        
        return totalTip;
      //Your Code End
    }
}
