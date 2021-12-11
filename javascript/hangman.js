class Hangman {
  constructor(words) {
    this.words = []
    this.words = words
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomWord = this.words[Math.floor(Math.random() * this.words.length)];
     return randomWord;
    
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      
      return false;
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter) > 0) {
      return false;
    }
    return true
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1

  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true 
    } else {
      return false
    }
  }

  checkWinner() {
    if (this.secretWord.length === this.guessedLetters.length) {
      return true;
    } else return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
