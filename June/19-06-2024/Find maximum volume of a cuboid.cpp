//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    double maxVolume(double perimeter, double area) {
      //Your Code Start
       // Calculate the length of one side of the base
        double len = (perimeter - sqrt((perimeter * perimeter) - 24 * area)) / 12.0;
        
        // Calculate the volume of the cuboid
        double vol = len * len * ((perimeter / 4.0) - 2 * len);
        
        // Round the volume to two decimal places
        return round(vol * 100.0) / 100.0;
      //Your Code End
    }
};


//{ Driver Code Starts.
int main() {
    long long int t;
    cin >> t;
    while (t--) {
        double perimeter, area;
        cin >> perimeter >> area;
        // if (area == 5 and parameter == 15) {
        //     cout << "0.46" << endl;
        //     return 0;
        // }
        Solution ob;
        double ans = ob.maxVolume(perimeter, area);
        cout.precision(2);
        cout << fixed << ans << "\n";
    }
}
// } Driver Code Ends
