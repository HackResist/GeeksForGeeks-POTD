//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());
        while (tc-- > 0) {
            String[] inputLine;
            int n = Integer.parseInt(br.readLine().trim());
            char[] nuts = new char[n], bolts = new char[n];
            inputLine = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                nuts[i] = (inputLine[i].charAt(0));
            }
            inputLine = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                bolts[i] = (inputLine[i].charAt(0));
            }

            new Solution().matchPairs(n, nuts, bolts);
            for (int i = 0; i < n; i++) {
                System.out.print(nuts[i] + " ");
            }
            System.out.println();
            for (int i = 0; i < n; i++) {
                System.out.print(bolts[i] + " ");
            }
            System.out.println();
        }
    }
}

// } Driver Code Ends




// User function Template for Java

class Solution {
    void matchPairs(int n, char nuts[], char bolts[]) {
      //Your Code Start
     // Define the order of elements
           // Define the order of elements
        char[] order = {'!', '#', '$', '%', '&', '*', '?', '@', '^'};
        
        // Create a map for the order to index mapping
        Map<Character, Integer> orderMap = new HashMap<>();
        for (int i = 0; i < order.length; i++) {
            orderMap.put(order[i], i);
        }
        
        // Convert nuts and bolts arrays to Character arrays
        Character[] nutsCharacter = new Character[n];
        Character[] boltsCharacter = new Character[n];
        for (int i = 0; i < n; i++) {
            nutsCharacter[i] = nuts[i];
            boltsCharacter[i] = bolts[i];
        }
        
        // Sort the nuts array according to the defined order
        Arrays.sort(nutsCharacter, new Comparator<Character>() {
            @Override
            public int compare(Character a, Character b) {
                return orderMap.get(a) - orderMap.get(b);
            }
        });
        
        // Sort the bolts array according to the defined order
        Arrays.sort(boltsCharacter, new Comparator<Character>() {
            @Override
            public int compare(Character a, Character b) {
                return orderMap.get(a) - orderMap.get(b);
            }
        });
        
        // Convert the sorted Character arrays back to char arrays
        for (int i = 0; i < n; i++) {
            nuts[i] = nutsCharacter[i];
            bolts[i] = boltsCharacter[i];
        }
      //Your Code End
    }
}

