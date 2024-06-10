#User function Template for python3
class Solution:

    def matchPairs(self, n, nuts, bolts):
        # Your Code Start
        # Define the order of elements
        order = ['!', '#', '$', '%', '&', '*', '?', '@', '^']
        
        # Create a map for the order to index mapping
        order_map = {ch: i for i, ch in enumerate(order)}
        
        # Sort the nuts and bolts arrays according to the defined order
        nuts.sort(key=lambda x: order_map[x])
        bolts.sort(key=lambda x: order_map[x])

#Your Code End



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        n = int(input())
        nuts = list(map(str, input().strip().split()))
        bolts = list(map(str, input().strip().split()))
        ob = Solution()
        ob.matchPairs(n, nuts, bolts)
        for x in nuts:
            print(x, end=" ")
        print()
        for x in bolts:
            print(x, end=" ")
        print()
        tc -= 1

# } Driver Code Ends
