from typing import List


#Your Code Start
class Solution:
    
    # Function to minimize the difference between maximum and minimum element in subarrays of length k.
    def minimizeDifference(self, length: int, k: int, array: List[int]) -> int:
        
        # List to store the maximum element of subarrays starting from i to end.
        post_max = [0] * length
        
        # List to store the minimum element of subarrays starting from i to end.
        post_min = [0] * length

        # Initializing the last elements of post_max and post_min.
        post_min[-1] = array[-1]
        post_max[-1] = array[-1]

        # Iterating backwards to calculate post_max and post_min.
        for i in range(length - 2, -1, -1):
            post_max[i] = max(array[i], post_max[i + 1])
            post_min[i] = min(array[i], post_min[i + 1])

        # Calculating initial difference by removing the first subarray of length k.
        min_diff = post_max[k] - post_min[k]

        # Initializing variables for storing current min and max values.
        p_min = array[0]
        p_max = array[0]

        # Iterating to find the minimum difference.
        for i in range(1, length - k):
            curr_min = max(p_max, post_max[i + k]) - min(p_min, post_min[i + k])
            min_diff = min(min_diff, curr_min)
            p_max = max(array[i], p_max)
            p_min = min(array[i], p_min)
        
        # Calculating difference by removing the last subarray of length k.
        min_diff = min(min_diff, p_max - p_min)

        # Returning the minimum difference.
        return min_diff     
#Your Code End


#{ 
 # Driver Code Starts

class IntArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=[int(i) for i in input().strip().split()]#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
        print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n = int(input())
        
        
        k = int(input())
        
        
        arr=IntArray().Input(n)
        
        obj = Solution()
        res = obj.minimizeDifference(n, k, arr)
        
        print(res)
        

# } Driver Code Ends
