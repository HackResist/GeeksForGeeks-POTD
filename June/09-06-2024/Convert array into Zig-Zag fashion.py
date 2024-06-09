
from typing import List


class Solution:
    def zigZag(self, n : int, arr : List[int]) -> None:
        # Your Code Start
     for i in range(n - 1):
            if i % 2 == 0:
                # Even index: arr[i] should be less than arr[i + 1]
                if arr[i] > arr[i + 1]:
                    # Swap arr[i] and arr[i + 1]
                    arr[i], arr[i + 1] = arr[i + 1], arr[i]
            else:
                # Odd index: arr[i] should be greater than arr[i + 1]
                if arr[i] < arr[i + 1]:
                    # Swap arr[i] and arr[i + 1]
                    arr[i], arr[i + 1] = arr[i + 1], arr[i]

        #Your Code end







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

    def isZigzag(n: int, arr: List[int]) -> bool:
        f = 1

        for i in range(1, n):
            if f:
                if arr[i - 1] > arr[i]:
                    return False
            else:
                if arr[i - 1] < arr[i]:
                    return False
            f = f ^ 1

        return True

    t = int(input())
    for _ in range(t):

        n = int(input())

        arr = IntArray().Input(n)

        obj = Solution()
        obj.zigZag(n, arr)
        check = True
        check = isZigzag(n, arr)

        flag = False
        for i in range(n):
            if arr[i] == i % 2:
                flag = False
            else:
                flag = True
                break

        if not flag:
            print("0")
        else:
            if check:
                print("1")
            else:
                print("0")

# } Driver Code Ends
