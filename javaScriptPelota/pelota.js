


/** Cargar Recursos*/

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



/**variables iniciales */

var radio = 50;
var centro ={x: radio, y:radio};
var vel ={x: 5, y:2};

animar();

/**Dibujar mundo */

function dibujar() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centro.x, centro.y, radio, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 100;
    ctx.strokeStyle ='red';

}


/**Calcular valores */
function calcular(){

    centro.x += vel.x;
    centro.y += vel.y;

/**Controlar rebote */
    if(centro.x >= canvas.width-radio||centro.x+vel.x<radio ){
        vel.x*=-1;

    }

    if (centro.y >= canvas.height-radio || centro.y+vel.y<radio){
        vel.y *= -1;
    }

    
}

/**Ciclo de animacion */

function animar() {
    dibujar();
    calcular();
    requestAnimationFrame(animar);
}


