

/*  Gioco dadi */

// Creazione numeri
let numGiocatore = Math.random();
let numComputer = Math.random();

// Arrotondamento numeri
numGiocatore = Math.round(numGiocatore*6);
numComputer = Math.round(numComputer*6);

//Confronto risultati
if (numGiocatore > numComputer) {
    
    console.log(numGiocatore,numComputer,'vince Giocatore');
    
} else if (numGiocatore < numComputer) {
    
    console.log(numGiocatore,numComputer,'vince Computer');
    
} else {
    
    console.log(numGiocatore,numComputer,'pari');
    
}


/*  Verifica mail */

// Creazione array con le mail in lista
const mailList = ['gianluca.vallese@hotmail.com', 'g.vallese@gmail.com', 'vallesegianluca@libero.it', 'gianlucav@yahoo.com'];

// Creazione variabile con la mail in input
//const inputMail = 'ciao@gmail.com';
//const inputMail = 'gianluca.vallese@hotmail.com';
const inputMail = 'gianlucav@yahoo.com';

// variabile che impedisce di scrivere 'mail Y non presente' nel caso in cui Y sia verificata
let x;

// Ciclo di confronto con tutte le mail    
for (let i = 0; i< mailList.length; i++) {
    
    if (inputMail == mailList[i]) {
        
        console.log('mail presente nella mailing list');
        x = true;

    } else if (x != true) {
        
        let a = mailList.length-1;
        if (i == a) {
            console.log('mail non presente');
            
        }
    }
}
