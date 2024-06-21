#User function Template for python3


class Solution:
    def compareFrac (self, str):
#Your Code Start
    
      # Regular expression to extract fractions
        fractionRegex = re.compile(r"(-?\d+)\s*/\s*(-?\d+)")
        matches = fractionRegex.findall(str)
        
        # Parse the fractions
        numerators = [int(match[0]) for match in matches]
        denominators = [int(match[1]) for match in matches]
        
        # Extract numerators and denominators
        a, b = numerators[0], denominators[0]
        c, d = numerators[1], denominators[1]
        
        # Cross-multiplication comparison
        lhs = a * d
        rhs = c * b
        
        if lhs > rhs:
            return "{}/{}".format(a, b)
        elif lhs < rhs:
            return "{}/{}".format(c, d)
        else:
            return "equal"
#Your Code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3
import re

if __name__ == '__main__':
    ob = Solution()
    t = int(input())
    for _ in range(t):
        str = input()
        print(ob.compareFrac(str))

# } Driver Code Ends
