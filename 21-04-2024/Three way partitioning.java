//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String[] args)throws IOException {
        BufferedReader read= new BufferedReader(new InputStreamReader(System.in));
        int t  =Integer.parseInt(read.readLine());
         
        while(t-->0)
        {
            int N = Integer.parseInt(read.readLine());
            int array[] = new int[N];
            Map<Integer, Integer> mp = new HashMap<>();
            
            String input_line[] = read.readLine().trim().split(" ");
            for(int i=0;i<N;i++)
            {
                array[i] = Integer.parseInt(input_line[i]);
                if (mp.containsKey(array[i]))  
                { 
                    mp.put(array[i], mp.get(array[i]) + 1); 
                }  
                else
                { 
                    mp.put(array[i], 1); 
                } 
            }
            
            input_line = read.readLine().trim().split(" ");
            int a = Integer.parseInt(input_line[0]);
            int b = Integer.parseInt(input_line[1]);
        
            int original[] = new int[N];
            
            for(int i=0; i<N;i++)
            {
                original[i] = array[i];
            }

            int k1=0,k2=0,k3=0;
            int kk1=0;int kk2=0;int kk3=0;

            for(int i=0;i<N;i++)
            {
                if(original[i]>b)
                    k3++;
                else if(original[i]<=b && original[i]>=a)
                    k2++;
                else if(original[i]<b)
                    k1++;
            }
            Solution ob = new Solution();
            ob.threeWayPartition(array,a,b);

            for(int i=0;i<k1;i++)
            {
                if(array[i]<b)
                kk1++;
            }
            
            for(int i=k1;i<k1+k2;i++)
            {
                if(array[i]<=b && array[i]>=a)
                kk2++;
                
            }
            
            for(int i=k1+k2;i<k1+k2+k3;i++)
            {
                if(array[i]>b)
                kk3++;
            }
            Boolean ok = false;
            if(k1==kk1 && k2 ==kk2 && k3 == kk3)
                ok = true;

            for(int i=0;i<array.length;i++)
                mp.put(array[i], mp.get(array[i]) - 1);
            
            for(int i=0;i<array.length;i++)
                if(mp.get(array[i])!=0)
                    ok=false;
            
            if(ok)
                System.out.println(1);
            else
                System.out.println(0);
        }
    }
}

// } Driver Code Ends




//User function Template for Java
//Your Code Start
class Solution{
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    public void threeWayPartition(int array[], int a, int b)
    {
        int low = 0; // Pointer for elements less than a
        int high = array.length - 1; // Pointer for elements greater than b
        int i = 0; // Pointer for elements between a and b

        // Traverse the array
        while (i <= high)
        {
            if (array[i] < a)
            {
                // If the current element is less than a, swap it with the element at the low index
                int temp = array[i];
                array[i] = array[low];
                array[low] = temp;
                low++; // Move the low pointer to the right
                i++; // Move to the next element
            }
            else if (array[i] > b)
            {
                // If the current element is greater than b, swap it with the element at the high index
                int temp = array[i];
                array[i] = array[high];
                array[high] = temp;
                high--; // Move the high pointer to the left
                // Don't increment i, as we need to recheck the swapped element
            }
            else
            {
                // If the current element is between a and b, just move to the next element
                i++;
            }
        }
    }
}
//Your Code End
