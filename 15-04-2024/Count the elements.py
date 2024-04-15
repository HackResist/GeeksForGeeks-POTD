#User function Template for python3
class Solution:
    def countElements(self, a, b, n, query, q):
      #Your Code Start
        # Sort the list b
        b.sort()
        
        ans = []
        
        # Iterate through each query
        for it in query:
            # Use binary search to find the number of elements <= query value
            count = self.upperBound(b, a[it])
            ans.append(count)
        
        return ans
    
    # Custom implementation of upperBound
    def upperBound(self, arr, key):
        low = 0
        high = len(arr)
        
        while low < high:
            mid = low + (high - low) // 2
            
            if arr[mid] <= key:
                low = mid + 1
            else:
                high = mid
        
        return low
        # Your Code End
        





#{ 
 # Driver Code Starts
#Initial Template for Python 3

t = int(input())
for _ in range(0, t):
    n = int(input())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))
    q = int(input())
    query = []
    ob = Solution()
    for i in range(q):
        query.append(int(input()))
    ans = ob.countElements(a, b, n, query, q)
    for i in range(q):
        print(ans[i])

# } Driver Code Ends
