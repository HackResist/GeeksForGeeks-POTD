#User function Template for python3

class Solution:
	def findCoverage(self, matrix):
#Your Code Start
  # Initialize the coverage counter to 0
        count = 0
        row  = len(matrix) 
        col = len(matrix[0])
        # Iterate over each row in the matrix
        for i in range(row):
            # Iterate over each column in the current row
            for j in range(col):
                # Check if the current element is 0
                if matrix[i][j] == 0:
                    # Check the cell below the current cell
                    if i + 1 < row and matrix[i + 1][j] == 1:
                        count += 1
                    # Check the cell above the current cell
                    if i - 1 >= 0 and matrix[i - 1][j] == 1:
                        count += 1
                    # Check the cell to the right of the current cell
                    if j + 1 < col and matrix[i][j + 1] == 1:
                        count += 1
                    # Check the cell to the left of the current cell
                    if j - 1 >= 0 and matrix[i][j - 1] == 1:
                        count += 1
        # Return the total count of adjacent 1s for all 0s in the matrix
        return count
#Your Code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        n, m = input().split()
        n = int(n)
        m = int(m)
        matrix = []
        for _ in range(n):
            matrix.append(list(map(int, input().split())))
        ob = Solution()
        ans = ob.findCoverage(matrix)
        print(ans)

# } Driver Code Ends
