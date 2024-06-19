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

        let input_p = readLine().split(' ').map(x => parseFloat(x));
        let p = input_p[0];
        let s = input_p[1];

        let obj = new Solution();
        let res = obj.maxVolume(p, s);

        console.log(parseFloat(res).toFixed(2));
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param float p
    * @param float s

    * @returns float
    */
    maxVolume(perimeter, area) {
       //Your Code Start
             // Calculate the length of one side of the base
        let len = (perimeter - Math.sqrt(perimeter * perimeter - 24 * area)) / 12.0;
        
        // Calculate the volume of the cuboid
        let vol = len * len * ((perimeter / 4.0) - 2 * len);
        
        // Round the volume to two decimal places
        return Math.round(vol * 100) / 100;
      //Your Code End
    }
}
