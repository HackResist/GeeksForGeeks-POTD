//{ Driver Code Starts
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>


// } Driver Code Ends
// User function Template for C


//Your Code Start
int comp(const void *a, const void *b) {
    return (*(int *)a) - (*(int *)b);
}
bool cancowplace(int *stalls, int n, int k, int dist) {
    int count = 1; 
    int last = stalls[0]; 

    for (int i = 1; i < n; i++) {
        if (stalls[i] - last >= dist) {
            count++;
            last = stalls[i]; 
        }
        if (count >= k) {
            return true; 
        }
    }
    return false;
}
int aggressiveCows(int *stalls, int n, int k) {
  
    qsort(stalls, n, sizeof(int), comp);
    int l = 1,h = stalls[n - 1] - stalls[0],res = 0;
    while (l <= h) {
        int mid = l + (h - l) / 2;
        if (cancowplace(stalls, n, k, mid)) {
            res = mid; 
            l = mid + 1;
        } else {
            h = mid - 1; 
        }
    }

    return res;
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

        printf("%d\n", aggressiveCows(a, n, k));
        printf("%s\n", "~");

        // Free allocated memory
        free(a);
    }

    return 0;
}

// } Driver Code Ends
