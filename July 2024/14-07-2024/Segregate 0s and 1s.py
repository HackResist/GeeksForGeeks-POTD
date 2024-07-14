#User function Template for python3

class Solution:
    def segregate0and1(self, arr):
        #Your Code Start
        l = 0
        r = len(arr) - 1
        while l<r:
            while arr[l] == 0 and l < r:
                l += 1
            while arr[r] == 1 and l<r:
                r -= 1
            if l < r:
                arr[l], arr[r] = arr[r], arr[l]
                l += 1
                r -= 1
        #Your Code End

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

        arr = list(map(int, input().strip().split()))

        obj = Solution()
        obj.segregate0and1(arr)

        print(*arr)

# } Driver Code Ends
