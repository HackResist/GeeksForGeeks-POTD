//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    int MaxConnection(vector<vector<int>>& grid) {
        // Your Code Start
         int n = grid.size();
        vector<vector<int>> dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        vector<vector<int>> id(n, vector<int>(n, -1));
        unordered_map<int, int> compoSize;
        int compoId = 0;

        auto isValid = [&](int x, int y) {
            return x >= 0 && x < n && y >= 0 && y < n;
        };

        function<int(int, int)> dfs = [&](int x, int y) {
            int size = 1;
            grid[x][y] = 2; // mark as visited
            id[x][y] = compoId;
            for (auto& dir : dirs) {
                int nx = x + dir[0], ny = y + dir[1];
                if (isValid(nx, ny) && grid[nx][ny] == 1) {
                    size += dfs(nx, ny);
                }
            }
            return size;
        };

        // Find all components and their sizes
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 1) {
                    int size = dfs(i, j);
                    compoSize[compoId] = size;
                    ++compoId;
                }
            }
        }

        // Initialize max connection with largest component size
        int maxConn = 0;
        for (const auto& entry : compoSize) {
            maxConn = max(maxConn, entry.second);
        }

        // Check each zero cell
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 0) {
                    unordered_set<int> seenComponents;
                    int potentialSize = 1; // count the flipped cell itself
                    for (auto& dir : dirs) {
                        int ni = i + dir[0], nj = j + dir[1];
                        if (isValid(ni, nj) && grid[ni][nj] == 2) {
                            int compId = id[ni][nj];
                            if (seenComponents.insert(compId).second) {
                                potentialSize += compoSize[compId];
                            }
                        }
                    }
                    maxConn = max(maxConn, potentialSize);
                }
            }
        }

        return maxConn;
//Your Code End
    }
};


//{ Driver Code Starts.
int main() {

    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<vector<int>> grid(n, vector<int>(n));

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cin >> grid[i][j];
            }
        }

        Solution obj;
        cout << obj.MaxConnection(grid) << "\n";
    }
}

// } Driver Code Ends
