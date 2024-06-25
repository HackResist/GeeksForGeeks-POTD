class Solution:
    def rotateMatrix(self, k, mat):
       #Your Code Start
        r_no = len(mat)  # Number of rows in the matrix
        c_no = len(mat[0])  # Number of columns in the matrix
        
        # If k is a multiple of c_no, the matrix remains unchanged
        if k % c_no == 0:
            return mat
        
        # Rotate each row individually
        for i in range(r_no):
            v = mat[i][:]  # Copy the current row
            for j in range(c_no):
                # Calculate the new position for each element in the row
                mat[i][(c_no - k % c_no + j) % c_no] = v[j]
        
        return mat
#Your Code  End

#{ 
 # Driver Code Starts
import math

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n, m, k = map(int, input().strip().split(" "))
        mat = []
        for i in range(n):
            mat.append(list(map(int, input().strip().split(" "))))
        ob = Solution()
        ans = ob.rotateMatrix(k, mat)
        for i in range(n):
            for j in range(m):
                print(ans[i][j], end=" ")
            print()

# } Driver Code Ends
