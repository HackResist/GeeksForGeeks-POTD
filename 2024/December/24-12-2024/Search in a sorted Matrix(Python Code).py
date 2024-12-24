
#User function Template for python3

#Your Code Starts
class Solution:
    
    #Function to search a given number in row-column sorted matrix.
    def searchMatrix(self, mat, x): 
    	# code here 
    	n, m = len(mat), len(mat[0]) 
        i, j = 0, m - 1 
        while i < n and j >= 0:
            if mat[i][j] == x:
                return True 
            elif mat[i][j] > x:
                j -= 1  
            else:
                i += 1  
        return False  
#Your Code Ends



#{ 
 # Driver Code Starts
# Initial Template for Python 3

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
        x = int(data[index])
        index += 1
        ob = Solution()
        if ob.searchMatrix(matrix, x):
            print("true")
        else:
            print("false")
        print("~")
# } Driver Code Ends
