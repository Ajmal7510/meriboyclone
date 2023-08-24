function show(a,b){
   let element= document.getElementById("section-1");
   element.style.background=a;
   
   document.getElementById("btn-1").style.backgroundColor='red';
   document.getElementById("btn-2").style.backgroundColor='red';
   document.getElementById("btn-3").style.backgroundColor='red';
   
   let btnelement=document.getElementById(b);
   btnelement.style.backgroundColor='white';
   let img=document.getElementById("manju-img")
   if(b=='btn-1'){
      img.src="manju.png"
   }
   else{
      img.src="manju-2.png"
   }

   
} 

