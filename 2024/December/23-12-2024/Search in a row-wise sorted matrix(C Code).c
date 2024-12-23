//{ Driver Code Starts
// Initial Template for C
#include <stdbool.h>
#include <stdio.h>


// } Driver Code Ends
// User function Template for C

// Function to search for an element in a row-wise sorted matrix
//Your Code Starts
bool binarySearch(int* row, int m, int x) {
    int low = 0, high = m - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (row[mid] == x) {
            return true;
        } else if (row[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

bool searchRowMatrix(int** mat, int n, int m, int x) {
    // code here
        for (int i = 0; i < n; i++) {
        if (binarySearch(mat[i], m, x)) {
            return true;
        }
    }
    return false;
}
//Your Code Ends

//{ Driver Code Starts.

int main() {
    int t;
    scanf("%d", &t); // Read number of test cases
    while (t--) {
        int n, m;
        scanf("%d %d", &n, &m); // Read matrix dimensions
        int** matrix = (int**)malloc(n * sizeof(int*));
        for (int i = 0; i < n; i++) {
            matrix[i] = (int*)malloc(m * sizeof(int));
            for (int j = 0; j < m; j++) {
                scanf("%d", &matrix[i][j]); // Read matrix elements
            }
        }

        int x;
        scanf("%d", &x); // Read target value

        if (searchRowMatrix(matrix, n, m, x)) {
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
