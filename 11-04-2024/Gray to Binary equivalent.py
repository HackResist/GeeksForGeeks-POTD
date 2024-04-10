#User function Template for python3

class Solution:    
    ##Complete this function
    # function to convert a given Gray equivalent n to Binary equivalent.
    def grayToBinary(self,n):
        #Your Code Start
        ans=n
        while n!=0:
            ans=ans^n>>1
            n=n>>1
        return ans
        

        
        ##Your code End





#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math


def main():
    
    T=int(input())
    
    while(T>0):
        
        
        n=int(input())
        ob=Solution()
        print(ob.grayToBinary(n))
        T-=1

if __name__=="__main__":
    main()
# } Driver Code Ends
