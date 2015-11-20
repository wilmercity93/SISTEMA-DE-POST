var clic = 1;
function mostrar(){ 
   if(clic==1){

   document.getElementById("adicionarform").style.display = 'block';
   clic = clic + 1;

   } else{
       document.getElementById("adicionarform").style.display = 'none';      
    clic = 1;
   }   
}