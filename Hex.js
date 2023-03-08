
const btn = document.getElementById('btn');

const color = document.querySelector(".color")
btn.addEventListener('click', function(){

    const corAleatoria = gerarCor();

    document.body.style.backgroundColor = corAleatoria;
    
    color.textContent = corAleatoria;

});


btn.addEventListener('click', ()=>{

    const corAleatoria = gerarCorHexadecimal();

    document.body.style.backgroundColor = corAleatoria;
    
    color.textContent = corAleatoria;

});



function gerarCorHexadecimal(){

    let curto = parseInt(Math.random())

  const max_hex = curto ? 0xFFF : 0xFFFFFF;

  return '#' + parseInt((Math.random() * max_hex)).toString(16).padStart(curto ? 3 : 6, '0');

}
