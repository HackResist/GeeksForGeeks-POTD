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

        let p1 = new Array(2);
        let q1 = new Array(2);
        let input_p1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < 2; i++) {
            p1[i] = input_p1[i];
        }
        for (let i = 2; i < 4; i++) {
            q1[i - 2] = input_p1[i];
        }

        let p2 = new Array(2);
        let q2 = new Array(2);
        let input_p2 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < 2; i++) {
            p2[i] = input_p2[i];
        }
        for (let i = 2; i < 4; i++) {
            q2[i - 2] = input_p2[i];
        }

        let obj = new Solution();
        let res = obj.doIntersect(p1, q1, p2, q2);
        console.log(res);
    }
}

// } Driver Code Ends


//Your Code Start
class Solution {
 // Function to find the orientation of the triplet (p, q, r)
    orientation(p, q, r) {
        let val = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
        if (val == 0) return 0;  // collinear
        return (val > 0) ? 1 : 2; // clockwise or counterclockwise
    }

    // Function to check if point q lies on segment pr
    onSegment(p, q, r) {
        if (q[0] <= Math.max(p[0], r[0]) && q[0] >= Math.min(p[0], r[0]) &&
            q[1] <= Math.max(p[1], r[1]) && q[1] >= Math.min(p[1], r[1]))
            return true;
        return false;
    }

    /**
    * @param number[] p1
    * @param number[] q1
    * @param number[] p2
    * @param number[] q2

    * @returns string
    */
    doIntersect(p1, q1, p2, q2) {
        // Find the four orientations needed for general and special cases
        let o1 = this.orientation(p1, q1, p2);
        let o2 = this.orientation(p1, q1, q2);
        let o3 = this.orientation(p2, q2, p1);
        let o4 = this.orientation(p2, q2, q1);

        // General case
        if (o1 != o2 && o3 != o4)
            return "true";

        // Special Cases
        // p1, q1 and p2 are collinear and p2 lies on segment p1q1
        if (o1 == 0 && this.onSegment(p1, p2, q1)) return "true";

        // p1, q1 and q2 are collinear and q2 lies on segment p1q1
        if (o2 == 0 && this.onSegment(p1, q2, q1)) return "true";

        // p2, q2 and p1 are collinear and p1 lies on segment p2q2
        if (o3 == 0 && this.onSegment(p2, p1, q2)) return "true";

        // p2, q2 and q1 are collinear and q1 lies on segment p2q2
        if (o4 == 0 && this.onSegment(p2, q1, q2)) return "true";

        // If none of the cases
        return "false";
    }
}
//Your code End
