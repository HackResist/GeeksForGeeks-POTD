#User function Template for python3


#Your Code Start
class BST:
    def __init__(self, is_bst, size, min_val, max_val):
        self.is_bst = is_bst
        self.size = size
        self.min = min_val
        self.max = max_val

class Solution:
    @staticmethod
    def largestBst(root):
        max_size = [0]
        Solution.sub_help(root, max_size)
        return max_size[0]

    @staticmethod
    def sub_help(root, max_size):
        if root is None:
            return BST(True, 0, float('inf'), float('-inf'))

        left = Solution.sub_help(root.left, max_size)
        right = Solution.sub_help(root.right, max_size)

        curr = BST(False, 0, 0, 0)

        if left.is_bst and right.is_bst and root.data > left.max and root.data < right.min:
            curr.is_bst = True
            curr.size = left.size + 1 + right.size
            curr.min = min(root.data, left.min)
            curr.max = max(root.data, right.max)
            max_size[0] = max(max_size[0], curr.size)
        else:
            curr.size = max(left.size, right.size)

        return curr
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
    # Corner Case
    if len(s) == 0 or s[0] == "N":
        return None

    # Creating list of strings from input string after splitting by space
    ip = list(map(str, s.split()))

    # Create the root of the tree
    root = Node(int(ip[0]))
    size = 0
    q = deque()

    # Push the root to the queue
    q.append(root)
    size += 1

    # Starting from the second element
    i = 1
    while size > 0 and i < len(ip):
        # Get and remove the front of the queue
        currNode = q.popleft()
        size -= 1

        # Get the current node's value from the string
        currVal = ip[i]

        # If the left child is not null
        if currVal != "N":
            # Create the left child for the current node
            currNode.left = Node(int(currVal))
            # Push it to the queue
            q.append(currNode.left)
            size += 1

        # Move to the next element
        i += 1
        if i >= len(ip):
            break

        currVal = ip[i]

        # If the right child is not null
        if currVal != "N":
            # Create the right child for the current node
            currNode.right = Node(int(currVal))
            # Push it to the queue
            q.append(currNode.right)
            size += 1

        # Move to the next element
        i += 1

    return root


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        s = input()
        root = buildTree(s)
        ob = Solution()
        result = ob.largestBst(root)
        print(result)

# } Driver Code Ends
