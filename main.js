//const poppo = JSON.parce(databaseString)
//const obj1 = JSON.stringify(databaseString)

//
//Dato il seguente oggetto in JavaScript, convertilo in
// una stringa JSON.

const utente = {
  nome: "Alice",
  eta: 25,
  hobby: ["leggere", "giocare ai videogiochi", "fare escursioni"],
  indirizzo: {
    via: "123 Via degli Aceri",
    citta: "Paese delle Meraviglie",
  },
};

//esercizio 4
//Utilizza la distrutturazione degli oggetti per estrarre la `via` e la `citta` dall'oggetto `indirizzo` all'interno dell'oggetto `utente`.

const {
  indirizzo: { via },
  indirizzo: { citta },
} = utente;
console.log(via, citta);
const obj1 = JSON.stringify(utente);

//Converti la seguente stringa JSON in un oggetto JavaScript
// e registra l'`email` e l'`id` nella console.

//'{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}'

const obj2 = '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}';

const johnDoe = JSON.parse(obj2);
const { nome, email } = johnDoe;

console.log(nome, email);

//Utilizza la distrutturazione degli oggetti per estrarre il `titolo` e l'`anno` dal seguente oggetto e registrarli nella console.

const film = {
  titolo: "Inception",
  regista: "Christopher Nolan",
  anno: 2010,
  valutazione: 8.8,
};

const { titolo, regista, anno, valutazione } = film;

console.log(titolo, anno);

// esercizio 6: Utilizza la distrutturazione degli oggetti per estrarre il `nome` e l'`eta` dall'oggetto `persona`. Se l'`eta` non è fornita, dovrebbe avere un valore predefinito di `30`.

const persona = {
  nomea: "Bob",
};
const etaDefault = 30;

const { nomea, eta = etaDefault } = persona;

console.log(nomea, eta);
