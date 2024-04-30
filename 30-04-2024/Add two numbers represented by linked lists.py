# Node for linked list:
#Your Code Start
class Solution:
    # Function to reverse a linked list
    @staticmethod
    def reverse(head):
        prev = None
        curr = head
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        return prev

    # Function to add two numbers represented by linked list
    @staticmethod
    def addTwoLists(num1, num2):
        num1 = Solution.reverse(num1)
        num2 = Solution.reverse(num2)
        result = None
        temp = None
        carry = 0
        while num1 or num2 or carry:
            sum_val = carry
            if num1:
                sum_val += num1.data
                num1 = num1.next
            if num2:
                sum_val += num2.data
                num2 = num2.next
            carry = sum_val // 10
            sum_val = sum_val % 10
            new_node = Node(sum_val)
            if not result:
                result = new_node
            else:
                temp.next = new_node
            temp = new_node
        if carry > 0:
            temp.next = Node(carry)
        result = Solution.reverse(result)
        while result and result.data == 0 and result.next:
            result = result.next
        return result

#Your Code End



#{ 
 # Driver Code Starts
#Initial Template for Python 3

# Node Class
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Linked List Class
class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    # creates a new node with given value and appends it at the end of the linked list
    def insert(self, val):
        if self.head is None:
            self.head = Node(val)
            self.tail = self.head
        else:
            self.tail.next = Node(val)
            self.tail = self.tail.next

# prints the elements of linked list starting with head
def printList(n):
    while n:
        print(n.data,end=' ')
        n = n.next
    print()

if __name__ == '__main__':
    for _ in range(int(input())):
        
        n = int(input())
        arr1 = ( int(x) for x in input().split() )
        num1 = LinkedList()
        for i in arr1:
            num1.insert(i)
        
        m = int(input())
        arr2 = ( int(x) for x in input().split() )
        num2 = LinkedList()
        for i in arr2:
            num2.insert(i)
        
        res = Solution().addTwoLists(num1.head, num2.head)
        printList(res)
# } Driver Code Ends
