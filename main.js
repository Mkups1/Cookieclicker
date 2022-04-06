// Muffin Masher

let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 1250;
cnv.height = 775;

let muffin = document.getElementById("muffin")
let muffinAmount = 0

ctx.drawImage(muffin, 50, 300, 300, 300)

ctx.fillStyle = "rgb(125, 50, 0)"
ctx.fillRect(0,25, 1250, 50)

ctx.fillStyle = "rgb(125, 50, 0)"
ctx.fillRect(400, 25, 50, 800)

ctx.fillStyle = "rgb(125, 50, 0)"
ctx.fillRect(800, 25, 50, 775)

ctx.font = "30px Arial"
ctx.fillStyle = "rgb(125, 50, 0)"

requestAnimationFrame(loop)

function loop(){
 ctx.fillStyle = "white"
 ctx.fillRect(0, 75, 400, 250)
 ctx.fillStyle = "rgb(125, 50, 0)"
 ctx.fillText("Muffins:" + muffinAmount, 0, 150)
 requestAnimationFrame(loop)
}

document.addEventListener("mousedown", moreMuffin)

function moreMuffin(event) {
    if (event.x >= 100 && event.x <= 325 && event.y >=400 && event.y <= 650) {
        muffinAmount++
        console.log(muffinAmount)
    }
}