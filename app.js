

var a = prompt(" enter the number");
if (a % 3 === 0) 
{
    console. log(alert("number is divisible by 3"));
    } 
    else 
    {
    console. log(alert("number is not divisible by 3"));
    }

    



var b=prompt("enter any number");
    if(b % 2 === 0){
alert("the number is even");
    }
    else
    {
alert("the number is odd");
    }





var p = prompt(" enter the age");

if(p > 18 ){
alert("older enough");
}
else
{
alert("too younger");
}






 var num1, num2;
num1 = prompt("Input the First integer", );
num2 = prompt("Input the second integer", );
                                                 
if(num1>num2) 
  { 
  console.log(alert( "The larger between "+ num1+ " and "+ num2+ " is "+ num1+ "." ));
  }   
else if(num2>num1) 
  {
  console.log( alert("The larger between "+ num1+" and "+ num2+ " is "+ num2+ "."));
  }                  
else
  {
   console.log(alert("The values "+ num1+ " and "+num2+ " are equal."));
  }
  







var n= prompt("enter any Number, String & Boolean");

if(n >= 0||n<0 )
{
console.log(alert("that is number"));
}
else 
{
console.log(alert("that is string"));
}





var tim=prompt("enter time in 24 hours format between 0000 to 2400 ");
if(tim>0000 && tim<1200){
  console. log(alert("good morning"));
}
else if(tim>=1200 && tim<1700){
    console. log(alert("good afternoon"));
}
else if(tim>=1700 && tim<2100){
      console. log(alert("good evening")); 
}
else if(tim>=2100 && tim<2400){
        console. log(alert("good night")); 
}
else{
  console. log(alert("please type correct format in 24 hours")); 
}







var year=prompt("enter year");
if(year % 4==0){
  console. log(alert("leap year"));
}
else{
  console. log(alert("not a leap year"));
}





var paswrd = prompt("enter password HINT:true");
if (paswrd === "true") {
  console. log(alert("correct!"));
}
else{
  console. log(alert("your password is wrong"));
}







var comp=prompt("enter 5 for true");
if(comp!=5){
  console. log(alert("true! given number is not equal to 5"));
}
else{
  console. log(alert("false! given number is equal to 5"));
}







var vow=prompt("enter vowel");
if(vow=='a'||vow=='e'||vow=='i'||vow=='o'||vow=='u'){
  console. log(alert("vowel"));
}
else{
  console. log(alert("not a vowel"));
}






var tm=prompt("enter time in 24 hours");
if(tm>=6 && tm<=9){
  console. log(alert("breakfast is serverd"));
}
else if(tm>=11 && tm<=13){
    console. log(alert("time for lunch"));
}
else if(tm>=17 && tm<=20){
      console. log(alert("dinner time")); 
}
else{
  console. log(alert("sorry! you'll have to wait")); 
}








var nm=prompt("enter number");
if(nm>0){
  console. log(alert("positive"));
}
else if(nm<0){
    console. log(alert("negative"));
}
else if(nm==0){
      console. log(alert("zero")); 
}
else{
  console. log(alert("not a number")); 
}









var greeting;
 var hour = 19;
 if (hour < 18) {
 greeting = "Good day"
 alert(greeting);
}
 else{
 greeting = "Good evening"
 alert(greeting);
 } 





 var firstName = "abdur rahman";
if (firstName === "abdur rahman") {
 document.write("Hello abdur rahman!");
}
else
{
    document.write("you are not abdur rahman");
}