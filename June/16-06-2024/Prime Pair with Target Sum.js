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

        let obj = new Solution();
        let res = obj.getPrimes(n);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    }
}

// } Driver Code Ends


//Your code Start
class Solution {
    /**
     * Function to check if a number is prime
     * @param {number} number
     * @returns {boolean}
     */
    isPrime(number) {
        if (number <= 1) return false;
        if (number <= 3) return true;
        if (number % 2 === 0 || number % 3 === 0) return false;

        // Check for factors from 5 to the square root of the number
        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
        }
        return true;
    }

    /**
     * Function to find two prime numbers that sum up to n
     * @param {number} n
     * @returns {number[]}
     */
    getPrimes(n) {
        // Iterate through potential first prime numbers
        for (let firstPrime = 2; firstPrime <= n / 2; firstPrime++) {
            let secondPrime = n - firstPrime;

            // Check if both numbers are prime
            if (this.isPrime(firstPrime) && this.isPrime(secondPrime)) {
                return [firstPrime, secondPrime];
            }
        }

        // If no such pair is found, return [-1, -1]
        return [-1, -1];
      //Your Code End
    }
}
