#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3

# return 1 in case of True and 0 in case of False
#Your Code Start
def getSequence(a, b, n):
    length = len(a) + len(b)
    arr = [a, b]
    i = 2
    while True:
        summ = int(arr[i-1]) + int(arr[i-2])
        arr.append(str(summ))
        length += len(arr[-1])
        i += 1
        if length >= n:
            break
    if len(arr) == 2:
        return ''
    return ''.join(arr)

def solve(s):
    n = len(s)
    for i in range(n):
        a = s[:i+1]
        for j in range(i+1, n):
            b = s[i+1:j+1]
            x = getSequence(a, b, n)
            if s == x:
                return 1
    return 0
    

class Solution:
    def isAdditiveSequence(self, n):
        return solve(n)
      #Your Code End


#{ 
 # Driver Code Starts.
        
if __name__ == "__main__":
    sol = Solution()
    t = int(input())
    for _ in range(t):
        s = input()
        print(sol.isAdditiveSequence(s))

# } Driver Code Ends
