#Your Code Starts
class Solution:
    # Function to return a list of integers denoting spiral traversal of matrix.
    def spirallyTraverse(self, mat):
        # code here
        row_0, col_0 = 0, 0
        row_1, col_1 = len(mat) - 1, len(mat[0]) - 1
        res = []
        
        while row_0 <= row_1 and col_0 <= col_1:
            # Traverse right across the top row
            for j in range(col_0, col_1 + 1):
                res.append(mat[row_0][j])
            row_0 += 1
            
            # Traverse down along the right column
            for i in range(row_0, row_1 + 1):
                res.append(mat[i][col_1])
            col_1 -= 1
            
            # Traverse left across the bottom row (if still valid)
            if row_0 <= row_1:
                for j in range(col_1, col_0 - 1, -1):
                    res.append(mat[row_1][j])
                row_1 -= 1
            
            # Traverse up along the left column (if still valid)
            if col_0 <= col_1:
                for i in range(row_1, row_0 - 1, -1):
                    res.append(mat[i][col_0])
                col_0 += 1
        
        return res
        #Your Code Ends

#{ 
 # Driver Code Starts
if __name__ == "__main__":
    import sys
    input = sys.stdin.read
    data = input().split()

    t = int(data[0])
    index = 1
    for _ in range(t):
        r = int(data[index])
        c = int(data[index + 1])
        index += 2
        matrix = []
        for i in range(r):
            row = list(map(int, data[index:index + c]))
            matrix.append(row)
            index += c

        solution = Solution()
        result = solution.spirallyTraverse(matrix)
        print(" ".join(map(str, result)))
        print("~")

# } Driver Code Ends
