const datiStudente = document.getElementById("dati-studente");
const datiArrayStudenti = document.getElementById("dati-array-studenti");
const nomeNuovoStudente = document.getElementById("nome-studente");
const congnomeNuovoStudente = document.getElementById("cognome-studente");
const etaNuovoStudente = document.getElementById("eta-studente");
const createBtn = document.getElementById("new-student-btn");

createBtn.addEventListener("click", (e) => {creaNuovoStudente(e)})

// Oggetto che descrive uno studente
var studente1 = {
    "nome": "Mario",
    "cognome": "Rossi",
    "età": 21
};

// Stampo attraverso il for tutte le proprietà dello studente1
for (var key in studente1) {
    let parag = document.createElement("p");
    parag.innerText = key + ": " + studente1[key];
    datiStudente.appendChild(parag);
}

// Creo array di oggetti studenti
var studenti = [
    {
        'nome': 'Mario',
        'cognome': 'Rossi',
        'età': 21
    },
    {
        'nome': 'Lucia',
        'cognome': 'Bianchi',
        'età': 24
    },
    {
        'nome': 'Enrico',
        'cognome': 'Verdi',
        'età': 20
    },
    {
        'nome': 'Tiziana',
        'cognome': 'Blu',
        'età': 30
    },
    {
        'nome': 'Tizia',
        'cognome': 'Incognita',
        'età': 37
    }
];

// Ciclo nell'array studenti e mostro i valori di ogni oggetto.
mostraStudenti();

function mostraStudenti() {
    datiArrayStudenti.innerHTML = "";
    for (var key in studenti) {
        let parag = document.createElement("p");
        parag.innerText = studenti[key].nome + " " + studenti[key].cognome + ", " + studenti[key].età + " anni.";
        datiArrayStudenti.appendChild(parag);
    }
}

function creaNuovoStudente(e) {
    e.preventDefault();
    let nome = nomeNuovoStudente.value;
    let cognome = congnomeNuovoStudente.value;
    let eta = etaNuovoStudente.value;

    studenti.push(
        {
            'nome': nome,
            'cognome': cognome,
            'età': eta
        }
    );

    nomeNuovoStudente.value = "";
    congnomeNuovoStudente.value = "";
    etaNuovoStudente.value = "";
    mostraStudenti();
}