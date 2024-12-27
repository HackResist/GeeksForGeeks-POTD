#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math


# } Driver Code Ends
#User function Template for python3
#Your Code Starts
class Solution:
    #Complete the below function
    def countPairs(self,arr, target):
        #Your code here
        freq = {}
        count = 0

        for num in arr:
            comp = target - num
            count += freq.get(comp, 0)
            freq[num] = freq.get(num, 0) + 1

        return count
#Your Code Ends

#{ 
 # Driver Code Starts.

def main():
    T = int(input())
    while (T > 0):

        A = [int(x) for x in input().strip().split()]

        k = int(input())
        ob = Solution()
        print(ob.countPairs(A, k))
        print('~')
        T -= 1


if __name__ == "__main__":
    main()

# } Driver Code Ends
