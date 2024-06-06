#User function Template for python3

def max_sum(a,n):
    #Your Code Start
    total_sum = sum(a)
    current_sum = sum(i * a[i] for i in range(n))
    
    maximum_sum = current_sum
    for i in range(n - 1, 0, -1):
        current_sum += total_sum
        product = a[i] * n
        current_sum -= product
        maximum_sum = max(maximum_sum, current_sum)
    
    return maximum_sum
#Your Code End


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        n = int(input())
        arr = list(map(int, input().strip().split()))
        print(max_sum(arr, n))

# } Driver Code Ends
