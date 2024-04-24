#User function Template for python3

class Solution:
    def ways(self, n,m):
      #Your Code Start
        modulo = 10**9 + 7
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        dp[0][0] = 1
        for i in range(n + 1):
            
            for j in range(m + 1):
            
                if i != 0 or j != 0:
                   dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % modulo
        return dp[n][m]
        #Your Code End



#{ 
 # Driver Code Starts
#Initial Template for Python 3

t=int(input())
for _ in range(0,t):
    x,y=list(map(int,input().split()))
    ob = Solution()
    print(ob.ways(x,y))
# } Driver Code Ends
