#User function Template for python3
class Solution:
    def insertAtBottom(self, st, x):
      #Your Code Start
        st = st[::-1]
        st.append(x)
        st = st[::-1]
        return st
      #Your Code End


#{ 
 # Driver Code Starts

if __name__ == "__main__":
    for _ in range(int(input())):
        n,x = map(int,input().split())
        stack = list(map(int,input().split()))
        obj = Solution()
        ans = obj.insertAtBottom(stack,x)
        for e in ans:
            print(e,end=" ")
        print()
        
        
        
# } Driver Code Ends
