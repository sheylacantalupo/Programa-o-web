let form = document.querySelector('form');
let ul = document.querySelector('ul');


form.onsubmit = function(evento){

    evento.preventDefault();
    console.log('Legal! Clicou no botão Adcionar!');

    let input = form.querySelector('input');
    let valor = input.value;
    console.log(valor);

    if(valor== "") return;
    let li = document.createElement('li');
    li.textContent = valor;
    let botao = document.createElement('button');
    botao.textContent = 'X';
    botao.setAttribute('class', 'botao');

    li.appendChild(botao);
    ul.appendChild(li);
    input.value = "";

}

