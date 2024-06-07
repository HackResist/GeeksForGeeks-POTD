#User function Template for python3

class Solution:
    #Complete this function
    #Function to find the maximum occurred integer in all ranges.
    def maxOccured(self,n, l, r, maxx):
        ##Your code Start
        arr = [0] * (maxx + 2)  # Create an array of size maxx + 2 and initialize to 0

        # Increment start points and decrement points just after end points
        for i in range(n):
            arr[l[i]] += 1
            if r[i] + 1 <= maxx:
                arr[r[i] + 1] -= 1

        # Compute the prefix sum to find the number of active intervals at each point
        maxOccuredValue = 0
        maxOccuredIndex = 0
        currentSum = 0
        for i in range(maxx + 1):
            currentSum += arr[i]
            if currentSum > maxOccuredValue:
                maxOccuredValue = currentSum
                maxOccuredIndex = i

        return maxOccuredIndex
    #Your Code End




#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math

A = [0] * 1000000


def main():

    T = int(input())

    while (T > 0):

        global A
        A = [0] * 1000000

        n = int(input())

        l = [int(x) for x in input().strip().split()]
        r = [int(x) for x in input().strip().split()]

        maxx = max(r)
        ob = Solution()
        print(ob.maxOccured(n, l, r, maxx))

        T -= 1


if __name__ == "__main__":
    main()

# } Driver Code Ends
