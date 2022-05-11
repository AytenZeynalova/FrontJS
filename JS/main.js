

console.log("task1")

let numsarr=[-10,-20,-3,-15];

let maxnum=FindBiggest(numsarr);

function FindBiggest(nums){
    
    let max=nums[0];
    for (let i=0;i<nums.length;i++){
        if (nums[i]>max) {

            max=nums[i];
            
            
        } 
        
    }
    console.log(max);
}

console.log("task2")



let numbers=[-10,-20,-3,-15];
let sumofarr=SumEvenNumbers(numbers);
console.log(sumofarr)


function SumEvenNumbers(arr){
      let sum = 0;
     for(let i = 0; i < arr.length; i++){
           if(arr[i]%2==0){
               sum+=arr[i];
           }
    }
    return sum; }


    console.log("task3")

    do{
           var num1 = prompt("Eded daxil edin :")    
         }
         while(isNaN(num1))
        
        
         do{
            var num2 = prompt("Ededin quvvetini daxil edin :")    
        }
         while(isNaN(num2))
        
         console.log(Math.pow(num1,num2))