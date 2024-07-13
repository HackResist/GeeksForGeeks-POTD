//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    static BufferedReader br;
    static PrintWriter ot;

    public static void main(String[] args) throws IOException {
        br = new BufferedReader(new InputStreamReader(System.in));
        ot = new PrintWriter(System.out);

        int t = Integer.parseInt(br.readLine().trim());

        while (t-- > 0) {
            String s[] = br.readLine().trim().split(" ");
            int n = Integer.parseInt(s[0]), m = Integer.parseInt(s[1]);
            int edges[][] = new int[m][3];
            for (int i = 0; i < m; i++) {
                s = br.readLine().trim().split(" ");
                edges[i][0] = Integer.parseInt(s[0]);
                edges[i][1] = Integer.parseInt(s[1]);
                edges[i][2] = Integer.parseInt(s[2]);
            }

            List<Integer> list = new Solution().shortestPath(n, m, edges);

            ot.println(list.get(0));
            if (list.get(0) != -1 && !check(list, edges)) ot.println(-1);
        }
        ot.close();
    }

    static boolean check(List<Integer> list, int edges[][]) {
        Set<Integer> hs = new HashSet<>();
        Map<Integer, Map<Integer, Integer>> hm = new HashMap<>();
        for (int i = 1; i < list.size(); i++) hs.add(list.get(i));
        for (int x[] : edges) {
            if (hs.contains(x[0]) || hs.contains(x[1])) {
                if (!hm.containsKey(x[0])) hm.put(x[0], new HashMap<>());
                if (!hm.containsKey(x[1])) hm.put(x[1], new HashMap<>());
                hm.get(x[0]).put(x[1], x[2]);
                hm.get(x[1]).put(x[0], x[2]);
            }
        }
        int sum = 0;
        for (int i = 1; i < list.size() - 1; i++) {
            if (!hm.containsKey(list.get(i)) ||
                !hm.get(list.get(i)).containsKey(list.get(i + 1)))
                return false;
            sum += hm.get(list.get(i)).get(list.get(i + 1));
        }
        return sum == list.get(0);
    }
}

// } Driver Code Ends


class Solution {
    //Your Code Start
       static class Pair {
        int node, weight;
        Pair(int node, int weight) {
            this.node = node;
            this.weight = weight;
        }

}
    public List<Integer> shortestPath(int n, int m, int edges[][]) {
        //  Code Here.
                // Create adjacency list
        List<List<Pair>> adjacencyList = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adjacencyList.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            adjacencyList.get(edge[0] - 1).add(new Pair(edge[1] - 1, edge[2]));
            adjacencyList.get(edge[1] - 1).add(new Pair(edge[0] - 1, edge[2]));
        }

        PriorityQueue<Pair> minHeap = new PriorityQueue<>(Comparator.comparingInt(p -> p.weight));
        minHeap.add(new Pair(0, 0));
        int[] distances = new int[n];
        Arrays.fill(distances, Integer.MAX_VALUE);
        distances[0] = 0;
        int[] predecessors = new int[n];
        Arrays.fill(predecessors, -1);
        predecessors[0] = 0;

        while (!minHeap.isEmpty()) {
            int currentNode = minHeap.poll().node;
            for (Pair neighbor : adjacencyList.get(currentNode)) {
                int nextNode = neighbor.node;
                int weight = neighbor.weight;
                if (distances[nextNode] > distances[currentNode] + weight) {
                    distances[nextNode] = distances[currentNode] + weight;
                    predecessors[nextNode] = currentNode;
                    minHeap.add(new Pair(nextNode, distances[nextNode]));
                }
            }
        }

        if (distances[n - 1] == Integer.MAX_VALUE) return Collections.singletonList(-1);

        List<Integer> ans = new ArrayList<>();
        for (int node = n - 1; node != 0; node = predecessors[node]) {
            ans.add(node + 1);
        }
        ans.add(1);
        ans.add(distances[n - 1]);
        Collections.reverse(ans);

        return ans;
    }
//Your Code End

 }
