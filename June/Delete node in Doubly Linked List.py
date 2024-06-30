class Solution:
    def delete_node(self, head, x):
    #Your Code Start
        if head is None or x <= 0:
            return head

        current = head

        # If head needs to be removed
        if x == 1:
            head = head.next
            if head is not None:
                head.prev = None
            return head

        # Traverse the list to find the node to be deleted
        for i in range(1, x):
            if current is None:
                return head
            current = current.next

        # If the node to be deleted is beyond the range of the list
        if current is None:
            return head

        # If the node to be deleted is not the last node
        if current.next is not None:
            current.next.prev = current.prev

        # If the node to be deleted is not the first node
        if current.prev is not None:
            current.prev.next = current.next

        return head
    #Your Code End

#{ 
 # Driver Code Starts
class Node:

    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

    @staticmethod
    def print_list(node):
        while node is not None:
            print(node.data, end=" ")
            node = node.next
        print()


if __name__ == "__main__":
    import sys
    input = sys.stdin.read
    data = input().split()

    index = 0
    t = int(data[index])
    index += 1
    for _ in range(t):
        n = int(data[index])
        index += 1
        head = None
        tail = head

        for i in range(n):
            temp = int(data[index])
            index += 1
            if head is None:
                head = Node(temp)
                tail = head
            else:
                new_node = Node(temp)
                tail.next = new_node
                new_node.prev = tail
                tail = new_node

        x = int(data[index])
        index += 1

        obj = Solution()
        res = obj.delete_node(head, x)

        Node.print_list(res)

# } Driver Code Ends
