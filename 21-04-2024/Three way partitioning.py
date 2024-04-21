#Your Code Start
class Solution:
    #Function to partition the array around the range such 
    #that array is divided into three parts.
    def threeWayPartition(self, array, a, b):
        low = 0  # Pointer for elements less than a
        high = len(array) - 1  # Pointer for elements greater than b
        i = 0  # Pointer for elements between a and b

        # Traverse the array
        while i <= high:
            if array[i] < a:
                # If the current element is less than a, swap it with the element at the low index
                array[i], array[low] = array[low], array[i]
                low += 1  # Move the low pointer to the right
                i += 1  # Move to the next element
            elif array[i] > b:
                # If the current element is greater than b, swap it with the element at the high index
                array[i], array[high] = array[high], array[i]
                high -= 1  # Move the high pointer to the left
                # Don't increment i, as we need to recheck the swapped element
            else:
                # If the current element is between a and b, just move to the next element
                i += 1
#Your Code End




#{ 
 # Driver Code Starts
#Initial template for Python

from collections import Counter

if __name__=='__main__':
    t = int(input())
    for i in range(t):
        n = int(input())
        array = list(map(int, input().strip().split()))
        original = Counter(array)
        a,b = list(map(int, input().strip().split()))
        ob = Solution()
        ob.threeWayPartition(array, a, b)

        k1 = k2 = k3 = 0
        for e in array:
            if e > a:
                k3+=1
            elif e<=a and e>=b:
                k2+=1
            elif e<a:
                k1+=1

        m1 = m2 = m3 = 0
        for e in range(k1):
            if array[e]<a:
                m1+=1
        for e in range(k1, k1+k2):
            if array[e]<=a and array[e]>=b:
                m2+=1
        for e in range(k1+k2, k1+k2+k3):
            if array[e]>=a:
                m3+=1

        flag = False
        if k1==m1 and k2==m2 and k3==m3:
            flag = True
        for e in range(len(array)):
            original[array[e]]-=1
        for e in range(len(array)):
            if original[array[e]]!=0:
                flag = False
        if flag:
            print(1)
        else:
            print(0)

# } Driver Code Ends
