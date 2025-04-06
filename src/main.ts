/* Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

Se è una stringa: stampala in maiuscolo

Se è un numero: moltiplicalo per due e stampalo

Se è un booleano: stampa “Sì” o “No” in base al suo valore

In tutti gli altri casi: stampa “Tipo non supportato” */

const data: unknown = 'ciao'; // Cambia questo valore per testare altri tipi
// const data: unknown = 5;
// const data: unknown = true;
// const data: unknown = null;
// const data: unknown = undefined;

function handleData(data: unknown) {
    switch (typeof data) {
        case 'string':
            console.log(data.toUpperCase());
            break;
        case 'number':
            console.log(data * 2);
            break;
        case 'boolean':
            console.log(data ? 'Sì' : 'No');
            break;
        default:
            console.log('Tipo non supportato');
    }
}
data;

/* Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

nome → stringa
cognome → stringa
annoNascita → numero
sesso → Può essere solo "m" o "f".
anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018]) */

type Dipendente = {
    nome: string;
    cognome: string;
    annoNascita: number;
    sesso: 'm' | 'f';
    anniDiServizio: number[];
};

const dipendente: Dipendente = {
    nome: 'Mario',
    cognome: 'Rossi',
    annoNascita: 1980,
    sesso: 'm',
    anniDiServizio: [2010, 2012, 2015, 2018],
};

console.log(dipendente);

/* Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:

Developer
livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
ProjectManager
teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto). */

type Developer = Dipendente & {
    livelloEsperienza: 'Junior' | 'Mid' | 'Senior';
    linguaggi?: string[];
    certificazioni: string[];
};
type ProjectManager = Dipendente & {
    teamSize: number | null;
    budgetGestito?: number;
    stakeholderPrincipali: string[];
};
const developer: Developer = {
    nome: 'Luca',
    cognome: 'Bianchi',
    annoNascita: 1990,
    sesso: 'm',
    anniDiServizio: [2015, 2016, 2017],
    livelloEsperienza: 'Mid',
    linguaggi: ['JavaScript', 'TypeScript'],
    certificazioni: ['AWS Certified Developer', 'Scrum Master'],
};
const projectManager: ProjectManager = {
    nome: 'Sara',
    cognome: 'Verdi',
    annoNascita: 1985,
    sesso: 'f',
    anniDiServizio: [2012, 2013, 2014],
    teamSize: 5,
    budgetGestito: 100000,
    stakeholderPrincipali: ['Cliente A', 'Fornitore B'],
};
console.log(developer);
console.log(projectManager);
