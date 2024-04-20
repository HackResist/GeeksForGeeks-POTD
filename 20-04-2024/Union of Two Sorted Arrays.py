#Your Code Start
class Solution:
    # Function to return a list containing the union of the two arrays.
    def findUnion(self, arr1, arr2, n, m):
        union_list = []
        i = 0
        j = 0
        last_added = None  # Variable to track the last added element
        
        # Traverse both arrays simultaneously
        while i < n and j < m:
            # If the current elements are equal and not equal to the last added element
            if arr1[i] == arr2[j] and arr1[i] != last_added:
                # Add the element to the union list
                union_list.append(arr1[i])
                # Update last added element
                last_added = arr1[i]
                # Move both pointers forward
                i += 1
                j += 1
            # If element in arr1 is smaller
            elif arr1[i] < arr2[j]:
                # If not equal to the last added element
                if arr1[i] != last_added:
                    # Add element from arr1 to union list
                    union_list.append(arr1[i])
                    # Update last added element
                    last_added = arr1[i]
                # Move pointer for arr1 forward
                i += 1
            # If element in arr2 is smaller
            else:
                # If not equal to the last added element
                if arr2[j] != last_added:
                    # Add element from arr2 to union list
                    union_list.append(arr2[j])
                    # Update last added element
                    last_added = arr2[j]
                # Move pointer for arr2 forward
                j += 1
        
        # Add remaining elements of arr1, if any
        while i < n:
            # If not equal to the last added element
            if arr1[i] != last_added:
                union_list.append(arr1[i])
                last_added = arr1[i]
            i += 1
        
        # Add remaining elements of arr2, if any
        while j < m:
            # If not equal to the last added element
            if arr2[j] != last_added:
                union_list.append(arr2[j])
                last_added = arr2[j]
            j += 1
        
        # Return the union list
        return union_list

#Your Code End




#{ 
 # Driver Code Starts
#Initial Template for Python 3

# Contributed by : Nagendra Jha
# Modified by : Sagar Gupta


if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases) :
        n,m = map(int,input().strip().split())
        a = list(map(int,input().strip().split()))
        b = list(map(int,input().strip().split()))
        ob=Solution()
        li = ob.findUnion(a,b,n,m)
        for val in li:
            print(val, end = ' ')
        print()
# } Driver Code Ends
