#User function Template for python3

class Solution:
  #Your Code Start
    def gcd(self, a, b):
        while b:
            a, b = b, a % b
        return a

    def count_boundary_points(self, point1, point2):
        x1, y1 = point1
        x2, y2 = point2
        
        if x1 == x2:
            return abs(y2 - y1) - 1
        if y1 == y2:
            return abs(x2 - x1) - 1
        return self.gcd(abs(x2 - x1), abs(y2 - y1)) - 1

    def InternalCount(self, p, q, r):
        boundary_points = (self.count_boundary_points(p, q) +
                           self.count_boundary_points(p, r) +
                           self.count_boundary_points(q, r) + 3)
        
        area_twice = abs(p[0] * (q[1] - r[1]) +
                         q[0] * (r[1] - p[1]) +
                         r[0] * (p[1] - q[1]))
        
        interior_points = (area_twice - boundary_points + 2) // 2
        
        return interior_points

#Your Code End


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
        
if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        p=[0]*2
        q=[0]*2
        r=[0]*2
        p[0],p[1],q[0],q[1],r[0],r[1]=map(int,input().strip().split(" "))
        ob=Solution()
        ans=ob.InternalCount(p,q,r);
        print(ans)
# } Driver Code Ends
