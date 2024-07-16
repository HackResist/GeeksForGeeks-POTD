#User function Template for python3
class Solution:
	def printString(self, s, ch, count):
    #Your Code Start
        occ = 0
        for index, char in enumerate(s):
            if char == ch:
                occ += 1
                if occ == count:
                    return s[index + 1:]
        
        return ""
    #Your Code End


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        s = input()
        ch = input()[0]
        count = int(input())
        ob = Solution()
        answer = ob.printString(s, ch, count)

        print(answer)

# } Driver Code Ends
