#User function Template for python3
class Solution:
	def minPoints(self, m, n, points):
	    # Your Code Start
	    dp = [[0] * n for _ in range(m)]

        # Initialize the bottom-right cell
        dp[m - 1][n - 1] = max(1, 1 - points[m - 1][n - 1])

        # Fill the last column
        for i in range(m - 2, -1, -1):
            dp[i][n - 1] = max(1, dp[i + 1][n - 1] - points[i][n - 1])

        # Fill the last row
        for j in range(n - 2, -1, -1):
            dp[m - 1][j] = max(1, dp[m - 1][j + 1] - points[m - 1][j])

        # Fill the rest of the cells starting from the second-to-last row and column
        for i in range(m - 2, -1, -1):
            for j in range(n - 2, -1, -1):
                min_points_required = min(dp[i + 1][j], dp[i][j + 1])
                dp[i][j] = max(1, min_points_required - points[i][j])

        return dp[0][0]
		#Your Code End


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		m,n = input().split()
		m,n = int(m),int(n)
		points = []
		for _ in range(m):
			temp = [int(x) for x in input().split()]
			points.append(temp)
		ob = Solution()
		ans = ob.minPoints(m,n,points)
		print(ans)




# } Driver Code Ends
