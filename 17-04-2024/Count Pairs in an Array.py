#User function Template for python3
#Your Code Start
class Solution:
    @staticmethod
    def countPairs(arr, n):
        if n <= 2:
            return 0
        res = []
        mp = {}
        count = 0
        for i in range(n):
            res.append(i * arr[i])
        dup = res[:]
        dup.sort()

        for i in range(n):
            index = dup.index(res[i])
            if res[i] == 0:
                dup.pop(index)
                continue
            dup.pop(index)
            count += index
        return count
        #Your Code End

#{ 
 # Driver Code Starts
#Initial Template for Python 3

def main():

    T = int(input())

    while(T > 0):
        n = int(input())
        a = [int(x) for x in input().strip().split()]
        ob= Solution()
        print(ob.countPairs(a, n))

        T -= 1


if __name__ == "__main__":
    main()
    
# } Driver Code Ends
