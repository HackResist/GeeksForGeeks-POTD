#User function Template for python3
#Your Code Start
class Solution:
    def minRow(self,n,m,a):
        min_index = 0  # Initialize the index of the row with the minimum ones count
        min_count = float('inf')  # Initialize the minimum ones count with a large value
        
        # Iterate over each row
        for i in range(n):
            cnt = 0  # Initialize count for ones in the current row
            
            # Count the number of ones in the current row
            for j in range(m):
                if a[i][j] == 1:
                    cnt += 1
            
            # Update the minimum ones count and corresponding row index if a smaller count is found
            if cnt < min_count:
                min_count = cnt
                min_index = i + 1
        
        # Return the index of the row with the minimum ones count
        return min_index
        #Your Code End





#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
        
if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N,M=map(int,input().strip().split(" "))
        A=[]
        for i in range(N):
            B=list(map(int,input().strip().split(" ")))
            A.append(B)
        ob=Solution()
        print(ob.minRow(N,M,A))
# } Driver Code Ends
