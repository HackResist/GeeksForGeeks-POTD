#User function Template for python3

#Your Code Start
class Solution:
    def cancowplace(self, stalls, k, dist):
        count = 1
        last = stalls[0] 
        for i in range(1, len(stalls)):
            if stalls[i] - last >= dist:
                count += 1
                last = stalls[i] 
            if count >= k:
                return True
        return False

    def aggressiveCows(self, stalls, k):
        stalls.sort()
        low = 1;high = stalls[-1] - stalls[0];res = 0
        while low <= high:
            mid = low + (high - low) // 2

            if self.cancowplace(stalls, k, mid):
                res = mid
                low = mid + 1 
            else:
                high = mid - 1 

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
        ans = ob.aggressiveCows(A, D)
        print(ans)
        print("~")
# } Driver Code Ends
