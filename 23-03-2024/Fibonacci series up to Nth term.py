#User function Template for python3

class Solution:
    def series(self, n):
        # Your Code Start
        val = [0,1]
        for i in range(2,n+1):
            x = val[-1]+val[-2]
            val.append(x%(10**9+7))
        return val
    #Your Code End



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        ob = Solution()
        result = ob.series(N)
        print(*result)
# } Driver Code Ends
