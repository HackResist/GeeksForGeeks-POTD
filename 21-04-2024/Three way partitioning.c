//{ Driver Code Starts
//Initial Template for C

#include <stdio.h>


// } Driver Code Ends
//User function Template for C

//Your Code Start
void threeWayPartition(int arr[], int n, int a, int b)
{
    int low = 0; // Pointer for elements less than a
    int high = n - 1; // Pointer for elements greater than b
    int i = 0; // Pointer for elements between a and b

    // Traverse the array
    while (i <= high)
    {
        if (arr[i] < a)
        {
            // If the current element is less than a, swap it with the element at the low index
            int temp = arr[i];
            arr[i] = arr[low];
            arr[low] = temp;
            low++; // Move the low pointer to the right
            i++; // Move to the next element
        }
        else if (arr[i] > b)
        {
            // If the current element is greater than b, swap it with the element at the high index
            int temp = arr[i];
            arr[i] = arr[high];
            arr[high] = temp;
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
//Your Code End

//{ Driver Code Starts.

int cnt[1000001];

int main()
{
    int t;
    scanf("%d", &t);
    while(t--)
    {
        int N;
        scanf("%d", &N);
        
        int array[N];
        
        memset(cnt, 0, sizeof(cnt));
        for(int i=0; i<N; i++) {
            scanf("%d", &array[i]);
            cnt[array[i]]++;
        }
        
        int a, b;
        scanf("%d", &a);
        scanf("%d", &b);
        
        int original[N];
        for(int i=0; i<N; i++)
            original[i] = array[i];

        int k1=0, k2=0, k3=0;
        int kk1=0; int kk2=0; int kk3=0;
        
        for(int i=0; i<N; i++)
        {
            if(original[i]>b)
                k3++;
            else if(original[i]<=b && original[i]>=a)
                k2++;
            else if(original[i]<b)
                k1++;
        }
        
        threeWayPartition(array, N, a, b);
      
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
        
        int ok = 0;
        if(k1==kk1 && k2 ==kk2 && k3 == kk3)
            ok = 1;
        
        for(int i=0; i<N; i++)
            cnt[array[i]]--;
        
        for(int i=0; i<N; i++)
            if(cnt[array[i]] != 0)
                ok=0;
        
        if(ok > 0)
            printf("1\n");
        else
            printf("0\n");
    }
    
    return 0;
}
// } Driver Code Ends
