var num = 6;
var colors = generateRandomColors(num);
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let reset = document.getElementById("reset");
let easybtn = document.getElementById("easybtn");
let hardbtn = document.getElementById("hardbtn");

span1.innerText = pickedColor;

easybtn.addEventListener('click', function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    num = 3
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    span1.innerText = pickedColor;
    for(var i=0; i< squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor= colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})
hardbtn.addEventListener('click', function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    num = 6;
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    span1.innerText = pickedColor;
    for(var i=0; i< squares.length;i++){
        squares[i].style.backgroundColor= colors[i];
        
        squares[i].style.display="block";

    }
})

reset.addEventListener('click',function(){
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    span1.innerText = pickedColor;
    this.innerText = "New Colors";
    span2.innerText="";
    for (var i = 0; i ,squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor ="#232323";
})
for(var i=0; i< squares.length; i++){
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener('click',function(){
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            span2.innerText = "Correct!";
            reset.innerText = "Play Again?";
            changColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else{
            this.style.backgroundColor="#232323";
            span2.innerText = "Try Again";
        }
    });
}
function changColors(color){
    for(var i = 0; i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    let arr = []
    for(var i =0; i<num; i++){
        arr.push(randomColor());
    }
    return arr
}
function randomColor(){
    let r =Math.floor(Math.random()*256);
    let g =Math.floor(Math.random()*256);
    let b =Math.floor(Math.random()*256);
     return "rgb(" + r + ", " + g + ", " + b + ")"
}