console.log("Hello world");
 for( i = 0; i < 3; i++) {
     setTimeout(function(){
         console.log(i)
     });
 }
 i = 100;
 for (let i = 0; i < 3; i++) {
     setTimeout(function () { console.log(i) });
 } 

 for (var i = 0; i < 3; i++) {
      console.log(i) ;
 }
 function sum(op1, op2) {
     let res = op1 + op2;
     return res;
 }
 let op1 = 10; 
 let op2 = 20;
 let res = sum(op1, op2);
 console.log(res)