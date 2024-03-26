//{ Driver Code Starts
import java.io.*;
import java.util.*;

class IntArray {
    public static int[] input(BufferedReader br, int n) throws IOException {
        String[] s = br.readLine().trim().split(" ");
        int[] a = new int[n];
        for (int i = 0; i < n; i++) a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }
}

class IntMatrix {
    public static int[][] input(BufferedReader br, int n, int m) throws IOException {
        int[][] mat = new int[n][];

        for (int i = 0; i < n; i++) {
            String[] s = br.readLine().trim().split(" ");
            mat[i] = new int[s.length];
            for (int j = 0; j < s.length; j++) mat[i][j] = Integer.parseInt(s[j]);
        }

        return mat;
    }

    public static void print(int[][] m) {
        for (var a : m) {
            for (int e : a) System.out.print(e + " ");
            System.out.println();
        }
    }

    public static void print(ArrayList<ArrayList<Integer>> m) {
        for (var a : m) {
            for (int e : a) System.out.print(e + " ");
            System.out.println();
        }
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            int[] a = IntArray.input(br, 2);

            int[][] mat = IntMatrix.input(br, a[0], a[1]);

            Solution obj = new Solution();
            int res = obj.findShortestPath(mat);

            System.out.println(res);
        }
    }
}

// } Driver Code Ends


class Solution {
  //Your Code Start
   static class Node{
        int first;
        int second;
        int third;
        public Node(int first,int second,int third){
            this.first=first;
            this.second=second;
            this.third=third;
        }
    }
    public static int findShortestPath(int[][] mat) {
        int n=mat.length;
        int m=mat[0].length;
        //This will be solved using BFS
        
        int[][] vis=new int[n][m];
        //Instead of using distance and visited matrix separately, creating one that denotes both
        //If mine or near mine, vis[i][j]=-1
        //If unvisited, vis[i][j]=0;
        //If visited, vis[i][j]=minimum steps required to reach there
        int[] delrow={-1,0,0,1};
        int[] delcol={0,-1,1,0};
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(mat[i][j]==0){
                    vis[i][j]=-1;
                    for(int k=0;k<4;k++){
                        int nrow=i+delrow[k];
                        int ncol=j+delcol[k];
                        if(nrow>=0 && nrow<n && ncol>=0 && ncol<m){
                            vis[nrow][ncol]=-1;
                        }
                    }
                }
            }
        }
        Queue<Node> q=new LinkedList<>();
        for(int i=0;i<n;i++){
            if(vis[i][0]==0){
                q.add(new Node(i,0,1));
                vis[i][0]=1;
            }
        }
        while(!q.isEmpty()){
            Node  node=q.poll();
            int row=node.first;
            int col=node.second;
            int steps=node.third;
            for(int i=0;i<4;i++){
                int nrow=row+delrow[i];
                int ncol=col+delcol[i];
                //we'll go nrow,ncol if it is unvisited, i.e vis[nrow][ncol]==0
                if(nrow>=0 && nrow<n && ncol>=0 && ncol<m && vis[nrow][ncol]==0){
                    q.add(new Node(nrow,ncol,steps+1));
                    vis[nrow][ncol]=steps+1;
                }
            }
        }
        int mini=Integer.MAX_VALUE;
        for(int i=0;i<n;i++){
            //update the minimum distance if the node is visited and it's distance is smaller
            if(vis[i][m-1]!=0 && vis[i][m-1]!=-1 && vis[i][m-1]<mini){
                mini=vis[i][m-1];
            }
        }
        if(mini!=Integer.MAX_VALUE){
            return mini;
        }    
        return -1;
 
    }
}
//Your Code End
