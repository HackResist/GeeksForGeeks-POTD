#User function Template for python3
#Your Code Start
class Solution:
    def maximumWeight(self, n, edges, q, queries):
        uf = list(range(n))
        sz = [1]*n
        def find(u):
            if uf[u] != u:
                uf[u] = find(uf[u])
            return uf[u]
            
        edges.sort(key=lambda x: x[2], reverse=True)
        queries = sorted(enumerate(queries), key=lambda x:x[1])
        
        res = [0]*q
        cur = 0
        for ind, x in  queries:
            while edges and edges[-1][2] <= x:
                u, v, _ = edges.pop()
                u, v = find(u-1), find(v-1)
                if u != v:
                    uf[u] = v
                    cur += sz[u]* sz[v]
                    sz[v] += sz[u]
            res[ind] = cur

        return res
  #Your Code End




#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        n = int(input())

        edges = [[0 for j in range(3)] for i in range(n-1)]
        for i in range(n-1):
            input_line = [int(x) for x in input().strip().split()]       
            for j in range (3):
                edges[i][j]=input_line[j]

        q = int(input())
        queries = list(map(int, input().strip().split()))

        ob = Solution()
        ans = ob.maximumWeight(n, edges, q, queries)
        for i in ans:
            print(i,end=" ")
        print()


# } Driver Code Ends
