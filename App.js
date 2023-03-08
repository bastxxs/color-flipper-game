
const btn = document.getElementById('btn');

const color = document.querySelector(".color")
btn.addEventListener('click', function(){

    const corAleatoria = gerarCor();

    document.body.style.backgroundColor = corAleatoria;
    
    color.textContent = corAleatoria;

});


btn.addEventListener('click', function(){

    const corAleatoria = gerarCor();

    document.body.style.backgroundColor = corAleatoria;
    
    color.textContent = corAleatoria;

});






function gerarCor(opacidade = 1) {

    let r = parseInt(Math.random() * 255);
 
    let g = parseInt(Math.random() * 255);
 
    let b = parseInt(Math.random() * 255);
 
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 
 }


