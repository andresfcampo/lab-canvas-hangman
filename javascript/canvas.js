class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    this.drawX = 250
    this.drawY = 250
    this.linewidth = 15
  }

  createBoard() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    const img = new Image()
    img.src = "../images/hangman-logo.png"
    img.onload = () => {
    this.context.drawImage (img, 0, 0, 0, 50)
  }

  drawLines() {
    this.context.beginPath();
    this.context.moveTo(250, this.drawX);
    this.context.lineTo(150, this.drawY);
    this.context.lineTo(200, 350);
    this.context.closePath();
    this.context.stroke();
  
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
