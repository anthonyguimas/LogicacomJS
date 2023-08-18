const nomeTurista = prompt("Qual é o seu nome?");
let cidades = "";
//prompt("Você já visitou alguma cidade fora de seu Estado? ");  ======= escrevi da maneira errada
let contagem = 0;

let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)");

while (continuar === "Sim") {
  let cidade = prompt("Quais são as cidades que você já visitou?");
  cidades += " - " + cidade + "\n";
  contagem++; // Aqui fica cidade mais 1 por isso o ++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
  "Nome: " +
    nomeTurista +
    "\nQuantidades de cidades visitadas: " +
    contagem +
    "\nCidades visitadas:\n" +
    cidades
);
/*
var cidade = true;
if ((cidade = true)) {
  alert("Que legal quais são as cidades que você já visitou?");
} else {
  var cidade = false;
  alert("Obrigado pela resposta!");
}
alert(cidade);
*/

/*
if (cidade === Sim) {
  alert("Que legal quais são elas? ");
} else {
  alert("Obrigado pela resposta!");
}

alert(nomeTurista);
*/
