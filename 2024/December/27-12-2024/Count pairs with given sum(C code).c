//{ Driver Code Starts
#include <limits.h> // For INT_MIN
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_SIZE 200005 // Define the maximum size of the array


// } Driver Code Ends
// User function Template for C
//Your code starts
int countPairs(int arr[], int n, int target) {
    // Code here

    int freq[200001] = {0};
    int count = 0;
    for (int i = 0; i < n; i++) {
        int comp = target - arr[i];
        count += freq[comp + 10000]; 
        freq[arr[i] + 10000]++;     
    }

    return count;
}
//Your Code Ends

//{ Driver Code Starts.

// Driver function
int main() {
    int t;
    scanf("%d", &t); // Read number of test cases
    getchar();       // Consume the newline character after the number of test cases
    char line[MAX_SIZE * 10];
    int arr[MAX_SIZE];
    while (t--) {
        int n = 0; // Reset array size for each test case
        // Read the first line of the test case (array of integers)
        if (fgets(line, sizeof(line), stdin) != NULL) {
            char *token = strtok(line, " ");
            while (token != NULL && *token != '\n') {
                arr[n++] = atoi(token);
                token = strtok(NULL, " ");
            }
        }

        int brr[n];
        for (int i = 0; i < n; i++) {
            brr[i] = arr[i];
        }

        // Read the second line of the test case (integer k) // Read the second line of
        // the test case (integer k)
        int target;
        scanf("%d", &target);
        getchar(); // Consume the newline character after the integer k

        // Call the function with the array and its size
        int result = countPairs(brr, n, target);
        printf("%d\n", result);
        printf("%s\n", "~");
    }
    return 0;
}
// } Driver Code Ends
