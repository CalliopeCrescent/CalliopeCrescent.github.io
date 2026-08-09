window.requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(f) {
        return setTimeout(f, 1000 / 60)
    };

var canvas = document.getElementById("canvas");
function updateCanvasSize() {
    canvas.width = window.innerWidth;
}

updateCanvasSize();
window.addEventListener('resize', ()=> {
    updateCanvasSize();
});

var ctx = canvas.getContext("2d");
ctx.shadowColor = "white";
ctx.shadowBlur = 20; // integer
var startTime = new Date().getTime();

// Track scroll velocity
let lastScroll = window.scrollY;
let lastTime = performance.now();
let scrollVelocity = 0;
window.addEventListener('scroll', function(){
   const currentTime = performance.now();
   const currentScroll = window.scrollY;

   const distance = currentScroll - lastScroll;
   const timeElapsed = currentTime - lastTime;

   if (timeElapsed > 0) {
       scrollVelocity = distance / timeElapsed;
   }

   // Update for next iteration
   lastScroll = currentScroll;
   lastTime = currentTime;
});

function getPath(height) {
    var width = canvas.width;
    var spacing = 0.01;
    var loopNum = 0;
    var pointList = [];
    var i = 0;

    for (i = 0; i < width; i++) {
        pointList[loopNum] = [loopNum, Math.sin(loopNum * spacing) * (i * height) + 2];
        loopNum++;
    }

    return pointList;
}

function draw() {
    var currentTime = new Date().getTime();
    var runTime = currentTime - startTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgb(255, 255, 255)";

    // Configure scroll velocity to current height
    var velocity = Math.abs(scrollVelocity) * 0.99;
    velocity = Math.min(Math.max(velocity, 0), 0.0008);
    scrollVelocity = velocity;

    var height = Math.sin(runTime * 0.008) * velocity;
    var pointList = getPath(height);

    for (var i = 0; i < pointList.length; i++) {
        if (i === 0) {
            ctx.moveTo(pointList[0][0], pointList[0][1]);
        } else {
            ctx.lineTo(pointList[i][0], pointList[i][1]);
        }
    }
    ctx.stroke();

    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);


