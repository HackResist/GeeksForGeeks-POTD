#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3

class Solution:
    def divisorGame(self, n):
        #Your Code Start
             # Alice will win if `n` is even, as she can always subtract a proper divisor (2) and give Bob an odd number.
        # Bob is left with an odd number and can't make a valid move, so Alice wins.
        # If `n` is odd, Alice has no valid move, so Bob wins.
        return n % 2 == 0
        
        #Your Code End

#{ 
 # Driver Code Starts.


if __name__ == "__main__":
    t = int(input())
    while t > 0:
        n = int(input())

        obj = Solution()
        ans = obj.divisorGame(n)

        if ans:
            print("True")
        else:
            print("False")

        t -= 1
# } Driver Code Ends
