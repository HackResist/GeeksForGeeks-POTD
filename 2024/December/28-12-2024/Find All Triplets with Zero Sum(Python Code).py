#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math


# } Driver Code Ends
#User function Template for python3
#Your Code Starts
#Space Complexity: O(n²) 
#Time Complexity: O(n²)
class Solution:
    def findTriplets(self, arr):
        n, result, pair_sum_map = len(arr), set(), {}

        for i in range(n):
            for j in range(i + 1, n):
                pair_sum_map.setdefault(arr[i] + arr[j], []).append((i, j))

        for i in range(n):
            for pair in pair_sum_map.get(-arr[i], []):
                if i not in pair:
                    result.add(tuple(sorted([i, *pair])))

        return [list(triplet) for triplet in sorted(result)]

#Your Code Ends


#{ 
 # Driver Code Starts.

def main():
    T = int(input())
    while (T > 0):

        A = [int(x) for x in input().strip().split()]

        ob = Solution()
        res = ob.findTriplets(A)
        res = sorted(res)
        if len(res) == 0:
            print('[]')
        for i in range(len(res)):
            for j in range(len(res[i])):
                print(res[i][j], end=" ")
            print("")
        print('~')
        T -= 1


if __name__ == "__main__":
    main()

# } Driver Code Ends
