var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
colorDisplay.textContent = pickedColor;

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}


function setUpModeButtons(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            if (this.textContent === 'Easy') {
                numSquares = 3;
            } else{
                numSquares = 6;
            }
            reset(); 
        });
    }
}
function setUpSquares(){
    for (let i = 0; i < squares.length; i++) {
        // add Click listeners to squares
        squares[i].addEventListener('click', function(){
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if (clickedColor === pickedColor) {
                changeColors(clickedColor)
                messageDisplay.textContent = 'correct';
                resetButton.textContent = 'Play Again?'
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try again';
            }
    
        })
    }
}

function reset(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random colors
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    // change color of squares
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else{
           squares[i].style.display = 'none';
        }
        
    }
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = ''
    resetButton.textContent = 'New Colors'
}

resetButton.addEventListener('click', function(){
    reset();
});



function changeColors(color){
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;   
        
    }
    
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // repeat number of times
    // add num random colors to array
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
        // getrandom color and push into array
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;


}