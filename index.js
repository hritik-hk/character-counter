
function countWords(value){
   let len=value.length;
   
   let spaces=0;

   if(len===0){
      $(".word").text("Words: "+(spaces));
   }
    
   else{
      for(let i=0;i<value.length;i++){
         if(value[i]===" " && ((i+1)!==len && value[i+1]!==" ")){
            spaces++;
         }
      
         $(".word").text("Words: "+(spaces+1));
   }
  
     
   }
}

$(".text-box").on("input",function(event){

      let characterCount=event.target.value.length;

      //for character count
      $(".character").text("Characters: "+characterCount);

      //for twitter
      if(characterCount<=280){
         $(".twitter").css({"color":"black","font-size":"1.5rem"});
         $(".twitter").text("Twitter: "+characterCount+"/280");
      }
      else{
         $(".twitter").text("Twitter: "+characterCount+"/280");
         setTimeout(function(){
            $(".twitter").css({"color":"red","font-size":"1.6rem"});
         },100);
        
       }

       //for google
       if(characterCount<=300){
         $(".google").css({"color":"black","font-size":"1.5rem"});
         $(".google").text("Google: "+characterCount+"/300");
      }
      else{
         $(".google").text("Google: "+characterCount+"/300");
         setTimeout(function(){
            $(".google").css({"color":"red","font-size":"1.6rem"});
         },100);
        
       }

       //for word counting 

       countWords(event.target.value);
      
         
    
 });

 const date= new Date();
const currentYear=date.getFullYear();

$(".copyright").text("Copyright ©"+currentYear);



  function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    $(".time").text(currentTime);
    
  }
  setInterval(updateTime, 1000);
