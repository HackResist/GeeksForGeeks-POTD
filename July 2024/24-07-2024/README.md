 [Go To Problem](https://www.geeksforgeeks.org/problems/check-for-bst/1)

# Check for BST

<div align="center">
  <strong> Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy:25.37%</strong>    
               <strong>Points: 2</strong>
</div>

Given the root of a binary tree. Check whether it is a BST or not.

**Note:** We are considering that BSTs can not contain duplicate Nodes.

 A BST is defined as follows:

   - The left subtree of a node contains only nodes with keys less than the node's key.
   
   - The right subtree of a node contains only nodes with keys greater than the node's key.
   
   - Both the left and right subtrees must also be binary search trees.

### 💡Example 1:
<pre>
<strong>Input:</strong> 
   2
 /    \
1      3
        \
         5
<strong>Output:</strong> true
<strong>Explanation:</strong> The left subtree of every node contains smaller keys and right subtree of every node contains greater. Hence, the tree is a BST.
</pre>

### 💡Example 2:

<pre>
<strong>Input:</strong>  
  2
   \
    7
     \
      6
       \
        9
<strong>Output:</strong> false 
<strong>Explanation:</strong> Since the node with value 7 has right subtree nodes with keys less than 7, this is not a BST. 
  
</pre>

### 💡Example 3:

<pre>
<strong>Input:</strong>  
   10
 /    \
5      20
      /   \
     9     25
<strong>Output:</strong> false 
<strong>Explanation:</strong> The node is present in the right subtree of 10, but it is smaller than 10.
  
</pre>


## Expected Time Complexity:
```O(n)```
## Expected Space Complexity: 
```O(Height of the tree)```
where n is the number of nodes in the given tree

## Constraints: 
1 ≤ Number of nodes ≤ 10<sup>5</sup>

1 ≤ Data of a node ≤ 10<sup>5</sup>

## Company Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=VMWare"><img src="https://img.shields.io/badge/VMWare-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=607078&color=607078"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Flipkart"><img src="https://img.shields.io/badge/Flipkart-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=2874A6&color=2874A6"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Accolite"><img src="https://img.shields.io/badge/Accolite-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=1A237E&color=1A237E"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=FF9900&color=FF9900"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=0078D7&color=0078D7"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=OYORooms"><img src="https://img.shields.io/badge/OYO_Rooms-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=E42313&color=E42313"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Samsung"><img src="https://img.shields.io/badge/Samsung-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=1428A0&color=1428A0"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Snapdeal"><img src="https://img.shields.io/badge/Snapdeal-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=E21737&color=E21737"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=FactSet"><img src="https://img.shields.io/badge/FactSet-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=007CC1&color=007CC1"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Hike"><img src="https://img.shields.io/badge/Hike-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=0079FF&color=0079FF"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=MakeMyTrip"><img src="https://img.shields.io/badge/MakeMyTrip-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=F34336&color=F34336"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=OlaCabs"><img src="https://img.shields.io/badge/Ola_Cabs-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=000000&color=000000"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Walmart"><img src="https://img.shields.io/badge/Walmart-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=0071CE&color=0071CE"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=GoldmanSachs"><img src="https://img.shields.io/badge/Goldman_Sachs-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=E8E9EA&color=E8E9EA"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=MAQSoftware"><img src="https://img.shields.io/badge/MAQ_Software-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=333333&color=333333"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Adobe"><img src="https://img.shields.io/badge/Adobe-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=FF0000&color=FF0000"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Linkedin"><img src="https://img.shields.io/badge/Linkedin-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=0077B5&color=0077B5"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Qualcomm"><img src="https://img.shields.io/badge/Qualcomm-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=3253DC&color=3253DC"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=BoomerangCommerce"><img src="https://img.shields.io/badge/Boomerang_Commerce-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=FF5722&color=FF5722"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=GreyOrange"><img src="https://img.shields.io/badge/GreyOrange-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=444444&color=444444"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Wooker"><img src="https://img.shields.io/badge/Wooker-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=0C74DA&color=0C74DA"/></a>
</p>

## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Binary%20Search%20Tree"><img src="https://img.shields.io/badge/Binary%20Search%20Tree-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=8B0000&color=8B0000" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Tree"><img src="https://img.shields.io/badge/Tree-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=228B22&color=228B22" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=FF4500&color=FF4500" /></a>
</p>



## Codes:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/24-07-2024/Check%20for%20BST.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/24-07-2024/Check%20for%20BST.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/24-07-2024/Check%20for%20BST.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/24-07-2024/Check%20for%20BST.cs)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/24-07-2024/Check%20for%20BST.js)
