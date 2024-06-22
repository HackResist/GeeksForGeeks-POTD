
class Solution:
    def ExtractNumber(self,sentence):
     #Your Code Start
        max_number = -1
        current_number = ''
        
        for char in sentence:
            if char.isdigit():
                current_number += char
            else:
                if current_number and '9' not in current_number:
                    num = int(current_number)
                    if num > max_number:
                        max_number = num
                current_number = ''
        
        # Check the last accumulated number
        if current_number and '9' not in current_number:
            num = int(current_number)
            if num > max_number:
                max_number = num
        
        return max_number
    #Your Code End

#{ 
 # Driver Code Starts
t = int(input())
for _ in range(t):
    S = input()
    ob = Solution()
    ans = ob.ExtractNumber(S)
    print(ans)

# } Driver Code Ends
