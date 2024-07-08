#User function Template for python3

class Solution:
    def search(self,arr,key):
        # Your Code Start
        n = len(arr)
        l, r = 0, n - 1
        
        while l <= r:
            m = l + (r - l) // 2
            
            if arr[m] == key:
                return m
            
            # Left half is sorted
            if arr[l] <= arr[m]:
                if key >= arr[l] and key < arr[m]:
                    r = m - 1
                else:
                    l = m + 1
            # Right half is sorted
            else:
                if key > arr[m] and key <= arr[r]:
                    l = m + 1
                else:
                    r = m - 1
        
        return -1  # Key not found
        # Your Code End
        


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())

    for _ in range(t):
        A = list(map(int, input().strip().split()))
        k = int(input())
        ob = Solution()
        print(ob.search(A, k))

# } Driver Code Ends
