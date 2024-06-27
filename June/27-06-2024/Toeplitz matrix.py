# You are required to complete this method
# Return True/False or 1/0
def isToeplitz(mat):
  #Your Code Start
    rows = len(mat)
    cols = len(mat[0])
    
    # Check if each element is equal to the element diagonally down-right
    for row in range(rows - 1):
        for col in range(cols - 1):
            if mat[row][col] != mat[row + 1][col + 1]:
                return False
    return True
  #Your Code End

#{ 
 # Driver Code Starts
# Your code goes here
if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        n, m = list(map(int, input().strip().split()))
        arr = list(map(int, input().strip().split()))
        matrix = [[0 for i in range(m)] for j in range(n)]
        k = 0
        for i in range(n):
            for j in range(m):
                matrix[i][j] = arr[k]
                k += 1
        b = isToeplitz(matrix)

        if b == True:
            print("true")
        else:
            print("false")

# } Driver Code Ends
