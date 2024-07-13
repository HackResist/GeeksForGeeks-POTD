//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    vector<int> shortestPath(int n, int m, vector<vector<int>>& edges) {
//Your Code Start
   // Create adjacency list
    vector<vector<pair<int, int>>> adjacencyList(n);
    for (const auto& edge : edges) {
        adjacencyList[edge[0] - 1].push_back({edge[1] - 1, edge[2]});
        adjacencyList[edge[1] - 1].push_back({edge[0] - 1, edge[2]});
    }

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
    minHeap.push({0, 0});
    vector<int> distances(n, INT_MAX);
    distances[0] = 0;
    vector<int> predecessors(n, -1);
    predecessors[0] = 0;

    while (!minHeap.empty()) {
        int currentNode = minHeap.top().second;
        minHeap.pop();

        for (const auto& neighbor : adjacencyList[currentNode]) {
            int nextNode = neighbor.first;
            int weight = neighbor.second;

            if (distances[nextNode] > distances[currentNode] + weight) {
                distances[nextNode] = distances[currentNode] + weight;
                predecessors[nextNode] = currentNode;
                minHeap.push({distances[nextNode], nextNode});
            }
        }
    }

    if (distances[n - 1] == INT_MAX) return {-1};

    vector<int> ans;
    for (int node = n - 1; node != 0; node = predecessors[node]) {
        ans.push_back(node + 1);
    }
    ans.push_back(1);
    ans.push_back(distances[n - 1]);
    reverse(ans.begin(), ans.end());

    return ans;
    //Your Code End
    }
};

//{ Driver Code Starts.
int main() {
    // your code goes here
    int t;
    cin >> t;
    while (t--) {
        int n, m;
        cin >> n >> m;
        vector<vector<int>> edges;
        map<pair<int, int>, int> mp;
        for (int i = 0; i < m; ++i) {
            vector<int> temp;
            for (int j = 0; j < 3; ++j) {
                int x;
                cin >> x;
                temp.push_back(x);
            }
            edges.push_back(temp);
            mp[{edges.back()[0], edges.back()[1]}] = edges.back()[2];
            mp[{edges.back()[1], edges.back()[0]}] = edges.back()[2];
        }

        Solution obj;
        vector<int> res = obj.shortestPath(n, m, edges);
        int ans = 0;
        for (int i = 2; i < res.size(); i++) {
            ans += mp[{res[i], res[i - 1]}];
        }
        if (ans == res[0]) {

        } else if (res.size() == 1 && res[0] == -1)
            ans = res[0];
        else
            ans = -2;
        cout << ans << endl;
    }
}

// } Driver Code Ends
