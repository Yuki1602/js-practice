
const btn = document.getElementById('btn-inc');
const btn1 = document.getElementById('btn-des');
const btn2 = document.getElementById('btn-reset');
const color= document.querySelector('.counter');
let counter = 0;

btn.addEventListener('click', function(){

    counter+=1;
    color.textContent = counter;

}); 

btn1.addEventListener('click', function(){

    counter-=1;
    color.textContent = counter;

}); 

btn2.addEventListener('click', function(){

    counter = 0;
    color.textContent = counter;

}); 

   
   
    