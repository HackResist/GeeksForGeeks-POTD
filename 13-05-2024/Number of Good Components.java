//{ Driver Code Starts
import java.io.*;
import java.util.*;

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

            int e;
            e = Integer.parseInt(br.readLine());

            int v;
            v = Integer.parseInt(br.readLine());

            int[][] edges = IntMatrix.input(br, e, 2);

            Solution obj = new Solution();
            int res = obj.findNumberOfGoodComponent(e, v, edges);

            System.out.println(res);
        }
    }
}

// } Driver Code Ends



//Your Code Start
class Solution {
    public static boolean isConnected(int check, boolean[] visited, List<List<Integer>> adj) {
        List<Integer> checkList = new ArrayList<>(adj.get(check));
        checkList.add(check);
        Collections.sort(checkList);
        
        for (int i : adj.get(check)) {
            visited[i] = true;
            List<Integer> temp = new ArrayList<>(adj.get(i));
            temp.add(i);
            Collections.sort(temp);
            if (!checkList.equals(temp)) return false;
        }
        return true;
    }
    
    public static int findNumberOfGoodComponent(int e, int v, int[][] edges) {
        int ans = 0;
        boolean[] visited = new boolean[v + 1];
        List<List<Integer>> adj = new ArrayList<>(v + 1);
        for (int i = 0; i <= v; i++) {
            adj.add(new ArrayList<>());
        }
        
        for (int[] edge : edges) {
            int start = edge[0];
            int end = edge[1];
            
            adj.get(start).add(end);
            adj.get(end).add(start);
        }
        
        for (int i = 1; i <= v; i++) {
            if (!visited[i]) {
                boolean isConnectedComponent = isConnected(i, visited, adj);
                if (isConnectedComponent) ans++;
            } 
        }
        
        return ans;
    }
}
//Your Code End
