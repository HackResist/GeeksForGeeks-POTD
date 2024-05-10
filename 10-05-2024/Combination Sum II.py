#User function Template for python3

class Solution:
    
    def CombinationSum2(self, arr, n, k):
        # Your Code Start
       # Sort the array to handle duplicates and to efficiently prune the search space
        arr.sort()
        result = []
        self.dfs(arr, 0, [], result, k)
        return result
    
    def dfs(self, arr, start, path, result, target):
        if target == 0:
            result.append(path)
            return
        if target < 0:
            return
        for i in range(start, len(arr)):
            # Avoid duplicates by skipping identical elements
            if i > start and arr[i] == arr[i - 1]:
                continue
            self.dfs(arr, i + 1, path + [arr[i]], result, target - arr[i])
#Your Code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3

for _ in range(int(input())):
    n, k = map(int, input().split())
    arr = list(map(int, input().split()))

    ob = Solution()
    result = ob.CombinationSum2(arr, n, k)
    for row in result:
        print(*row)
    if not result:
        print()

# } Driver Code Ends
