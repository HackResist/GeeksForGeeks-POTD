#User function Template for python3

class Solution:
    # Function to find the sum of all possible substrings of the given string.
    def sumSubstrings(self, s):
        #Your Code Start
        mod = 1000000007
        ans = 0
        temp = 0
        n = len(s)

        for i in range(n):
            # Convert character to integer and calculate the contribution
            # of the digit to the total sum.
            temp = (temp * 10 + (i + 1) * int(s[i])) % mod
            ans = (ans + temp) % mod

        return ans
      #Your Code End
# code here


#{ 
 # Driver Code Starts
#Initial Template for Python 3
import atexit
import io
import sys

import sys
sys.setrecursionlimit(10**6)

# Contributed by : Nagendra Jha

if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases):
        s = str(input())
        ob=Solution()
        print(ob.sumSubstrings(s))
# } Driver Code Ends
