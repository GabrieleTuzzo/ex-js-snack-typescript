const data: unknown = 'ciao';
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
