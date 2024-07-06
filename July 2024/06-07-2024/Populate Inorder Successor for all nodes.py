#User function Template for python3


class Node:

    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None
        self.next = None


class Solution:

    def populateNext(self, root):
        #Your Code Start
        if root is None:
            return
        
        # Initialize the stack and set the previous node to None
        stk = []
        curr = root
        pre = None
        
        # Iterate until the stack is empty or the current node is not None
        while stk or curr:
            # Reach the leftmost node of the current node
            while curr:
                stk.append(curr)
                curr = curr.left
            
            # Current must be None at this point, so we pop from the stack
            curr = stk.pop()
            
            # Process the current node
            if pre:
                pre.next = curr
            pre = curr
            
            # Move to the right subtree
            curr = curr.right
        
        # The next pointer of the last node should be None
        if pre:
            pre.next = None
   #Your Code End


#{ 
 # Driver Code Starts
#Initial Template for Python 3

from collections import defaultdict
from collections import deque
from sys import stdin, stdout


class Node:

    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None
        self.next = None


# Function to Build Tree
def buildTree(s):
    #Corner Case
    if (len(s) == 0 or s[0] == "N"):
        return None

    # Creating list of strings from input
    # string after spliting by space
    ip = list(map(str, s.split()))

    # Create the root of the tree
    root = Node(int(ip[0]))
    size = 0
    q = deque()

    # Push the root to the queue
    q.append(root)
    size = size + 1

    # Starting from the second element
    i = 1
    while (size > 0 and i < len(ip)):
        # Get and remove the front of the queue
        currNode = q[0]
        q.popleft()
        size = size - 1

        # Get the current node's value from the string
        currVal = ip[i]

        # If the left child is not null
        if (currVal != "N"):

            # Create the left child for the current node
            currNode.left = Node(int(currVal))

            # Push it to the queue
            q.append(currNode.left)
            size = size + 1
        # For the right child
        i = i + 1
        if (i >= len(ip)):
            break
        currVal = ip[i]

        # If the right child is not null
        if (currVal != "N"):

            # Create the right child for the current node
            currNode.right = Node(int(currVal))

            # Push it to the queue
            q.append(currNode.right)
            size = size + 1
        i = i + 1
    return root


def Inorder(root):
    if root.left == None:
        return root
    return Inorder(root.left)


if __name__ == '__main__':
    test_cases = int(input())
    for _ in range(test_cases):
        root = buildTree(input())
        obj = Solution()
        obj.populateNext(root)
        ptr = Inorder(root)
        while ptr:
            print("{}->{}".format(ptr.data,
                                  (ptr.next.data if ptr.next else -1)),
                  end=" ")
            ptr = ptr.next
        print()

# } Driver Code Ends
