//	Canvas and context
var canvas,
	ctx,
	univ;

//	Time step variables
var now,
	deltaStep;
var then = Date.now();

//	Entity variables for testing
	var e1,
		e2,
		e3;

//	Grid variables
var TILE_S = 32,
	COLS = 32,
	ROWS = 16;

//	Initializes canvas and actors
function init()
{
	//	Initialize the canvas and context
	canvas = document.createElement("canvas");
	window.ctx = canvas.getContext("2d");
	canvas.width = TILE_S * COLS;
	canvas.height = TILE_S * ROWS;
	canvas.setAttribute("tabIndex", "0");
	canvas.focus();

	//	Adding canvas to div element in body
	document.getElementById("canvas").appendChild(canvas);

	//	Universe object initialized
	univ = new Universe();

	e1 = new Entity(512, 128, 8, 5, "#FFffFF");
	e1.vel = e1.vel.add(new Vector([0, 0.0]));

	e2 = new Entity(720, 128, 8, 5, "#55aaFF");
	e2.vel = e2.vel.add(new Vector([0, 0.0]));

	// e3 = new Entity(624, 256, 8, 8, "#DD00FF");
	//e3.vel = e3.vel.add(new Vector([-0.2, -0.07]));

	//	Initialize objects here
	univ.entities.push(e1);
	univ.entities.push(e2);
	//univ.entities.push(e3);
}

function delta()
{
	now = Date.now();
	deltaStep = now - then;
	then = now;

	return deltaStep;
}

//	Main game loop
function loop()
{
	updateAll(delta());
	drawAll();
	window.requestAnimationFrame(loop);
}

//	Update the univ object
function updateAll(delta)
{
	univ.update(delta);
}

//	Draws background and universe
function drawAll()
{	
	//	Draw background
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	//	Draw the universe
	univ.draw();
}

//	Starting point for program
function main()
{
	init();
	loop();
}

main();
