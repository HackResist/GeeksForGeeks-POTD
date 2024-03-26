//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

class Solution
{
public:
    int findShortestPath(vector<vector<int>> &mat)
    {
      //Your Code Start
         int n = mat.size();
       int m = mat[0].size();
       vector<vector<int>> vis(n , vector<int> (m , 0));
       vector<vector<int>> dis(n , vector<int> (m , 1e9));
       int minDis = 1e9;
       priority_queue <pair<int , pair<int , int>>, vector<pair<int , pair<int , int>>>, greater<pair<int , pair<int , int>>> > pq; 
       
       for(int i=0 ; i<n ; i++){
           for(int j=0 ; j<m ; j++){
               
               if(mat[i][j] == 0){
                   
                   vis[i][j] = 1;
                   
                   if(i-1 >= 0) vis[i-1][j] = 1;
                   if(j-1 >= 0) vis[i][j-1] = 1;
                   if(i+1 < n) vis[i+1][j] = 1;
                   if(j+1 < m) vis[i][j+1] = 1;
               }
           }
       }
       
       for(int i=0 ; i<n ; i++){
           
           if(!vis[i][0]){
              pq.push({1 , {i , 0}});
              dis[i][0] = 0;
           }
       }
       
       int dr[] = {-1 , 0 , 1 , 0};
       int dc[] = {0 , 1 , 0 , -1};
       
       while(!pq.empty()){
           
           int r = pq.top().second.first;
           int c = pq.top().second.second;
           int steps = pq.top().first;
           pq.pop();
           
           for(int i=0 ; i<4 ; i++){
               
               int nr = r + dr[i];
               int nc = c + dc[i];
               
               if(nr>=0 && nr<n && nc>=0 && nc<m && !vis[nr][nc]){
                   
                   if(dis[nr][nc] > 1 + steps){
                      dis[nr][nc] = 1 + steps; 
                      pq.push({steps+1 , {nr , nc}});
                   }
               }
           }
           
       }
       
       for(int i=0 ; i<n ; i++){
           
           minDis = min(dis[i][m-1] , minDis);
       }
       
       if(minDis != 1e9) return minDis;
       
       return -1;
       // Your Code End
    }
};

//{ Driver Code Starts.

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int R, C;
        cin >> R >> C;
        vector<vector<int>> mat(R, vector<int>(C));
        for (int i = 0; i < R; i++)
        {
            for (int j = 0; j < C; j++)
            {
                cin >> mat[i][j];
            }
        }

        Solution ob;
        int ans = ob.findShortestPath(mat);
        cout << ans << "\n";
    }
    return 0;
}

// } Driver Code Ends
