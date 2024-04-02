#User function Template for python3

'''
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
'''

class Solution:
    #Your Code Start
    def tree(self, root, x, y):
        while root:
            if x < root.data and y < root.data:
                root = root.left
            elif x > root.data and y > root.data:
                root = root.right
            else:
                return root
    
    def pathToNode(self, root, node, path):
        while root:
            path.append(root.data)
            if root.data == node.data:
                break
            elif node.data > root.data:
                root = root.right
            else:
                root = root.left
    
    def kthCommonAncestor(self, root, k, x, y):
        lca = self.tree(root, x, y)
        if not lca:
            return -1
        path = []
        self.pathToNode(root, lca, path)
        return path[::-1][k - 1] if len(path) >= k else -1
        #Your Code End



#{ 
 # Driver Code Starts

#Initial Template for Python 3


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
    k, x, y = map(int, input().split())
    if root is None:
        continue
    
    if root.left is None and root.right is None:
        continue
    
    ob = Solution()
    print(ob.kthCommonAncestor(root, k, x, y))


# } Driver Code Ends
