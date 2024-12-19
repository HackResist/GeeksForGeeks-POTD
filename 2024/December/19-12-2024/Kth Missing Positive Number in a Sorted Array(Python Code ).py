#User function Template for python3

#Your Code Starts
class Solution:
    def kthMissing(self, arr, k):
        # code here
        l, h = 0, len(arr) - 1
        while l <= h:
            mid = l + (h - l) // 2
            mis = arr[mid] - (mid + 1)
            
            if mis< k:
                l = mid + 1 
            else:
                h = mid - 1 
        
        return l + k
#your Code Ends


#{ 
 # Driver Code Starts
#Initial Template for Python 3

#Main
if __name__ == '__main__':
    t = int(input())
    while t:
        t -= 1
        A = [int(x) for x in input().strip().split()]
        nd = [int(x) for x in input().strip().split()]
        D = nd[0]
        ob = Solution()
        ans = ob.kthMissing(A, D)
        print(ans)
        print("~")

# } Driver Code Ends
