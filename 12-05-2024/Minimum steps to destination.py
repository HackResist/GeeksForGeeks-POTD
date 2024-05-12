#User function Template for python3

class Solution:
    def minSteps(self, d):
        # code here
        addition = 1
        element = 0
        count = 0
        while element < d:
            element += addition
            addition += 1
            count += 1
        while (element - d) % 2 != 0:
            count += 1
            element += addition
            addition += 1
        return count




#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        d = int(input())

        ob = Solution()
        print(ob.minSteps(d))

# } Driver Code Ends
