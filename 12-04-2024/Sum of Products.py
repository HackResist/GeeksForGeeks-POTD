#User function Template for python3

class Solution:
    def pairAndSum(self, n, arr):
        #Your Code Start
        val=0

        for i in range(32):
            a=0

            for b in arr:

                if (b&(1<<i)):
                    a=a+1
            val=val+(1<<i)*(a*(a-1)//2)

        return val
        #Your Code End




#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N=int(input())
        Arr=list(map(int,input().strip().split(' ')))
        ob=Solution()
        print(ob.pairAndSum(N,Arr))
# } Driver Code Ends
