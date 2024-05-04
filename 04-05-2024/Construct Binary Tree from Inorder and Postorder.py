#User function Template for python3

'''
class Node:
    def __init__(self, data):
        self.data = data
        self.left = self.right = None
'''

#Function to return a tree created from postorder and inorder traversals.
#Your Code Start
class Solution:
    def buildTree(self, inOrder, postOrder, n):
        # Index to keep track of the current element of the postorder traversal list
        postIndex = [n - 1]

        # Helper function to construct the tree recursively
        def buildTreeUtil(inStart, inEnd):
            # If start index is greater than end index, then no subtree exists.
            if inStart > inEnd:
                return None

            # Create a new node with the value at postIndex (last element of postorder).
            node = Node(postOrder[postIndex[0]])
            postIndex[0] -= 1

            # If the node has no children, return it.
            if inStart == inEnd:
                return node

            # Find the index of this node in the inorder traversal.
            inIndex = inOrder.index(node.data)

            # Recursively build right subtree first because postorder gives us root node last.
            node.right = buildTreeUtil(inIndex + 1, inEnd)

            # Then recursively build left subtree.
            node.left = buildTreeUtil(inStart, inIndex - 1)

            return node

        # Call the helper function with appropriate parameters
        return buildTreeUtil(0, n - 1)
#Your Code End


#{ 
 # Driver Code Starts
#Initial Template for Python 3
import atexit
import io
import sys
from collections import  defaultdict

#Contributed by : PranchalK


_INPUT_LINES = sys.stdin.read().splitlines()
input = iter(_INPUT_LINES).__next__
_OUTPUT_BUFFER = io.StringIO()
sys.stdout = _OUTPUT_BUFFER

@atexit.register

def write():
    sys.__stdout__.write(_OUTPUT_BUFFER.getvalue())



# Helper function that allocates  
# a new node  
class Node:
    def __init__(self, data):
        self.data = data
        self.left = self.right = None

# This funtcion is here just to test  
def preOrder(node):
    if node == None:
        return
    print(node.data, end=" ")
    preOrder(node.left)
    preOrder(node.right)
    
if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases):
        n = int(input())  # number of nodes in tree
        in_order = list(map(int, input().strip().split()))  # parent child info in list
        post_order = list(map(int, input().strip().split()))  # parent child info in list
        ob = Solution()
        preOrder(ob.buildTree(in_order,post_order,n))
        print()


# } Driver Code Ends
