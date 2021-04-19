//Solve using anonymous function and IIFE

//Print odd numbers in an array
let arr = [1,2,3,4,5,6];
(function (array) {
    for(let i of array){
        if(i%2!==0){
            console.log(i)
        }
    }
})(arr);

//Convert all the strings to title caps in a string array
let strArr=["str1","str2","str3"];
(function(array){
    for(i=0;i<array.length;i++){
        let tempArr=array[i].split("")
        array[i]=tempArr[0].toUpperCase()
        tempArr.splice(0,1)
        array[i]+=tempArr.join("")
    }
})(strArr)

console.log(strArr)

//Sum of all numbers in an array 
let arr = [1,2,3,4,5];
let sum=function(arr){
    let s=0;
    for(let i of arr){
        s+=+i;
    }
    return s;
}
console.log(sum(arr))

//Return all the prime numbers in an array
let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
let prime=function(arr){
    let primeArr=arr.filter((ele)=>{
        if (ele==1){return false;}
        if (ele==2){return true;}
        else{
            let flag=1;
            for(i=2;i<ele;i++){
                if(ele%i===0){
                    flag=0;
                    return false;
                }
            }
            if(flag===1){
                return true;
            }
            
            
        }
    })
    return primeArr;
}
let res=prime(arr)
console.log("Prime numbers are : "+res)


//Return all the palindromes in an array
let arr=["eye","alpha","level"];
let palindrome=function(arr){
    let palArr=arr.filter((ele)=>{
        if(ele===ele.split("").reverse().join("")){
            return true
        }
    })
    return palArr
}
let res=palindrome(arr)
console.log(res)


//Remove duplicates from an array
let arr=[2,3,4,5,6,2,3]
let unique=function(arr){
    let outputArr=[]
    for(i=0;i<arr.length;i++){
        if(outputArr.includes(arr[i])){
            continue;
        }
        else{
            outputArr.push(arr[i])
        }
    }
    console.log(outputArr)
}
unique(arr);

//Rotate an array by k times and return the rotated array
let arr=["a","b","c","d"];
let k=5;
(function(arr,k){
    for(i=0;i<k;i++){
        arr.reverse();
    }
    console.log(arr)
})(arr,k)