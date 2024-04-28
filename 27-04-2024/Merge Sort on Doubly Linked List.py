#User function Template for python3

'''
class Node:
	def __init__(self, data):
		self.data = data
		self.next = None
		self.prev = None
'''
#Your Code Start
class Solution():
#Function to sort the given doubly linked list using Merge Sort.
 
    def sortDoubly(self, head):
        def mergesort(sta):
            if not sta or not sta.next:
                return sta
            
            # Function to find the midpoint of the list
            def find_mid(start):
                slow = start
                fast = start.next
                while fast and fast.next:
                    slow = slow.next
                    fast = fast.next.next
                return slow
            
            # Function to merge two sorted lists
            def merge(left, right):
                dummy = Node(None)
                cur = dummy
                while left and right:
                    if left.data <= right.data:
                        cur.next = left
                        left.prev = cur
                        left = left.next
                    else:
                        cur.next = right
                        right.prev = cur
                        right = right.next
                    cur = cur.next
                if left:
                    cur.next = left
                    left.prev = cur
                if right:
                    cur.next = right
                    right.prev = cur
                return dummy.next
            
            # Finding the midpoint of the list
            mid = find_mid(sta)
            next_to_mid = mid.next
            mid.next = None
            next_to_mid.prev = None
            
            # Recursively sort both halves
            left = mergesort(sta)
            right = mergesort(next_to_mid)
            
            # Merge the sorted halves
            return merge(left, right)
        
        return mergesort(head)

    #Your code End
    


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import sys

sys.setrecursionlimit(1000000)


class Node:

    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None


class DoublyLinkedList:

    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, new_data):
        new_node = Node(new_data)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return
        new_node.prev = self.tail
        self.tail.next = new_node
        self.tail = new_node

    def printList(self, node):
        while (node.next is not None):
            node = node.next
        while node.prev is not None:
            node = node.prev
        while (node is not None):
            print(node.data, end=" ")
            node = node.next
        print()


def printList(node):
    temp = node

    while (node is not None):
        print(node.data, end=" ")
        temp = node
        node = node.next
    print()
    while (temp):
        print(temp.data, end=" ")
        temp = temp.prev


if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        n = int(input())
        arr = list(map(int, input().strip().split()))
        llist = DoublyLinkedList()
        for e in arr:
            llist.append(e)
        ob = Solution()
        llist.head = ob.sortDoubly(llist.head)
        printList(llist.head)
        print()

# } Driver Code Ends
