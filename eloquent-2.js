/*                Looping a Triangle
 ================================================== */

 var myTriangle = "#";
 while(myTriangle.length<7) {
   console.log(myTriangle);
   myTriangle+="#";
 }

 /*                FizzBuzz
  ================================================== */
  for(i=1; i<=100; i++) {
    if(i%3==0 && i%5==0){
      console.log("FizzBuzz");
    }
    else if(i%3==0){
      console.log("Fizz");
    }
    else if(i%5==0){
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }

  /*                Chess Board
   ================================================== */

   var rows = 1;
   var cols = 1;
   var squares = " ";
   var size = 8;

   while (rows <=size) {
     while(cols<=size){
       if((rows+cols)%2==0){
         squares = squares + " ";
       }
       else {
         squares = squares + "#";
       }
       cols++;
     }
     console.log(squares);
     squares = " ";
     cols=1;
     rows++;
   }
