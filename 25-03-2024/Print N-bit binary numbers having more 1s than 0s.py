#User function Template for python3
class Solution:
#Your Code Start
    def NBitBinary(self, n):
        result = []

        # Helper function to generate numbers recursively
        def generate(prefix, ones, zeros):
            if len(prefix) == n:
                result.append(prefix)
                return

            # If we can add more ones, do so
            if ones < n:
                generate(prefix + '1', ones + 1, zeros)

            # If we have more ones than zeros, we can add zeros
            if ones > zeros:
                generate(prefix + '0', ones, zeros + 1)

        generate('', 0, 0)

        # Sort the result in decreasing order
        result.sort(reverse=True)

        return result
        #Your Code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		ob = Solution()	
		answer = ob.NBitBinary(n)
		for value in answer:
			print(value,end=" ")
		print()


# } Driver Code Ends
