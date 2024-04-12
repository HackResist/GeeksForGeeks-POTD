#User function Template for python3

class Solution:
    def reversedBits(self, x):
        #Your Code Start
        ans = 0
        i = 0
        
        while x != 0:
            bit = x & 1
            ans |= bit << (31 - i)
            x >>= 1
            i += 1
        
        # If the original number was negative, set the leftmost bit to 1
        if ans < 0:
            ans = 4294967296 + ans  # 4294967296 = 2^32
        
        return ans
        #Your Code End
        


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        X=int(input())
        
        ob = Solution()
        print(ob.reversedBits(X))
# } Driver Code Ends
