//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.nextInt();
                }
            }

            Solution obj = new Solution();
            int ans = obj.MaxConnection(grid);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends


class Solution {
//Your Code Start
    private int n;
    private int[][] dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    private int[][] id;
    private Map<Integer, Integer> compSize = new HashMap<>();
    private int compId = 0;

    public int MaxConnection(int[][] grid) {
        n = grid.length;
        id = new int[n][n];
        for (int[] row : id) {
            Arrays.fill(row, -1);
        }

        // Find all components and their sizes
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 1) {
                    int size = dfs(grid, i, j);
                    compSize.put(compId, size);
                    ++compId;
                }
            }
        }

        // Initialize maxConn with largest component size
        int maxConn = 0;
        for (int size : compSize.values()) {
            maxConn = Math.max(maxConn, size);
        }

        // Check each zero cell
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 0) {
                    Set<Integer> seenComponents = new HashSet<>();
                    int potentialSize = 1; // count the flipped cell itself
                    for (int[] dir : dirs) {
                        int ni = i + dir[0], nj = j + dir[1];
                        if (isValid(ni, nj) && grid[ni][nj] == 2) {
                            int compId = id[ni][nj];
                            if (seenComponents.add(compId)) {
                                potentialSize += compSize.get(compId);
                            }
                        }
                    }
                    maxConn = Math.max(maxConn, potentialSize);
                }
            }
        }

        return maxConn;
    }

    private boolean isValid(int x, int y) {
        return x >= 0 && x < n && y >= 0 && y < n;
    }

    private int dfs(int[][] grid, int x, int y) {
        int size = 1;
        grid[x][y] = 2; // mark as visited
        id[x][y] = compId;
        for (int[] dir : dirs) {
            int nx = x + dir[0], ny = y + dir[1];
            if (isValid(nx, ny) && grid[nx][ny] == 1) {
                size += dfs(grid, nx, ny);
            }
        }
        return size;
        //Your Code End
    }
}
