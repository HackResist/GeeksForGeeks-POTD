#User function Template for python3

class Solution:
    def pattern (self, arr):
  #Your Code Start
        n = len(arr)
        
        # Helper function to check if a sequence is a palindrome
        def is_palindrome(seq):
            l, r = 0, len(seq) - 1
            while l < r:
                if seq[l] != seq[r]:
                    return False
                l += 1
                r -= 1
            return True

        # Check each row
        for i in range(n):
            if is_palindrome(arr[i]):
                return str(i) + " R"

        # Check each column
        for j in range(n):
            col = [arr[i][j] for i in range(n)]
            if is_palindrome(col):
                return str(j) + " C"
        
        # Return -1 if no palindromic pattern is found
        return "-1"
        #Your code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    ob = Solution()
    t = int(input())
    for _ in range(t):
        n = int(input())
        arr = list(map(int, input().split()))
        a = list()
        c = 0
        for i in range(0, n):
            X = list()
            for j in range(0, n):
                X.append(arr[c])
                c += 1
            a.append(X)
        ans = ob.pattern(a)
        print(ans)

# } Driver Code Ends
