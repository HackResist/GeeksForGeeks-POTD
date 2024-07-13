#User function Template for python3
from typing import List
#Your Code Start
import heapq

class Solution:
    def shortestPath(self, n: int, m: int, edges: List[List[int]]) -> List[int]:
        adjacency_list = [[] for _ in range(n)]
        for edge in edges:
            adjacency_list[edge[0] - 1].append((edge[1] - 1, edge[2]))
            adjacency_list[edge[1] - 1].append((edge[0] - 1, edge[2]))

        min_heap = [(0, 0)]
        distances = [float('inf')] * n
        distances[0] = 0
        predecessors = [-1] * n
        predecessors[0] = 0

        while min_heap:
            current_distance, current_node = heapq.heappop(min_heap)
            if current_distance > distances[current_node]:
                continue

            for neighbor, weight in adjacency_list[current_node]:
                distance = current_distance + weight
                if distance < distances[neighbor]:
                    distances[neighbor] = distance
                    predecessors[neighbor] = current_node
                    heapq.heappush(min_heap, (distance, neighbor))

        if distances[n - 1] == float('inf'):
            return [-1]

        ans = []
        node = n - 1
        while node != 0:
            ans.append(node + 1)
            node = predecessors[node]
        ans.append(1)
        ans.append(distances[n - 1])
        ans.reverse()

        return ans
        #Your Code End
#{ 
 # Driver Code Starts
from collections import defaultdict


def check(n, path, edges):
    gp = [{} for i in range(n + 1)]
    for u, v, w in edges:
        if v in gp[u]:
            gp[u][v] = min(gp[u][v], w)
        else:
            gp[u][v] = w

        if u in gp[v]:
            gp[v][u] = min(gp[v][u], w)
        else:
            gp[v][u] = w

    s = 0
    for i in range(2, len(path)):
        if path[i] not in gp[path[i - 1]]:
            return False
        s += gp[path[i - 1]][path[i]]

    return s == path[0]


if __name__ == "__main__":
    for _ in range(int(input())):
        n, m = map(int, input().split())
        edges = []
        for i in range(m):
            a, b, w = map(int, input().split())
            edges.append([a, b, w])

        obj = Solution()
        res = obj.shortestPath(n, m, edges)
        if res[0] == -1:
            print(-1)
        else:
            if check(n, res, edges):
                print(res[0])
            else:
                print(-2)

# } Driver Code Ends
