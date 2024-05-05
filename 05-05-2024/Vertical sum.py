#{ 
 # Driver Code Starts
#Initial Template for Python 3

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
    

# } Driver Code Ends
#User function Template for python3

'''
# Node Class:
class Node:
    def __init__(self,val):
        self.data = val
        self.left = None
        self.right = None
'''
# Your Code Start
#Import defaultdict from collections
from collections import defaultdict
class Solution:
    # Complete the function below
    def verticalSum(self, root):
        # Dictionary to store the vertical sum
        verticalSumMap = defaultdict(int)
        
        # Utility function to perform vertical traversal
        def verticalTraversal(node, level):
            if node is None:
                return
            
            # Add node's data to the vertical sum for its level
            verticalSumMap[level] += node.data
            
            # Traverse left and right subtrees with adjusted levels
            verticalTraversal(node.left, level - 1)
            verticalTraversal(node.right, level + 1)
        
        # Start vertical traversal from the root at level 0
        verticalTraversal(root, 0)
        
        # Extract vertical sums from the dictionary into a list
        verticalSums = []
        for key in sorted(verticalSumMap.keys()):
            verticalSums.append(verticalSumMap[key])
        
        return verticalSums
        
   #Youe Code End

#{ 
 # Driver Code Starts.
if __name__=="__main__":
    t=int(input())
    for _ in range(0,t):
        s=input()
        root=buildTree(s)
        res = Solution().verticalSum(root)
        for i in res:
            print (i, end = " ")
        print();
# } Driver Code Ends
