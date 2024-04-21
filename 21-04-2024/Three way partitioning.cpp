//{ Driver Code Starts
//Initial template for C++

#include <bits/stdc++.h>
#include <unordered_map>
using namespace std;

// } Driver Code Ends
//User function template for C++

//Your Code Start
class Solution{   
public:
    // Function to partition the array around the range such 
    // that array is divided into three parts.
    void threeWayPartition(vector<int>& array, int a, int b)
    {
        int low = 0; // Pointer for elements less than a
        int high = array.size() - 1; // Pointer for elements greater than b
        int i = 0; // Pointer for elements between a and b

        // Traverse the array
        while (i <= high)
        {
            if (array[i] < a)
            {
                // If the current element is less than a, swap it with the element at the low index
                swap(array[i], array[low]);
                low++; // Move the low pointer to the right
                i++; // Move to the next element
            }
            else if (array[i] > b)
            {
                // If the current element is greater than b, swap it with the element at the high index
                swap(array[i], array[high]);
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
};
//Your Code End

//{ Driver Code Starts.

int main() {
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin>>N;
        
        vector<int> array(N);
        unordered_map<int,int> ump;
        
        for(int i=0;i<N;i++){
            cin>>array[i];
            ump[array[i]]++;
        }
        
        int a,b;
        cin>>a>>b;
        
        vector<int> original = array;

        int k1=0,k2=0,k3=0;
        int kk1=0;int kk2=0;int kk3=0;
        
        for(int i=0; i<N; i++)
        {
            if(original[i]>b)
                k3++;
            else if(original[i]<=b and original[i]>=a)
                k2++;
            else if(original[i]<b)
                k1++;
        }
        
        Solution ob;
        ob.threeWayPartition(array,a,b);
      
        for(int i=0;i<k1;i++)
        {
            if(array[i]<b)
            kk1++;
        }
        
        for(int i=k1;i<k1+k2;i++)
        {
            if(array[i]<=b and array[i]>=a)
            kk2++;
            
        }
        
        for(int i=k1+k2;i<k1+k2+k3;i++)
        {
            if(array[i]>b)
            kk3++;
        }
        bool ok = 0;
        if(k1==kk1 and k2 ==kk2 and k3 == kk3)
            ok = 1;
        
        for(int i=0;i<array.size();i++)
            ump[array[i]]--;
        
        for(int i=0;i<array.size();i++)
            if(ump[array[i]]!=0)
                ok=0;
        
        if(ok)
            cout<<1<<endl;
        else
            cout<<0<<endl;
        
    }
    
    return 0;
}

// } Driver Code Ends
