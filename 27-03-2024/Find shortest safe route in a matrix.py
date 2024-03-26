#Your Code Start
from typing import List
from collections import deque

class Solution:
    def __init__(self):
        self.rowNum = [-1, 0, 0, 1]
        self.colNum = [0, -1, 1, 0]
        
    def findShortestPath(self, mat: List[List[int]]) -> int:
        n = len(mat)
        m = len(mat[0])
        
        q = deque()
        
        d = [[float('inf')] * m for _ in range(n)]
        
        def isValid(i, j):
            return 0 <= i < n and 0 <= j < m

        def check(i, j):
            if not isValid(i, j):
                return False
            for k in range(4):
                if isValid(i + self.rowNum[k], j + self.colNum[k]) and mat[i + self.rowNum[k]][j + self.colNum[k]] == 0:
                    return False
            return True
        
        for i in range(n):
            if check(i, m - 1):
                q.append((i, m - 1, 1))
        
        while q:
            x, y, dis = q.popleft()
            if d[x][y] > dis:
                d[x][y] = dis
                for k in range(4):
                    if check(x + self.rowNum[k], y + self.colNum[k]):
                        q.append((x + self.rowNum[k], y + self.colNum[k], dis + 1))
        
        ans = float('inf')
        for i in range(n):
            ans = min(ans, d[i][0])
        
        if ans == float('inf'):
            return -1
        return ans

 #Your Code End


#{ 
 # Driver Code Starts
class IntArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=[int(i) for i in input().strip().split()]#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
        print()



class IntMatrix:
    def __init__(self) -> None:
        pass
    def Input(self,n,m):
        matrix=[]
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix
    def Print(self,arr):
        for i in arr:
            for j in i:
                print(j,end=" ")
            print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        a=IntArray().Input(2)
        
        
        mat=IntMatrix().Input(a[0], a[1])
        
        obj = Solution()
        res = obj.findShortestPath(mat)
        
        print(res)
        

# } Driver Code Ends
