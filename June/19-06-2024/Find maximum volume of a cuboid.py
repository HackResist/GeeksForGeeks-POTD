#User function Template for python3

class Solution:
    def maxVolume(self, perimeter, area):
  #Your Code Start
     # Calculate the length of one side of the base
        length = (perimeter - math.sqrt(perimeter * perimeter - 24 * area)) / 12.0
        
        # Calculate the volume of the cuboid
        volume = length * length * ((perimeter / 4.0) - 2 * length)
        
        # Round the volume to two decimal places
        return round(volume, 2)
#Your Code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3
import math
if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        perimeter, area = [int(x) for x in input().split()]

        ob = Solution()
        print('%.2f' % ob.maxVolume(perimeter, area))

# } Driver Code Ends
