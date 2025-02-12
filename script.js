var close = document.querySelector('.close');
close.addEventListener('click', () =>{
   close.style.backgroundColor = 'red';
});

function messi(){
   var messi = document.getElementById('refus').style.opacity='1';
}
   
function cr7(){
   var cr7 = document.getElementById('accept').style.opacity='1';
}




ScrollReveal({ 
   reset: true,
   distance: '80px',
   duration: 2000,
   deplay: 200
 });
 ScrollReveal().reveal('.content', { origin:'top'});




