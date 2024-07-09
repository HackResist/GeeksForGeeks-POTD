#User function Template for python3

# arr    : list of integers denoting the elements of the array
# target : as specified in the problem statement

class Solution:
    def threeSumClosest (self, arr, target):
    # Your Code Start
            # Sort the array
        arr.sort()
        
        n = len(arr)
        close_sum = arr[0] + arr[1] + arr[2]  # Initialize close_sum with the first triplet
        
        # Iterate through the array
        for i in range(n - 2):
            l = i + 1
            r = n - 1
            
            # Use two-pointer technique
            while l < r:
                curr_sum = arr[i] + arr[l] + arr[r]
                
                # If the current sum is exactly equal to the target, return it
                if curr_sum == target:
                    return curr_sum
                
                # Update the close_sum if the current sum is closer to the target
                if abs(curr_sum - target) < abs(close_sum - target):
                    close_sum = curr_sum
                elif abs(curr_sum - target) == abs(close_sum - target) and curr_sum > close_sum:
                    # Prefer the maximum sum if the difference is the same
                    close_sum = curr_sum
                
                # Move the pointers
                if curr_sum < target:
                    l += 1
                else:
                    r -= 1
        
        return close_sum
    #Your Code End


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())

    for _ in range(t):
        A = list(map(int, input().strip().split()))
        k = int(input())
        ob = Solution()
        print(ob.threeSumClosest(A, k))

# } Driver Code Ends
