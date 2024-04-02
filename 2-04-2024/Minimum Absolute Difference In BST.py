# class Node:
#     def __init__(self):
#         self.data = None
#         self.left = None
#         self.right = None
        
class Solution:
  #Your Code Start
    def inorder(self, root, v):
        if not root:
            return
        if root.left:
            self.inorder(root.left, v)
        v.append(root.data)
        if root.right:
            self.inorder(root.right, v)

    def absolute_diff(self, root):
        v = []
        self.inorder(root, v)
        ans = float('inf')
        n = len(v)
        for i in range(1, n):
            ans = min(ans, v[i] - v[i - 1])
        return ans
#Your Code End





#{ 
 # Driver Code Starts
from collections import deque


class Node:

    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


# Function to Build Tree
def buildTree(str):
    # Corner Case
    if len(str) == 0 or str[0] == 'N':
        return None

    # Creating list of strings from input string after splitting by space
    ip = str.split()

    # Create the root of the tree
    root = Node(int(ip[0]))

    # Push the root to the queue
    queue = deque()
    queue.append(root)

    # Starting from the second element
    i = 1
    while queue and i < len(ip):
        # Get and remove the front of the queue
        currNode = queue.popleft()

        # Get the current node's value from the string
        currVal = ip[i]

        # If the left child is not null
        if currVal != "N":
            # Create the left child for the current node
            currNode.left = Node(int(currVal))

            # Push it to the queue
            queue.append(currNode.left)

        # For the right child
        i += 1
        if i >= len(ip):
            break
        currVal = ip[i]

        # If the right child is not null
        if currVal != "N":
            # Create the right child for the current node
            currNode.right = Node(int(currVal))

            # Push it to the queue
            queue.append(currNode.right)

        i += 1

    return root


for _ in range(int(input())):
    s = input()
    root = buildTree(s)
    if root is None:
        continue
    if root.left is None and root.right is None:
        continue

    ob = Solution()
    print(ob.absolute_diff(root))

# } Driver Code Ends
