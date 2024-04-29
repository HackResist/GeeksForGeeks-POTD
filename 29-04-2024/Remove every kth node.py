#Your task is to complete this function
#Your function should return the new head pointer
'''
class node:
    def __init__(self,x):
        self.data = x
        self.next = None
'''

class Solution:
    def deleteK(self, head, k):
      #Your Code Start
        if k == 1:  # If k is 1, every node needs to be deleted, so return None
            return None

        dummy = node(0)  # Create a dummy node to handle edge case when head needs to be deleted
        dummy.next = head
        prev = dummy
        current = head
        count = 0

        while current:
            count += 1

            if count % k == 0:  # If count is a multiple of k, delete the current node
                prev.next = current.next
            else:
                prev = current

            current = current.next

        return dummy.next
        #Your Code End


#{ 
 # Driver Code Starts
class node:

    def __init__(self, x):
        self.data = x
        self.next = None


def createLinkedList(arr):
    head = node(arr[0])
    curr = head
    for i in range(1, len(arr)):
        new_node = node(arr[i])
        curr.next = new_node
        curr = curr.next

    return head


def printlist(ptr):
    while ptr != None:
        print(ptr.data, end=" ")
        ptr = ptr.next
    print()


if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        n = int(input())
        arr = list(map(int, input().strip().split()))
        k = int(input())

        obj = Solution()
        head = createLinkedList(arr)
        new_head = obj.deleteK(head, k)
        printlist(new_head)

# } Driver Code Ends
