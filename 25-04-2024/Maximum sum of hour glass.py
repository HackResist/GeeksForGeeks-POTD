#User function Template for python3
#Your Code Start
class Solution:
    def findMaxSum(self,n,m,mat):
        cons = 3
        if m < cons or n < cons:
            return -1
        fix = -1
        for a in range(n - 2):
            for b in range(m - 2):
                maxi = mat[a][b] + mat[a][b + 1] + mat[a][b + 2] + \
                       mat[a + 1][b + 1] + \
                       mat[a + 2][b] + mat[a + 2][b + 1] + mat[a + 2][b + 2]
                fix = max(fix, maxi)
        return fix
        #Your Code End


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
      
if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N,M=map(int,input().strip().split(" "))
        Mat=[]
        for i in range(N):
            B=list(map(int,input().strip().split(" ")))
            Mat.append(B)
        ob=Solution()
        ans=ob.findMaxSum(N,M,Mat)
        print(ans) 
# } Driver Code Ends
