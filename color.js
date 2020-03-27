// colors array old ["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(255, 255, 255)","rgb(0, 255, 255)","rgb(0, 255, 0)","rgb(0, 0, 255)"];

var colors = randColorGen(6);
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelectorAll("span")[0];
var msgDisp = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var newcol = document.querySelector("button");
var easy = document.querySelectorAll("button")[1];
var hard = document.querySelectorAll("button")[2];
var pickedColor = initColor();

colorDisplay.textContent = pickedColor;

console.log(newcol);
console.log(easy);
console.log(hard);

newcol.addEventListener("click", function()
{
    newcol.textContent = "NEW COLORS"
    reseth1();
    colorAssignerToSquares(6);
});

easy.addEventListener("click", function()
{
    easy.classList.toggle("selected");
    hard.classList.toggle("selected");
    reseth1();
    colorAssignerToSquares(3);
    actionCheck(3);
});

hard.addEventListener("click", function()
{
    easy.classList.toggle("selected");
    hard.classList.toggle("selected");
    reseth1();
    colorAssignerToSquares(6);
    actionCheck(6);
});

function colorAssignerToSquares(n)
{
    colors = randColorGen(n);
    pickedColor = initColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<n; i++)
    {
        square[i].style.background = colors[i];
    }
    
    if (n==3)
    {
        for (i=3; i<=5; i++)
        {
            square[i].style.backgroundColor = "#232323";
        }
    }
}

//for loop for intialization
for(var i=0; i < square.length; i++)
{
    square[i].style.background = colors[i];

    square[i].addEventListener("click", function()
    {
       if (this.style.backgroundColor == pickedColor)
       {
        msgDisp.textContent = "Correct!";
        winner();
       }
       else
      {
        this.style.backgroundColor = "#232323";
        msgDisp.textContent = "Try Again";
      }
    })

}

function actionCheck(n)
{
    for(var i=0; i < n; i++)
    {  
        square[i].addEventListener("click", function()
        {
           if (this.style.backgroundColor == pickedColor)
           {
            msgDisp.textContent = "Correct!";
            winner();
           }
           else
          {
            this.style.backgroundColor = "#232323";
            msgDisp.textContent = "Try Again";
          }
        })
        return;
    }
}

function initColor()
{
   var random = Math.floor(Math.random()*colors.length);
   return(colors[random]);
}

function winner()
{
    for (i=0; i<6; i++)
    {
        square[i].style.backgroundColor = pickedColor;
    }
    h1.style.backgroundColor = pickedColor;
    newcol.textContent = "Play again?"
}

function randColorGen(n)
{
var colorarr = [];
            for (var i = 0; i<n; i++)
            {
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            colorarr[i] = "rgb(" + r + ", " + g + ", " + b + ")";
            }
    return(colorarr);
        }

function reseth1()
{
    h1.style.backgroundColor = "steelblue";
    msgDisp.textContent = " ";
}        