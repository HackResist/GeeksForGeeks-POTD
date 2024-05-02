 [Go To Problem](https://www.geeksforgeeks.org/problems/serialize-and-deserialize-a-binary-tree/1)
# Serialize and deserialize a binary tree

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy : 51.67%</strong>    
               <strong>Points: 4</strong>
</div>

Serialization is to store a tree in an array so that it can be later restored and deserialization is reading tree back from the array. Complete the functions
 - **serialize()** : stores the tree into an array <strong>a</strong> and returns the array.
  - **deSerialize()** : deserializes the array to the tree and returns the root of the tree.

**Note**: Multiple nodes can have the same data and the node values are <strong>always positive integers</strong>. Your code will be correct if the tree returned by <strong>deSerialize(serialize(input_tree))</strong> is same as the input tree. Driver code will print the in-order traversal of the tree returned by deSerialize(serialize(input_tree)).

### 💡Example 1:
<pre>
<strong>Input:</strong>
       1
     /   \
    2     3
<strong>Output:</strong>  
    2 1 3
</pre>
### 💡Example 2:
<pre>

<strong>Input:</strong>
          10
       /    \
      20    30
    /   \
   40  60
<strong>Output:</strong> 
    40 20 60 10 30
</pre>
## Your Task:
  - The task is to complete two functions <strong>serialize</strong> which takes the root node of the tree as input and stores the tree into an array and <strong>deSerialize</strong> which deserializes the array to the original tree and returns the root of it.
## Expected Time Complexity:
 ``` O(Number of nodes).```
## Expected Space Complexity: 
```O(Number of nodes).```

## Constraints: 
1 <= Number of nodes <= 10<sup>4</sup>

1 <= Data of a node <= 10<sup>9</sup>

## Company Tag: 
<p align="left">

<a href="https://www.geeksforgeeks.org/explore/?company[]=Paytm"><img src="https://img.shields.io/badge/Paytm-10000?style=for-the-badge&logo=Paytm&logoColor=121481&labelColor=FDFFC2&color=5BBCFF"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Flipkart"><img src="https://img.shields.io/badge/Flipkart-10000?style=for-the-badge&logo=Flipkart&logoColor=121481&labelColor=FDFFC2&color=FFE800"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Accolite"><img src="https://img.shields.io/badge/Accolite-10000?style=for-the-badge&logo=Accolite&logoColor=FFFFFF&labelColor=322C2B&color=ff6600"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=&labelColor=FEFAF6&color=090907"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-10000?style=for-the-badge&logo=Microsoft&logoColor=121481&labelColor=FDFFC2&color=929292"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=MAQ%20Software"><img src="https://img.shields.io/badge/MAQ Software-10000?style=for-the-badge&logo=MAQ Software&logoColor=&labelColor=FEFAF6&color=C70039"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Adobe"><img src="https://img.shields.io/badge/Adobe-10000?style=for-the-badge&logo=Adobe&logoColor=FFFFFF&labelColor=322C2B&color=ff3300"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Linkedin"><img src="https://img.shields.io/badge/Linkedin-10000?style=for-the-badge&logo=Linkedin&logoColor=121481&labelColor=FDFFC2&color=108CF5"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Quikr"><img src="https://img.shields.io/badge/Quikr-10000?style=for-the-badge&logo=Quikr&logoColor=Ffd700&labelColor=FEFAF6&color=0E9B0E
"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Yahoo"><img src="https://img.shields.io/badge/Yahoo-10000?style=for-the-badge&logo=Yahoo&logoColor=Ffd700&labelColor=FEFAF6&color=7E3BE4"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=InMobi"><img src="https://img.shields.io/badge/InMobi-10000?style=for-the-badge&logo=InMobi&logoColor=Ffd700&labelColor=FEFAF6&color=0422FB"/></a>


## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Tree"><img src="https://img.shields.io/badge/Tree-258FFA?style=flat&logo=Tree&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
 
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/02-05-2024/Serialize%20and%20deserialize%20a%20binary%20tree.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/02-05-2024/Serialize%20and%20deserialize%20a%20binary%20tree.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/02-05-2024/Serialize%20and%20deserialize%20a%20binary%20tree.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/02-05-2024/Serialize%20and%20deserialize%20a%20binary%20tree.cs)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/02-05-2024/Serialize%20and%20deserialize%20a%20binary%20tree.js)


 
