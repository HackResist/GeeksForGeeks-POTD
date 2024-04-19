#User function Template for python3

#Your Code Start
class Solution:
    def findMissing(self,a,b,n,m):
    # code here
        Empty_List=[]
        Empty_set=set()
       
        for i in b:
            Empty_set.add(i)
        
        for i in a:
            if i not in Empty_set:
                Empty_List.append(i)
    
        return Empty_List
      #Your Code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3



t=int(input())
for _ in range(0,t):
   # n=int(input())
    l = list(map(int, input().split()))
    n=l[0]
    m=l[1]
    a = list(map(int,input().split()))
    b = list(map(int, input().split()))
    ob=Solution()
    ans=ob.findMissing(a,b,n,m)
    for each in ans:
        print(each,end=' ')
    print()
# } Driver Code Ends
