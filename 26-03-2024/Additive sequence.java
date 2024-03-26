//{ Driver Code Starts
import java.util.*;

public class GFG {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            String s = sc.next();
            Solution ss = new Solution();
            boolean result = ss.isAdditiveSequence(s);
            System.out.println((result == true ? 1 : 0));
        }
        sc.close();
    }
}
// } Driver Code Ends




// User function Template for Java
class Solution {
     // Your Code Start
   public boolean isAdditiveSequence(String n) {
        // code here
        int digit = 1;
        boolean res = false;
        while(digit <= n.length()/3 && digit <=9 ){
            int second = digit;
            while(second <= (n.length()-digit)/2 && second <=9){
               // System.out.println("second === >" +second);
                boolean pathCheck = rec( n.substring(digit+second ,n.length()), n.substring(0,digit), n.substring(digit,digit+second), second);            //System.out.println("CHECK "+ pathCheck);
                res= res || pathCheck ;
                second++;
            }
            digit++;
        }
        return res;
    }
    
    public boolean rec(String sub,String n1,String n2 ,int digit){
        
        
        if(sub.length() <= digit){
            
            return (Long.parseLong(n1)+Long.parseLong(n2) == Long.parseLong(sub));
           
        }else{
            
            long num1 =(n1!="")?Long.parseLong(n1):-1;
            long num2 = (n2!="")?Long.parseLong(n2):-1;
            long sum1 = (digit+1 <= sub.length() && sub.substring(0, digit+1)!= "")?Long.parseLong(sub.substring(0, digit+1)):-1;
            long sum2 = (sub.substring(0, digit)!= "")?Long.parseLong(sub.substring(0, digit)):-1;
            boolean inc1 =  (num1+num2 == sum1);    
            boolean inc0 =  (num1+num2== sum2);    
            
            if(inc1){
                 if(digit+1 < sub.length()-1){
                    return rec( sub.substring(digit+1,sub.length()),n2,sub.substring(0,digit+1) , digit+1);
                 }else{
                    return true; 
                 }
            }else if(inc0){
                 if(digit < sub.length()-1){
                    return  rec( sub.substring(digit ,sub.length()),n2,sub.substring(0, digit) , digit);
                 }else{
                    return true;
                 }
            }else{
                 return false;    
              //Your Code End
            }

        }
        
    }

 
}
