let botao1 = document.querySelector('#btn1');

botao1.onclick = function(){
    
    console.log("chegou até aqui");

    let valorInicial = parseFloat(document.querySelector('#a1').value);
    let razao = parseFloat(document.getElementById('razao').value);
    let termos = parseFloat(document.querySelector('#termos').value);
    let resultado = document.querySelector('#resultado');

    let valores = [];
    valores.push(valorInicial);
    
    let mensagem = `${valorInicial}`;
    let soma = valorInicial;
    
    for(let i=1; i<termos; i++){
    
        valores[i] = valores[i - 1] + razao;
    
        mensagem += `&nbsp;&nbsp;&nbsp; ${valores[1]}`;
    
        soma += valores[i];
    
    }
    
    let somaPA = soma;
    
    resultado.innerHTML = `<br>
    <p> A P.A. é: </p>
    <p> ${mensagem} </p> <hr>
    <p> A soma dos elementos da P.A é: ${somaPA} </p>
    
    `
}

function limpar(){

    document.querySelector('#resultado').innerHTML = 'P.A vazia';
    document.querySelector('#a1').value = '';
    document.querySelector('#razao').value = '';
    document.querySelector('#termo').value = '';
    
}

