#User function Template for python3

"""
# Node Class

class Node:
    def __init__(self, val):
        self.data = val
        self.next = None

"""


#Your Code Start
class Solution:
    #Function to reverse a linked list.
    def arrangeCV(self, head):
        # If the head is None or there's only one node, return the head as it is
        if head is None or head.next is None:
            return head
        
        # Initialize pointers for vowels and consonants
        vowel_head = vowel_tail = None
        consonant_head = consonant_tail = None

        current = head
        while current:
            if current.data.lower() in ['a', 'e', 'i', 'o', 'u']:
                # If the current node is a vowel
                if vowel_head is None:
                    vowel_head = vowel_tail = current
                else:
                    vowel_tail.next = current
                    vowel_tail = current
            else:
                # If the current node is a consonant
                if consonant_head is None:
                    consonant_head = consonant_tail = current
                else:
                    consonant_tail.next = current
                    consonant_tail = current
            # Move to the next node
            current = current.next

        # If there are no vowels, return the original list
        if vowel_head is None:
            return consonant_head

        # Concatenate the two lists
        vowel_tail.next = consonant_head
        # Set the next of the last node in consonant list to None
        consonant_tail.next = None

        # Return the head of the updated linked list
        return vowel_head
#Your Code End

#{ 
 # Driver Code Starts
# Node Class
class Node:

    def __init__(self, val):
        self.data = val
        self.next = None


# Linked List Class
class Linked_List:

    def __init__(self):
        self.head = None
        self.tail = None

    def insert(self, val):
        if self.head is None:
            self.head = Node(val)
            self.tail = self.head
        else:
            self.tail.next = Node(val)
            self.tail = self.tail.next


def printList(head):
    tmp = head
    while tmp:
        print(tmp.data, end=' ')
        tmp = tmp.next
    print()


if __name__ == '__main__':
    for i in range(int(input())):
        n = int(input())
        arr = [str(x) for x in input().split()]

        lis = Linked_List()
        for i in arr:
            lis.insert(i)

        newHead = Solution().arrangeCV(lis.head)
        printList(newHead)

# } Driver Code Ends
