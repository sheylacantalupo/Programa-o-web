console.log("SEXTOU")

let aluna = {
    nome: 'Joyce',
    idade: 19,
    matricula: 12345
}
// var global
// let local


var i=0;

while(i<10){

    console.log("SEXTOU");
    i++
}

print = console.log;

for(let i = 10; i >= 0; i--){

    print(i);

}

print(2==="2");


num = parseInt(prompt("Digite um número: "))


num % 2 === 0 ? alert("par"): alert("ímpar");


function dobro(num){
    return num*2;
}

function ecreveHTML(texto){
    document.writeln(texto);
}

function print(texto){
    console.log(texto);
}


let n = 3;

let texto1 = `<h1>Olha que legal, veio o JS</h1>
<hr>
<p> O dobro de ${n} é: ${dobro(n)}</p>
`
ecreveHTML(texto1)
print(texto1)