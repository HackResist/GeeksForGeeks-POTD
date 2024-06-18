#User function template for Python

class Solution:
    def rectanglesInCircle(self,r):
   #Your Code Start
                # Initialize count to keep track of valid rectangles
        count = 0
        # Calculate the square of the diameter of the circle (2r)^2 = 4r^2
        diameter_squared = 4 * r * r

        # Iterate over all possible widths (w) from 1 to 2r
        for w in range(1, 2 * r + 1):
            # Iterate over all possible heights (h) from 1 to 2r
            for h in range(1, 2 * r + 1):
                # Check if the rectangle with width w and height h can fit inside the circle
                # This is true if the sum of squares of width and height is less than or equal to the square of the diameter
                if w * w + h * h <= diameter_squared:
                    # Increment the count of valid rectangles
                    count += 1

        # Return the total count of rectangles that can fit inside the circle
        return count
  #Your Code End


#{ 
 # Driver Code Starts
#Initial Template for Python

import math

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        ob = Solution()
        ans = ob.rectanglesInCircle(N)
        print(ans)

# } Driver Code Ends
