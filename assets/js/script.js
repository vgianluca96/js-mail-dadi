

// Creazione Event Listener dadi
const btnDadi = document.getElementById('btnDadi');
btnDadi.addEventListener("click", lancioDadi);

// Creazione Event Listener mail
const btnVerifica = document.getElementById('btnVerifica');
btnVerifica.addEventListener("click", verificaMail);



function lancioDadi() {

    // Creazione variabile con numero lanci
    const numLanci = document.getElementById('numLanci').value;
    // Ciclo che simula i vari lanci
    for (let i = 1; i <= numLanci; i++) {
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
        } else console.log(numGiocatore,numComputer,'pari');
    
    }
}


function verificaMail() {

    // Creazione array con le mail in lista
    const mailList = ['gianluca.vallese@hotmail.com', 'g.vallese@gmail.com', 'vallesegianluca@libero.it', 'gianlucav@yahoo.com'];
    // Creazione variabile con la mail in input
    const inputMail = document.getElementById('inputMail').value;
    // Ciclo di confronto con tutte le mail    
    for (let i = 0; i< mailList.length; i++) {
        if (inputMail == mailList[i]) {
            console.log('mail presente nella mailing list');
        } else {
            let a = mailList.length-1;
            if (i == a) {
                console.log('mail non presente');
            }
        }
    }
    
}
