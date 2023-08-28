

// Creazione Event Listener
const btn = document.getElementById('btnDadi');
btn.addEventListener("click", lancioDadi);

function lancioDadi() {

    const numLanci = document.getElementById('numLanci').value;
    for (i = 1; i <= numLanci; i++) {
        // Creazione numeri
        let numGiocatore = Math.random();
        let numComputer = Math.random();
        // Arrotondamento numeri
        numGiocatore = Math.round(numGiocatore*6);
        numComputer = Math.round(numComputer*6);
        //Confront risultati
        if (numGiocatore > numComputer) {
            console.log(numGiocatore,numComputer,'vince Giocatore');
        } else if (numGiocatore < numComputer) {
            console.log(numGiocatore,numComputer,'vince Computer');
        } else console.log(numGiocatore,numComputer,'pari');
    
    }
}
