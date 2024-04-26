#User function Template for python3
#Your code Start
class Solution:
    def FindExitPoint(self, n, m, matrix):
        # Define directions: right, down, left, up
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        rows = len(matrix)  # Number of rows
        columns = len(matrix[0])  # Number of columns

        i, j = 0, 0
        count = 0

        while i < rows and j < columns and i >= 0 and j >= 0:
            if matrix[i][j] != 1:
                if count % 4 == 0:
                    j += 1
                elif count % 4 == 1:
                    i += 1
                elif count % 4 == 2:
                    j -= 1
                else:
                    i -= 1
            else:
                count += 1
                matrix[i][j] = 0

        if count % 4 == 0:
            j -= 1
        elif count % 4 == 1:
            i -= 1
        elif count % 4 == 2:
            j += 1
        else:
            i += 1

        return [i, j]
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
        ans = ob.FindExitPoint(n, m, matrix)
        for _ in ans:
            print(_, end=" ")
        print()

# } Driver Code Ends
