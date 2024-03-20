#User function Template for python3

'''
class Node:
    def __init__(self,val):
        self.data = val
        self.left = None
        self.right = None
'''

class Solution:
    #Function to store the zig zag order traversal of tree in a list.
    def zigZagTraversal(self, root):
      #Your Code Start
        if not root:
            return []

        result = []
        # Using a deque for efficient popping from both ends
        queue = deque([root])
        # Flag to indicate the current level order
        left_to_right = True

        while queue:
            level_size = len(queue)
            level_values = []

            for _ in range(level_size):
                if left_to_right:
                    # Append node value to the level_values list from left to right
                    node = queue.popleft()
                    level_values.append(node.data)
                    if node.left:
                        queue.append(node.left)
                    if node.right:
                        queue.append(node.right)
                else:
                    # Append node value to the level_values list from right to left
                    node = queue.pop()
                    level_values.append(node.data)
                    if node.right:
                        queue.appendleft(node.right)
                    if node.left:
                        queue.appendleft(node.left)

            # Toggle the direction for the next level
            left_to_right = not left_to_right
            result.extend(level_values)

        return result
# Your code End



#{ 
 # Driver Code Starts
#Initial Template for Python 3

#contributed by RavinderSinghPB

from collections import defaultdict
from collections import deque

class Node:
    def __init__(self,val):
        self.data = val
        self.left = None
        self.right = None
        
# Function to Build Tree   
def buildTree(s):
    #Corner Case
    if(len(s)==0 or s[0]=="N"):           
        return None
        
    # Creating list of strings from input 
    # string after spliting by space
    ip=list(map(str,s.split()))
    
    # Create the root of the tree
    root=Node(int(ip[0]))                     
    size=0
    q=deque()
    
    # Push the root to the queue
    q.append(root)                            
    size=size+1 
    
    # Starting from the second element
    i=1                                       
    while(size>0 and i<len(ip)):
        # Get and remove the front of the queue
        currNode=q[0]
        q.popleft()
        size=size-1
        
        # Get the current node's value from the string
        currVal=ip[i]
        
        # If the left child is not null
        if(currVal!="N"):
            
            # Create the left child for the current node
            currNode.left=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.left)
            size=size+1
        # For the right child
        i=i+1
        if(i>=len(ip)):
            break
        currVal=ip[i]
        
        # If the right child is not null
        if(currVal!="N"):
            
            # Create the right child for the current node
            currNode.right=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.right)
            size=size+1
        i=i+1
    return root
    
if __name__ == '__main__':
    t=int(input())
    for _ in range(0,t):
        s=input()
        root=buildTree(s)
        ob = Solution()
        res = ob.zigZagTraversal(root)
        for i in range (len (res)):
            print (res[i], end = " ")
        print()
# } Driver Code Ends
