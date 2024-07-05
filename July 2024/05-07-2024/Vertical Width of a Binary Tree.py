#User function Template for python3


#Function to find the vertical width of a Binary Tree.
def verticalWidth(root):
  #Your Code Start
    if not root:
        return 0

    # Use a set to store all the horizontal distances
    hdS = set()

    # Queue to perform level order traversal
    q = [(root, 0)]

    while q:
        node, hd = q.pop(0)
        
        # Insert the current horizontal distance to the set
        hdS.add(hd)

        # Process left and right children
        if node.left:
            q.append((node.left, hd - 1))
        if node.right:
            q.append((node.right, hd + 1))

    # The number of unique horizontal distances gives the vertical width
    return len(hdS)
    #Your Code End


#{ 
 # Driver Code Starts
from collections import deque


# Tree Node
class Node:

    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None


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


if __name__ == "__main__":
    t = int(input())
    for _ in range(0, t):
        s = input()
        root = buildTree(s)
        print(verticalWidth(root))

# } Driver Code Ends
