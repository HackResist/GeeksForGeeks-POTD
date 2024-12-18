#Your Code Starts

class Solution:
    def is_feasible(self, arr, k, max_pages):
        stu = 1 
        currsum = 0

        for pages in arr:
            if pages > max_pages:
                return False 
            if currsum + pages > max_pages:
                stu += 1  
                currsum = pages 
                if stu > k:
                    return False
            else:
                currsum += pages
        return True
    def findPages(self, arr, k):
        n = len(arr)
        if k > n:
            return -1 
        l = max(arr) 
        h = sum(arr)
        res = -1

        while l <= h:
            mid = l + (h - l) // 2
            if self.is_feasible(arr, k, mid):
                res = mid 
                h = mid - 1 
            else:
                l = mid + 1
        return res

#Your Code Ends

#{ 
 # Driver Code Starts
#Initial Template for Python 3
import bisect
#Main
if __name__ == '__main__':
    t = int(input())
    while t:
        t -= 1
        A = [int(x) for x in input().strip().split()]
        nd = [int(x) for x in input().strip().split()]
        D = nd[0]
        ob = Solution()
        ans = ob.findPages(A, D)
        print(ans)
        print("~")

# } Driver Code Ends
