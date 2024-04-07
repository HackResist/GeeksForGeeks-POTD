#User function Template for python3


#Function to find the maximum possible amount of money we can win.
class Solution:
    def optimalStrategyOfGame(self,n, arr):
        # Your Code Start
        dp = [[0] * n for _ in range(n)]

        for g in range(n):
            for i in range(n - g):
                j = i + g
                if g == 0:
                    dp[i][j] = arr[i]
                elif g == 1:
                    dp[i][j] = max(arr[i], arr[j])
                else:
                    dp[i][j] = max(
                        arr[i] + min(dp[i + 2][j], dp[i + 1][j - 1]),
                        arr[j] + min(dp[i + 1][j - 1], dp[i][j - 2])
                    )

        return dp[0][n - 1]
        #Your Code End




#{ 
 # Driver Code Starts
#Initial Template for Python 3
import atexit
import io
import sys

# Contributed by : Nagendra Jha

if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases):
        n = int(input())
        arr = list(map(int,input().strip().split()))
        ob = Solution()
        print(ob.optimalStrategyOfGame(n,arr))

# } Driver Code Ends
