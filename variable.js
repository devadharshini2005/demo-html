/*rest
let a={
   name:["abi","ooo","jdjdj","kkkk"],
   age:29,
   class:"AIDS"
}
let ba={...a};
let {name,age,...c}=a;
console.log(name)*/
/*callback hell
function attentence(callback){
   setTimeout(()=>{
      console.log("Attendence taken");
      callback();
   },2000)

}function lunch(callback){
   setTimeout(()=>{
      console.log("lunch finished");
      callback();
   },2000)
}
function goingtoohome(callback){
   setTimeout(()=>{
   console.log("went home");
   callback();
   },2000)
}
attentence(()=>{lunch(()=>{goingtoohome(()=>{console.log("all completed")})})})*/

//promises used to overcome the callback hell

/*function a()
{
   return new Promise((success,failure)=>{
      let conditon=false
      if(conditon)
      {
success("this is fine");
      }
else{
failure("this is error");
}
   });
}
a().then((output)=>{console.log(output)})
   .catch((error) => {
   console.error(error); // Logs the error message when the promise rejects
 });*/
 


  
    
// async is used to run the function faster without waiting for the execution of other fuction wait untill the output of the function occurs
//sometimes there is no use of async if the function need the output of the previous function
//await can be used as many times needed is uesd for wait for a function upto that function complete its work
/*let attendence=()=>"this is deva"

async function finalday(){
   try{
let a=await attendence()
console.log(a);

}
catch(error){
   console.error(error);
}

}
finalday();*/


/*

   //callback example
function process(a,callback)
{
   setTimeout(()=>{
      console.log(`the file name is ${a} is being processed`);
      callback(a);
   },1000);
}
function down(a,callback)
{
   setTimeout(()=>{
      console.log(`the file name is ${a} got downloaded`);
      callback(a);
   },1000);
}
function last(a)
{
      console.log(`the file name is ${a} download completed`);
}
process("Ab",(a)=>{down(a,(a)=>{last(a)})})*/
//what is react? whether it is single page application or not ? what is single plage application?
//binary operator
let date=28;
let month=2;
let year=2014;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
{

  if(month==2&&date==29)
  {
     console.log("valid date");
  }
}
else{
if(month<=12&&month>=1)
{
   if(month==1||month==3||month==5||month==7||month==8||month==10||month==12)
   {
   if(date>=1&&date<=31)
   {console.log("valid date");}
   else{
      console.log("invalid date");
   }
   }
   else if(month==4||month==6||month==9||month==11)
      {
         if(date>=1&&date<=30)
         {
            console.log("valid date");
         }
         else{
            console.log("invalid date");
         }
      }
   else if(month==2)
   {
         if(date==28)
         {
            console.log("valid date");
         }
         else{
            console.log("invalid date");
         }
      }
      else{
         console.log("invalid date");
      }
   }
   else{
      console.log("invalid date");
   }
   }
  

