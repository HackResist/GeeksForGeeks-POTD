#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3

class Solution:
    def findMaxProduct(self, arr):
    #Your Code Start
        size = len(arr)
        if size == 1:
            return arr[0]

        mod = 1000000007
        z = False
        mProd = 1
        n = float('-inf')
        negative_count = 0

        for num in arr:
            if num == 0:
                z = True
            elif num > 0:
                mProd = (mProd * num) % mod
            else:
                mProd = (mProd * num) % mod
                n = max(n, num)
                negative_count += 1

        if negative_count % 2 != 0:
            # If the product is negative, divide by the maximum negative number
            if n != float('-inf'):
                mProd = (mProd * pow(n, mod - 2, mod)) % mod

        if mProd < 0:
            mProd += mod

        if mProd == 1 and z:
            return 0

        return mProd % mod
        #Your Code End


#{ 
 # Driver Code Starts.
if __name__ == "__main__":
    import sys
    input = sys.stdin.read
    data = input().split()

    index = 0
    t = int(data[index])
    index += 1
    results = []
    
    for _ in range(t):
        n = int(data[index])
        index += 1
        arr = list(map(int, data[index:index + n]))
        index += n
        solution = Solution()
        ans = solution.findMaxProduct(arr)
        results.append(ans)
    
    for result in results:
        print(result)
# } Driver Code Ends
