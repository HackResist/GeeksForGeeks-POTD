#User function Template for python3
class Solution:
	def getCount(self, n):
	#Your Code Start
		if n == 1:
            return 10  # For n=1, there are 10 single-digit numbers from 0 to 9
        
        # Define the moves from each digit
        moves = {
            0: [0, 8],    # 0 can move to 0, 8
            1: [1, 2, 4], # 1 can move to 1, 2, 4
            2: [1, 2, 3, 5], # 2 can move to 1, 2, 3, 5
            3: [2, 3, 6], # 3 can move to 2, 3, 6
            4: [1, 4, 5, 7], # 4 can move to 1, 4, 5, 7
            5: [2, 4, 5, 6, 8], # 5 can move to 2, 4, 5, 6, 8
            6: [3, 5, 6, 9], # 6 can move to 3, 5, 6, 9
            7: [4, 7, 8], # 7 can move to 4, 7, 8
            8: [0, 5, 7, 8, 9], # 8 can move to 0, 5, 7, 8, 9
            9: [6, 8, 9]  # 9 can move to 6, 8, 9
        }
        
        # DP table
        dp = [[0] * 10 for _ in range(n + 1)]
        
        # Initialize the base case
        for j in range(10):
            dp[1][j] = 1
        
        # Fill the DP table
        for i in range(2, n + 1):
            for j in range(10):
                for move in moves[j]:
                    dp[i][move] += dp[i - 1][j]
        
        # Sum up all the numbers of length n
        result = sum(dp[n][j] for j in range(10))
        
        return result

#Your Code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        n = int(input())
        ob = Solution()
        ans = ob.getCount(n)
        print(ans)

# } Driver Code Ends
