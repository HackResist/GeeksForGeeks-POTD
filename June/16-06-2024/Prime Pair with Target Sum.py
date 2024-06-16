
from typing import List
# Your Code Start
import math

class Solution:
    # Function to check if a number is prime
    def isPrime(self, number: int) -> bool:
        if number <= 1:
            return False
        for divisor in range(2, int(math.sqrt(number)) + 1):
            if number % divisor == 0:
                return False
        return True

    # Function to find two prime numbers that sum up to n
    def getPrimes(self, n: int) -> List[int]:
        # Iterate through potential first prime numbers
        for firstPrime in range(2, n // 2 + 1):
            secondPrime = n - firstPrime

            # Check if both numbers are prime
            if self.isPrime(firstPrime) and self.isPrime(secondPrime):
                return [firstPrime, secondPrime]

        # If no such pair is found, return [-1, -1]
        return [-1, -1]
     
#Your Code End


#{ 
 # Driver Code Starts
class IntArray:

    def __init__(self) -> None:
        pass

    def Input(self, n):
        arr = [int(i) for i in input().strip().split()]  #array input
        return arr

    def Print(self, arr):
        for i in arr:
            print(i, end=" ")
        print()


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):

        n = int(input())

        obj = Solution()
        res = obj.getPrimes(n)

        IntArray().Print(res)

# } Driver Code Ends
