#User function Template for python3

class Solution:
    def sumMatrix(self, n, q):
      #Your Code Start
        if q == 1 or q > 2 * n:
            return 0
        
        mid_cnt = n
        mid_element = n + 1
        ans = 0
        
        if q >= mid_element:
            ans = mid_cnt - q + mid_element
        else:
            ans = mid_cnt - mid_element + q
        
        return ans
#Your Code End


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n, q = map(int, input().split())

        ob = Solution()
        print(ob.sumMatrix(n, q))

# } Driver Code Ends
