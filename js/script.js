/**
 * Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */

const container = document.querySelector('.container');

const listNumbers = [];
init ();

function init(){
  for (let i = 0; i < 100; i++){
    //creo ogni volta l'elemento square e lo aggiugno al container - con funzione
  
    const sq = createSquare(container);
  
    //gestisco comportamento - aggiungo colore sfondo al click
    sq.addEventListener('click',function(){
      console.log(this);
      this.classList.add('clicked');
  
    });
  }

};

/**
 * generatore di square
 * @param {HTMLDivElement} target 
 * @returns 
 */
 function createSquare(target){
   //creo elemento div
  const sq = document.createElement('div');
  //aggiungo classi a div
  const classes = ['square', 'easy' ]
  sq.classList.add(...classes);
  //appendo il div al suo contenitore
  target.append(sq);
  //ottengo il quadrato
  return sq;
}