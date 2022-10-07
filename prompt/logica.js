alert("Hoje tem prova!");

soma_notas = 0;

for(let i = 0; i <10> 0; i++){

    nota = parseInt(prompt("Digite uma nota:"));
    soma_notas += nota;

}

media = soma_notas/10;


let texto1 = `<p>Soma das notas: ${soma_notas}</p> Média= ${media}`
document.writeln(texto1);



