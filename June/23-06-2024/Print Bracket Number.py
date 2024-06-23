#User function Template for python3
class Solution:
	def bracketNumbers(self, str):
		# Your Code Start
        res = [None] * len(str)  # Initialize the result list
        stk = []
        count = 0
    
        for i, char in enumerate(str):
            if char == '(':
                count += 1
                stk.append((i, count))
                res[i] = count
            elif char == ')':
                index, num = stk.pop()
                res[i] = num
                res[index] = num
    
        # Filter out None values and return only the numbers
        bracketNum = [num for num in res if num is not None]
        return bracketNum
  #Your Code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        S = input()
        ob = Solution()
        answer = ob.bracketNumbers(S)
        for value in answer:
            print(value, end=" ")
        print()

# } Driver Code Ends
