#Your Code Start
from collections import defaultdict

class Solution:
    def twoRepeated(self, arr, n):
        freq_map = defaultdict(int)
        result = []

        for i in range(n + 2):
            # If the element is already present in the map, it's repeated.
            if arr[i] in freq_map:
                # If this is the first time we encounter this repeated element,
                # add it to the result.
                if freq_map[arr[i]] == 1:
                    result.append(arr[i])

            # Increment the frequency of the current element.
            freq_map[arr[i]] += 1

        # Iterate through the frequency map to find the elements
        # that are repeated twice.
        for key, value in freq_map.items():
            if value == 2:
                result.append(key)

        return result
#Your Code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math

def main():
        T=int(input())
        while(T>0):
            
            N=int(input())

            A=[int(x) for x in input().strip().split()]
            
            obj = Solution()
            ans = obj.twoRepeated(A,N)
            print(ans[0], ans[1])
            
            T-=1


if __name__ == "__main__":
    main()
# } Driver Code Ends
