var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var color = "black"
var width = 1
var mouseevent = "empty"
var lastx, lasty
canvas.addEventListener("mouseup", mymouseup)

function mymouseup(e) {
    mouseevent = "mouseup"
}

canvas.addEventListener("mouseleave", mymouseleave)

function mymouseleave(e) {
    mouseevent = "mouseleave"
}

canvas.addEventListener("mousedown", mymousedown)

function mymousedown(e) {
    mouseevent = "mousedown"
    color = document.getElementById("color").value
    width = document.getElementById("width").value
}

canvas.addEventListener("mousemove", mymousemove)

function mymousemove(e) {



    currentx = e.clientX - canvas.OffsetLeft
    currenty = e.clientY - canvas.OffsetTop
    if (mouseevent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.moveTo(lastx, lasty)
        ctx.lineTo(currentx, currenty)
        ctx.stroke()

    }
    lastx = currentx
    lasty = currenty

}