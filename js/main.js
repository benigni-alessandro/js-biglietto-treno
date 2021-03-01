
var nome = prompt("Inserisci il tuo nome");
document.getElementById('nome').innerHTML = "Nome: " + nome;
console.log(nome);

var cognome = prompt("Inserisci il tuo cognome");
document.getElementById('cognome').innerHTML = "Cognome: " + cognome;
console.log(cognome);

var kilometri = parseFloat(prompt("Quanti km vuoi percorrere?"));
document.getElementById('kilometri').innerHTML = "Kilometri da percorrere: " + kilometri;
console.log(kilometri);
var anni = parseInt(prompt("Quanti anni hai?"));
document.getElementById('anni').innerHTML = "età: " + anni;
console.log(anni);

if (isNaN(kilometri) || (isNaN(anni))) {
  console.log("dammi dei valori validi")
} else if (anni < 18) {
  var prezzointero = kilometri * (21 / 100);
  var sconto20 = prezzointero * 20 / 100;
  var prezzo = prezzointero - sconto20;
  console.log(prezzo + " euro");
  document.getElementById('prezzo').innerHTML = "Importo biglietto: " + prezzo + "€";
} else if (anni > 65) {
  var prezzointero = kilometri * (21 / 100);
  var sconto40 = prezzointero * 40 / 100;
  var prezzo = prezzointero - sconto40;
  console.log(prezzo + " euro");
  document.getElementById('prezzo').innerHTML = "Importo biglietto: " + prezzo + "€";
}
else {
  var prezzo = kilometri * (21 / 100);
  console.log(prezzo + " euro");
  document.getElementById('prezzo').innerHTML = "Importo biglietto: " + prezzo + "€";
}
