#User function Template for python3

'''
class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
'''
def compute(head): 
    #Your Code Start
     # Step 1: Concatenate all strings in the linked list into a single string
    combStr = ""
    curr = head
    while curr:
        combStr += curr.data
        curr = curr.next

    # Step 2: Check if the combined string is a palindrome
    l, r = 0, len(combStr) - 1
    while l < r:
        if combStr[l] != combStr[r]:
            return False
        l += 1
        r -= 1

    return True
#Your Code End
    #return True/False


#{ 
 # Driver Code Starts
#Initial Template for Python 3


#contributed by RavinderSinghPB
class Node:

    def __init__(self, data):
        self.data = data
        self.next = None


class Llist:

    def __init__(self):
        self.head = None

    def insert(self, data, tail):
        node = Node(data)

        if not self.head:
            self.head = node
            return node

        tail.next = node
        return node


if __name__ == '__main__':
    t = int(input())
    for tcs in range(t):

        n1 = int(input())
        arr1 = input().split()
        ll1 = Llist()
        tail = None
        for nodeData in arr1:
            tail = ll1.insert(nodeData, tail)

        if compute(ll1.head):
            print('true')
        else:
            print('false')

# } Driver Code Ends
