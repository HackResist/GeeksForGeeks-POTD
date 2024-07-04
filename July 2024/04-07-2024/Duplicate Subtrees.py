class Solution:
    #Your Code Start
    def __init__(self):
       self.map = {}
       self.temp = []

    def sSub(self, node):
        if not node:
            return "#"

        s = "{},{},{}".format(node.data, self.sSub(node.left), self.sSub(node.right))
        
        if s in self.map:
            self.map[s] += 1
        else:
            self.map[s] = 1
        
        if self.map[s] == 2:
            self.temp.append(node)
        
        return s

    def printAllDups(self, root):
        self.sSub(root)
        return self.temp
#Your Code End

#{ 
 # Driver Code Starts
class Node:

    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def build_tree(s):
    if not s or s[0] == 'N':
        return None

    ip = s.split()
    root = Node(int(ip[0]))
    queue = [root]
    i = 1

    while queue and i < len(ip):
        curr_node = queue.pop(0)
        curr_val = ip[i]

        if curr_val != 'N':
            curr_node.left = Node(int(curr_val))
            queue.append(curr_node.left)

        i += 1
        if i >= len(ip):
            break

        curr_val = ip[i]

        if curr_val != 'N':
            curr_node.right = Node(int(curr_val))
            queue.append(curr_node.right)

        i += 1

    return root


def preorder(root, temp):
    if not root:
        return
    temp.append(root.data)
    preorder(root.left, temp)
    preorder(root.right, temp)


if __name__ == "__main__":
    import sys
    input = sys.stdin.read
    data = input().split('\n')
    t = int(data[0])
    index = 1
    for _ in range(t):
        s = data[index]
        index += 1
        root = build_tree(s)
        obj = Solution()
        res = obj.printAllDups(root)

        ans = []
        for node in res:
            temp = []
            preorder(node, temp)
            ans.append(temp)

        ans.sort(key=lambda x: x[0])

        for sublist in ans:
            print(" ".join(map(str, sublist)))

# } Driver Code Ends
