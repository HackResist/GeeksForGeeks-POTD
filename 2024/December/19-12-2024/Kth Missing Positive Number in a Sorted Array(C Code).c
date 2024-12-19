//{ Driver Code Starts
#include <limits.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>


// } Driver Code Ends
// User function Template for C


//Your Code Starts
int kthMissing(int* arr, int n, int k) {
    // code here
    int l = 0, h = n - 1, mis;
    while (l <= h) {
        int mid = l + (h - l) / 2;
        mis = arr[mid] - (mid + 1); 
        
        if (mis < k) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
    return l+ k;
}

//Your Code Ends

//{ Driver Code Starts.

int main() {
    int t;
    scanf("%d", &t);
    while (t--) {
        // Dynamically allocate memory for arrays
        int *a = (int *)malloc(1000000 * sizeof(int));
        int n = 0;

        // Read first array
        while (scanf("%d", &a[n]) == 1) {
            n++;
            if (getchar() == '\n')
                break;
        }
        int k;
        scanf("%d\n", &k);

        printf("%d\n", kthMissing(a, n, k));

        // Free allocated memory
        free(a);
    }

    return 0;
}

// } Driver Code Ends
