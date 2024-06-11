
from typing import List


class Solution:
    def maxTip(self, n : int, x : int, y : int, arr : List[int], brr : List[int]) -> int:
  #Your Code Start
         # Calculate the differences and store them with their indices
        diff_list = []
        for i in range(n):
            diff_list.append((abs(arr[i] - brr[i]), i))
        
        # Sort the differences in descending order
        diff_list.sort(reverse=True, key=lambda x: x[0])
        
        total_tip = 0
        countA = 0
        countB = 0
        
        for diff, idx in diff_list:
            if (arr[idx] > brr[idx] and countA < x) or countB >= y:
                total_tip += arr[idx]
                countA += 1
            else:
                total_tip += brr[idx]
                countB += 1
        
        return total_tip
#your Code End



#{ 
 # Driver Code Starts
class IntArray:

    def __init__(self) -> None:
        pass

    def Input(self, n):
        arr = [int(i) for i in input().strip().split()]  #array input
        return arr

    def Print(self, arr):
        for i in arr:
            print(i, end=" ")
        print()


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):

        n = int(input())

        x = int(input())

        y = int(input())

        arr = IntArray().Input(n)

        brr = IntArray().Input(n)

        obj = Solution()
        res = obj.maxTip(n, x, y, arr, brr)

        print(res)

# } Driver Code Ends
