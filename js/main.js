const nome = prompt("Inserisci il tuo nome:");
const cognome = prompt("Inserisci il tuo cognome:");
let colorePreferito = prompt("Inserisci il tuo colore preferito: ");

let insicurissimoPasswordGenerator = `
La password generata è...
${nome}${cognome}${colorePreferito}21
`;

console.log(insicurissimoPasswordGenerator);

document.getElementById("p-insicurissimo-password-generator").innerHTML = insicurissimoPasswordGenerator; 