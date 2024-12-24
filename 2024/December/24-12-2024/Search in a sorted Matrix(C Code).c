//{ Driver Code Starts
// Initial Template for C
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>


// } Driver Code Ends
// User function Template for C

//Your Code Starts
bool searchMatrix(int** mat, int n, int m, int x) {
    // code here
     int l = 0, r = n * m - 1;
    while (l <= r) {
        int mid = (l + r) / 2;
        int val = mat[mid / m][mid % m];
        if (val == x) return true;
        if (val < x) l = mid + 1;
        else r = mid - 1;
    }
    return false;
}
//Your Code Ends

//{ Driver Code Starts.

int main() {
    int t;
    scanf("%d", &t);
    while (t--) {
        int n, m;
        scanf("%d %d", &n, &m);

        // Dynamically allocate memory for the matrix
        int** matrix = (int**)malloc(n * sizeof(int*));
        for (int i = 0; i < n; i++) {
            matrix[i] = (int*)malloc(m * sizeof(int));
            for (int j = 0; j < m; j++) {
                scanf("%d", &matrix[i][j]);
            }
        }

        int x;
        scanf("%d", &x);

        if (searchMatrix(matrix, n, m, x)) {
            printf("true\n");
        } else {
            printf("false\n");
        }
        printf("%s\n", "~");

        // Free the allocated memory
        for (int i = 0; i < n; i++) {
            free(matrix[i]);
        }
        free(matrix);
    }

    return 0;
}
// } Driver Code Ends
