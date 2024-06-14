#User function Template for python3

class Solution:
    def armstrongNumber (self, n):
#Your Code Start
            # Convert the number to a string to easily iterate through each digit
        num_str = str(n)
    
    # Number of digits
        num_digits = len(num_str)
    
    # Compute the sum of each digit raised to the power of the number of digits
        sum_of_powers = sum(int(digit) ** num_digits for digit in num_str)
    
    # Check if the sum of powers is equal to the original number
        return "true" if sum_of_powers == n else "false"

#Your Code End



#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n = input()
        n = int(n)
        ob = Solution()
        print(ob.armstrongNumber(n))

# } Driver Code Ends
