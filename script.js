const calculate=document.getElementById('btn');

calculate.addEventListener("click",()=>{
    const firstInput=document.getElementById('first').value;
const secondInput=document.getElementById('second').value;
const res= document.getElementById('res')
 const Status=document.getElementById('status');

    // alert("hi")
    if(firstInput==""||secondInput==""){
    alert("At First Fill The Given Input Box Then Click The Calculte Button!!!!")
    // return;
    }
    else  if (firstInput.length<3||secondInput.length<3){
        alert("Please Enter More Than Three Chracter")
    }
    else{
        const  calculating=Math.floor(Math.random()*100);
        // const calculating_val=calculating.value;
      res.innerHTML= firstInput + " + " + secondInput + " = " + calculating + " % ";
    //   if(calculating>75||calculating<=100){
    //     Status.innerHTML="Your Are Best Couple!!!!"
    //     //   alert("hi")
    // }
    // else if(calculating>=50||calculating<75){
    //     Status.innerHTML="Your Relationship Is In Better Position!!!!"
        
        
    // }else if(calculating>=25||calculating<50){
    //     Status.innerHTML="Your Relationship Is In Good Position!!!!"
        
    // }else if(calculating>=0||calculating<25){
    //         Status.innerHTML="Your Relationship Is More Unstable!!!! (Iee Rista Apke Lie Nehi Hai Bhai/Behen Dusri Jaga Per Try Kare"
          

    //   }
    }
    firstInput.value=""
    secondInput.value=""
    setTimeout(function(){
        res.style.display="none";
    },3000)
    setTimeout(function(){
        Status.style.display="none";
    },3000)


})