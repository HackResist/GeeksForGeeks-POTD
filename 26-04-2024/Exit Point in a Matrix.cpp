//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//Your Code Start
class Solution {
  public:
    vector<int> FindExitPoint(int n, int m, vector<vector<int>>& matrix) {
        // Code here
   int rows=matrix.size();//this will give the number of rows
   int columns=matrix[0].size();//this will no of columns in the  matrix
   
   int i=0,j=0;
   int count=0;
   
   while(i<rows&&j<columns&&i>=0&&j>=0)
   {
       if(matrix[i][j]!=1)
       {
           if(count%4==0)
           j++;
           else if(count%4==1)
           i++;
           else if(count%4==2)
           j--;
           else
           i--;
       }
       else//now the current index has one
       {
           count++;
           matrix[i][j]=0;
       }
   }
   vector<int> ans;
   if(count%4==0)
   {
       j--;
       ans={i,j};
       return ans;
   }
   else if(count%4==1)
   {
       i--;
       ans={i,j};
       return ans;
   }
   else if(count%4==2)
   {
       j++;
       ans={i,j};
       return ans;
   }
   else
   {
       i++;
       ans={i,j};
       return ans;
    }
    }
};
//Your Code End


//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int n, m;
        cin >> n >> m;
        vector<vector<int>> matrix(n, vector<int>(m, 0));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                cin >> matrix[i][j];
        Solution obj;
        vector<int> ans = obj.FindExitPoint(n, m, matrix);
        for (auto i : ans)
            cout << i << " ";
        cout << "\n";
    }
    return 0;
}
// } Driver Code Ends
