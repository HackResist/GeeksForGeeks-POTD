class Solution:
    def findExtra(self,n,a,b):
        # Your Code Start
        left, right = 0, n - 1
        
        while left < right:
            mid = left + (right - left) // 2
            if a[mid] == b[mid]:
                left = mid + 1
            else:
                right = mid
        
        return left
    #Your Code End




#{ 
 # Driver Code Starts
if __name__ == "__main__":
    t = int(input())
    for i in range(t):
        n = int(input())
        a = list(map(int, input().split()))
        b = list(map(int, input().split()))
        print(Solution().findExtra(n, a, b))

# } Driver Code Ends
