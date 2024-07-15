#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3
class Solution:
    def smallestNumber(self, s, d):
     #Your Code Start
    # If the sum of digits is greater than the maximum possible sum for the given number of digits, return "-1"
        if s > 9 * d:
            return "-1"
        
        # Initialize the result string with spaces of length 'digits'
        result = [' '] * d
        
        # Decrease sum by 1 to handle the most significant digit separately
        s -= 1
        
        # Fill the digits from the least significant to the most significant using a different loop structure
        for pos in range(d - 1, 0, -1):
            # Assign the maximum possible value (either 9 or the remaining sum)
            val = min(9, s)
            result[pos] = str(val)
            s -= val
        
        # Set the most significant digit
        result[0] = str(1 + s)
        
        return ''.join(result)        
    #Your Code End
    

#{ 
 # Driver Code Starts.
# Position this line where user code will be pasted.

import sys
import math
input = sys.stdin.read
data = input().split()

t = int(data[0])
index = 1

for _ in range(t):
    s = int(data[index])
    d = int(data[index + 1])
    index += 2
    ob = Solution()
    print(ob.smallestNumber(s, d))

# } Driver Code Ends
