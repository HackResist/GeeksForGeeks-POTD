//{ Driver Code Starts
#include <stdio.h>
#include <stdlib.h>


// } Driver Code Ends
// User function Template for C
// Print the answer in one line with each element space separated.
// Don't print any new lines after printing the answer line
// r -> number of rows
// c -> number of columns

//Your Code Start
void spirallyTraverse(int** mat, int r, int c) {
    int startRow = 0, startCol = 0, endRow = r - 1, endCol = c - 1, total = r * c, cnt = 0;
    while (cnt < total) {
        for (int i = startCol; i <= endCol && cnt < total; i++) {
            printf("%d ", mat[startRow][i]);
            cnt++;
        }
        startRow++;
        for (int i = startRow; i <= endRow && cnt < total; i++) {
            printf("%d ", mat[i][endCol]);
            cnt++;
        }
        endCol--;
        for (int i = endCol; i >= startCol && cnt < total; i--) {
            printf("%d ", mat[endRow][i]);
            cnt++;
        }
        endRow--;
        for (int i = endRow; i >= startRow && cnt < total; i--) {
            printf("%d ", mat[i][startCol]);
            cnt++;
        }
        startCol++;
    }
    printf("\n");
}
//Your Code Start


//{ Driver Code Starts.

int main() {
    int t;
    scanf("%d", &t); // Read number of test cases

    while (t--) {
        int r, c;
        scanf("%d", &r); // Read matrix dimensions
        scanf("%d", &c);

        // Dynamically allocate memory for the matrix
        int** matrix = (int**)malloc(r * sizeof(int*));
        for (int i = 0; i < r; i++) {
            matrix[i] = (int*)malloc(c * sizeof(int));
        }

        // Read matrix elements
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                scanf("%d", &matrix[i][j]);
            }
        }

        // Perform spiral traversal
        spirallyTraverse(matrix, r, c);
        printf("%s\n", "~");

        // Free dynamically allocated memory
        for (int i = 0; i < r; i++) {
            free(matrix[i]);
        }
        free(matrix);
    }

    return 0;
}

// } Driver Code Ends
