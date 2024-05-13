
from typing import List

#Your Code Start
class Solution:
    def isConnected(self, check: int, visited: List[bool], adj: List[List[int]]) -> bool:
        check_list = adj[check][:]
        check_list.append(check)
        check_list.sort()
        
        for i in adj[check]:
            visited[i] = True
            temp = adj[i][:]
            temp.append(i)
            temp.sort()
            if check_list != temp:
                return False
        return True
    
    def findNumberOfGoodComponent(self, e: int, v: int, edges: List[List[int]]) -> int:
        ans = 0
        visited = [False] * (v + 1)
        adj = [[] for _ in range(v + 1)]
        
        for edge in edges:
            start, end = edge
            adj[start].append(end)
            adj[end].append(start)
        
        for i in range(1, v + 1):
            if not visited[i]:
                isConnectedComponent = self.isConnected(i, visited, adj)
                if isConnectedComponent:
                    ans += 1
        
        return ans
#Your Code End

#{ 
 # Driver Code Starts
class IntMatrix:

    def __init__(self) -> None:
        pass

    def Input(self, n, m):
        matrix = []
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix

    def Print(self, arr):
        for i in arr:
            for j in i:
                print(j, end=" ")
            print()


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):

        e = int(input())

        v = int(input())

        edges = IntMatrix().Input(e, 2)

        obj = Solution()
        res = obj.findNumberOfGoodComponent(e, v, edges)

        print(res)

# } Driver Code Ends
