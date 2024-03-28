//{ Driver Code Starts
// Initial Template for Java

import java.util.*;
import java.io.*;
import java.lang.*;

class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {

            int n = sc.nextInt();
            int m = sc.nextInt();
            int[][] adj = new int[m][3];

            for (int i = 0; i < m; i++) {

                for (int j = 0; j < 3; j++) {
                    adj[i][j] = sc.nextInt();
                }
            }

            int dist = sc.nextInt();
            Solution obj = new Solution();
            int ans = obj.findCity(n, m, adj, dist);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends


// User function Template for Java
//Your Code Start

class Solution {
      int findCity(int n, int m, int[][] e,int d)
      {
          int[][] ma=new int[n][n];
          for(int[] r:ma){
          Arrays.fill(r,10001);}
          for(int i=0;i<n;i++){
              ma[i][i]=0;
          }
          for(int[]it:e){
              ma[it[0]][it[1]]=ma[it[1]][it[0]]=it[2];
          }
          for(int k=0;k<n;k++){
              for(int i=0;i<n;i++){
                  for(int j=0;j<n;j++){
                      ma[i][j]=Math.min(ma[i][j],ma[i][k]+ma[k][j]);
                  }
              }
          }
          int ans=-1;
          int ne=n+1;
          for(int i=0;i<n;i++){
              int cnt=0;
              for(int j=0;j<n;j++){
                  if(ma[i][j]<=d)cnt++;
              }
              if(cnt<=ne){
                  ne=cnt;
                  ans=i;
              }
          }
          return ans;
        //Your Code End
      
      }
}
