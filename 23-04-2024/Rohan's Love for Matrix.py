#User function Template for python3
#Your Code Start
class Solution:
    def multiply(self, a, b):
        mod = 1000000007
        res = [[0, 0], [0, 0]]
        for i in range(2):
            for j in range(2):
                for k in range(2):
                    res[i][j] += a[i][k] * b[k][j]
                    res[i][j] %= mod
        return res
    
    def power(self, a, n):
        if n == 1:
            return a
        if n % 2 == 0:
            half = self.power(a, n // 2)
            return self.multiply(half, half)
        else:
            half = self.power(a, n // 2)
            return self.multiply(self.multiply(half, half), a)
    
    def firstElement(self, n):
        mod = 1000000007
        base_matrix = [[1, 1], [1, 0]]
        powered_matrix = self.power(base_matrix, n)
        return powered_matrix[1][0] % mod
#Your Code End




#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n = int(input())
        
        ob = Solution()
        print(ob.firstElement(n))
# } Driver Code Ends
