//{ Driver Code Starts
//Initial template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function template for C++
//Your Code Start
class DisjointSet{
    private:
        int noOfEdges;
        vector<int> parent;
        vector<int> size;
        
    public:
        DisjointSet(int n)
        {
            noOfEdges = 0;
            parent.resize(n+1);
            size.resize(n+1, 1);
            for(int i=0; i<=n; i++) parent[i] = i;
        }
        
        int getParent(int node)
        {
            if(parent[node] == node) return node;
            return parent[node] = getParent(parent[node]);
        }
        
        void unionSet(int a, int b)
        {
            int pa = getParent(a);
            int pb = getParent(b);
            if(pa == pb) return;
            noOfEdges -= size[pa] * (size[pa] - 1)/2;
            noOfEdges -= size[pb] * (size[pb] - 1)/2;
            if(size[pa] > size[pb])
            {
                size[pa] += size[pb];
                parent[pb] = pa;
                noOfEdges += size[pa] * (size[pa] - 1)/2;
            }
            else
            {
                size[pb] += size[pa];
                parent[pa] = pb;
                noOfEdges += size[pb] * (size[pb] - 1)/2;
            }
        }
        
        int getEdgeCount()
        {
            return noOfEdges;
        }
};

class Solution{
	public:
	
	static bool cmp(vector<int> &v1, vector<int> &v2)
	{
	    return v1[2] < v2[2];
	}
	
	vector<int> maximumWeight(int n, vector<vector<int>> edges, int q, vector<int> &queries)
	{
	    // code here
	    DisjointSet djs(n);
	    vector<pair<int, int>> newQ;
	    for(int i=0; i<q; i++)
	    {
	        newQ.push_back({queries[i], i});
	    }
	    
	    sort(newQ.begin(), newQ.end());
	    sort(edges.begin(), edges.end(), cmp);
	    vector<int> ans(q, 0);
	    int i = 0;
	    for(auto it : newQ)
	    {
	        int wt = it.first;
	        int idx = it.second;
	        while(i < edges.size() && edges[i][2] <= wt)
	        {
	            djs.unionSet(edges[i][0], edges[i][1]);
	            i++;
	        }
	        ans[idx] = djs.getEdgeCount();
	    }
	    return ans;
    //Your Code End
	}
};




//{ Driver Code Starts.

int main() 
{
   	int t;
    cin >> t;
    while (t--)
    {
    	int n;
        cin >> n;
        
        vector<vector<int>> edges(n-1, vector<int> (3, 0));

        for(int i = 0; i < n-1; i++)
        {
        	for(int j = 0; j < 3; j++)
        	{
        		cin >> edges[i][j];
        	}
        }

        int q;
        cin >> q;
        vector<int> queries(q);
        for(int i = 0; i < q; i++)
        	cin >> queries[i];

    	Solution obj;
    	vector<int> ans = obj.maximumWeight(n, edges, q, queries);

    	for(auto i:ans)
    		cout << i << " ";
    	cout << "\n"; 
    }
    return 0;
}

// } Driver Code Ends
