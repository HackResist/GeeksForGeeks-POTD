#User function Template for python3
#Your Code Stars
class Solution:
	def twoSum(self, arr, target):
		# code here
        seen = set()
        for num in arr:
            comp = target - num
            if comp in seen:
                return True
            seen.add(num)
        return False
#Your Code Ends
#{ 
 # Driver Code Starts
#Initial Template for Python 3

#Initial Template for Python 3


def main():
    T = int(input())
    while T > 0:
        x = int(input())
        arr = list(map(int, input().strip().split()))
        ob = Solution()
        ans = ob.twoSum(arr, x)
        if ans:
            print("true")
        else:
            print("false")
        T -= 1
        print("~")


if __name__ == "__main__":
    main()

# } Driver Code Ends
