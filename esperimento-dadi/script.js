
/* In questo script si ipotizza di inserire tramite input un numero di lanci, lo script per ogni lancio dirà chi ha vinto tra giocatore e computer e lostamperà in pagina */


// Creazione Event Listener dadi
const btnDadi = document.getElementById('btnDadi');
btnDadi.addEventListener("click", lancioDadi);

function lancioDadi() {

    // Creazione variabile con numero lanci
    const numLanci = document.getElementById('numLanci').value;
    
    // elemento ul
    const ulElem = document.querySelector('ul');

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
            
            // Aggiunta risultato in pagina
            risultato = `<li>Lancio ${i} - Giocatore: ${numGiocatore}; Computer: ${numComputer} - vince Giocatore</li>`;
            ulElem.insertAdjacentHTML('beforeend',risultato);
            
        } else if (numGiocatore < numComputer) {
            
            console.log(numGiocatore,numComputer,'vince Computer');
            
            // Aggiunta risultato in pagina
            risultato = `<li>Lancio ${i} - Giocatore: ${numGiocatore}; Computer: ${numComputer} - vince Computer</li>`;
            ulElem.insertAdjacentHTML('beforeend',risultato);

        } else {
            
            console.log(numGiocatore,numComputer,'pari');
            
            // Aggiunta risultato in pagina
            risultato = `<li>Lancio ${i} - Giocatore: ${numGiocatore}; Computer: ${numComputer} - Pareggio</li>`;
            ulElem.insertAdjacentHTML('beforeend',risultato);
        }
    }
}
