// recuperare pulsanti dall' html
// creare un pulsante che al click dell'evento selezioni carta forbice sasso
// creare uno switch in modo che la cpu possa selezionare carta forbice sasso
// creare la condizione di vittoria pareggio sconfitta

const mostraScorePL = document.querySelector('.scorePL')
const mostraScoreCPU = document.querySelector('.scoreCPU')
const buttons = document.querySelectorAll('.buttons')
const mostraPlayer = document.querySelector('.player')
const mostraCpu = document.querySelector('.cpu')
const mostraRisultato = document.querySelector('.risultato')

let sceltaPlayer // varibile per il simbolo del player
let sceltaCpu // variabile per il simbolo della cpu
let risultato //  varibile per il risultato 
let punteggioPL = 0
let punteggioCPU = 0



buttons.forEach(button => button.addEventListener('click', (e) => { // Aggiungi un evento a tutti i 3 pulsanti
  sceltaPlayer = e.target.id // la scelta del player viene presa direttamente dall' ID del DOM
  mostraPlayer.innerHTML = sceltaPlayer // mostra sul browser il segno selezionato dal player
  cpuFun()
  winOrLose()
  score()
}))

function cpuFun() {
  const scelte = (Math.floor(Math.random() *3) +1) // seleziona un numero da 1 a 3

  switch(scelte) {
    case 1:
      sceltaCpu = 'SASSO' // impostiamo i 3 simboli selezionabili dalla cpu
      break
    case 2:
      sceltaCpu = 'FORBICE'
      break
    case 3:
      sceltaCpu = 'CARTA'
      break
    default:      
  }
  mostraCpu.innerHTML = sceltaCpu // mostra sul browser il segno selezionato dalla CPU
}

function winOrLose() {
  if(sceltaPlayer === sceltaCpu) { // crea la condizione di Pareggio
    risultato = 'PAREGGIO!'
    mostraRisultato.style.color = 'black'
  }
  if(sceltaPlayer === 'CARTA' && sceltaCpu === 'SASSO' ) { // crea la condizione di Vittoria
    risultato = 'HAI VINTO!'
    punteggioPL++
    mostraRisultato.style.color = 'green'
  }
  if(sceltaPlayer === 'FORBICE' && sceltaCpu === 'CARTA' ) { // crea la condizione di Vittoria
    risultato = 'HAI VINTO!'
    punteggioPL++
    mostraRisultato.style.color = 'green'
  }
  if(sceltaPlayer === 'SASSO' && sceltaCpu === 'FORBICE' ) { // crea la condizione di Vittoria
    risultato = 'HAI VINTO!'
    punteggioPL++ // incrementa lo score del player
    mostraRisultato.style.color = 'green'
  }
  if(sceltaPlayer === 'CARTA' && sceltaCpu === 'FORBICE' ) { // crea la condizione di Sconfitta
    risultato = 'HAI PERSO!'
    punteggioCPU++
    mostraRisultato.style.color = 'red'
  }
  if(sceltaPlayer === 'FORBICE' && sceltaCpu === 'SASSO' ) { // crea la condizione di Sconfitta
    risultato = 'HAI PERSO!'
    punteggioCPU++
    mostraRisultato.style.color = 'red'
  }
  if(sceltaPlayer === 'SASSO' && sceltaCpu === 'CARTA' ) { // crea la condizione di Sconfitta
    risultato = 'HAI PERSO!'
    punteggioCPU++ // incrementa lo score della cpu
    mostraRisultato.style.color = 'red'
  }
  mostraRisultato.innerHTML = risultato // mostra sul browser il risultato
  mostraScorePL.innerHTML = punteggioPL // mostra sul browser lo score del player
  mostraScoreCPU.innerHTML = punteggioCPU // mostra sul browser lo score della cpu
}
