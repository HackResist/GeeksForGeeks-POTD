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
        let n = parseInt(readLine());
        let array = new Array(n);
        let mp = new Map();
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0; i<n; i++){
            array[i] = input_ar1[i];
            mp.set(array[i], 0);
        }
        for(let i=0; i<n; i++){
            mp.set(array[i], mp.get(array[i]) + 1);
        }
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let a = input_ar2[0];
        let b = input_ar2[1];
        
        let original = array;
        let k1=0, k2=0, k3=0, kk1=0, kk2=0, kk3=0;
        for(let i=0; i<n; i++){
            if(original[i]>b)
                k3++;
            else if(original[i]<=b && original[i]>=a)
                k2++;
            else if(original[i]<b)
                k1++;
        }
        
        let obj = new Solution();
        obj.threeWayPartition(array, a, b);
        
        for(let i=0; i<k1; i++){
            if(array[i]<b)
                kk1++;
        }
        for(let i=k1; i<k1+k2; i++){
            if(array[i]<=b && array[i]>=a)
                kk2++;
        }
        for(let i=k1+k2; i<k1+k2+k3; i++){
            if(array[i]>b)
                kk3++;
        }
        let ok = 0;
        if(k1==kk1 && k2 ==kk2 && k3 == kk3)
            ok = 1;
        for(let i=0; i<array.length; i++)
            mp.set(array[i], mp.get(array[i]) - 1);
        for(let i=0; i<array.length; i++)
            if(mp.get(array[i]) !== 0)
                ok = 0;
        if(ok)
            console.log("1");
        else
            console.log("0");
        
    }
}
// } Driver Code Ends




//User function Template for javascript

/**
 * @param {number[]} array
 * @param {number} a
 * @param {number} b
*/
//Your Code Start
class Solution {
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    threeWayPartition(array, a, b)
    {
        let low = 0; // Pointer for elements less than a
        let high = array.length - 1; // Pointer for elements greater than b
        let i = 0; // Pointer for elements between a and b

        // Traverse the array
        while (i <= high) {
            if (array[i] < a) {
                // If the current element is less than a, swap it with the element at the low index
                [array[i], array[low]] = [array[low], array[i]];
                low++; // Move the low pointer to the right
                i++; // Move to the next element
            } else if (array[i] > b) {
                // If the current element is greater than b, swap it with the element at the high index
                [array[i], array[high]] = [array[high], array[i]];
                high--; // Move the high pointer to the left
                // Don't increment i, as we need to recheck the swapped element
            } else {
                // If the current element is between a and b, just move to the next element
                i++;
            }
        }
    }
}
//Your Code End
