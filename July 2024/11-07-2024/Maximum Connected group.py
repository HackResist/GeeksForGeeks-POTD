from typing import List


class Solution:
    def MaxConnection(self, grid : List[List[int]]) -> int:
        #Your code Start
        grid_size = len(grid)
        if grid_size == 0:
            return 0

        # Directions for top, bottom, left, right
        move_directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        def perform_dfs(x: int, y: int, current_component_id: int) -> int:
            stack = [(x, y)]
            grid[x][y] = current_component_id
            component_size = 0
            while stack:
                current_x, current_y = stack.pop()
                component_size += 1
                for move_x, move_y in move_directions:
                    neighbor_x, neighbor_y = current_x + move_x, current_y + move_y
                    if 0 <= neighbor_x < grid_size and 0 <= neighbor_y < grid_size and grid[neighbor_x][neighbor_y] == 1:
                        grid[neighbor_x][neighbor_y] = current_component_id
                        stack.append((neighbor_x, neighbor_y))
            return component_size

        component_size_map = {}
        next_component_id = 2  # Start component IDs from 2 to differentiate from 1

        for row in range(grid_size):
            for col in range(grid_size):
                if grid[row][col] == 1:
                    size = perform_dfs(row, col, next_component_id)
                    component_size_map[next_component_id] = size
                    next_component_id += 1

        max_component_size = max(component_size_map.values(), default=0)

        def get_adjacent_component_ids(x: int, y: int) -> set:
            adjacent_components = set()
            for move_x, move_y in move_directions:
                neighbor_x, neighbor_y = x + move_x, y + move_y
                if 0 <= neighbor_x < grid_size and 0 <= neighbor_y < grid_size and grid[neighbor_x][neighbor_y] > 1:
                    adjacent_components.add(grid[neighbor_x][neighbor_y])
            return adjacent_components

        for row in range(grid_size):
            for col in range(grid_size):
                if grid[row][col] == 0:
                    adjacent_components = get_adjacent_component_ids(row, col)
                    potential_new_size = 1
                    for component_id in adjacent_components:
                        potential_new_size += component_size_map[component_id]
                    max_component_size = max(max_component_size, potential_new_size)

        return max_component_size
    #Your Code End        



#{ 
 # Driver Code Starts
class IntMatrix:

    def __init__(self) -> None:
        pass

    def Input(self, n, m):
        matrix = []
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix

    def Print(self, arr):
        for i in arr:
            for j in i:
                print(j, end=" ")
            print()


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):

        n = int(input())

        grid = IntMatrix().Input(n, n)

        obj = Solution()
        res = obj.MaxConnection(grid)

        print(res)

# } Driver Code Ends
