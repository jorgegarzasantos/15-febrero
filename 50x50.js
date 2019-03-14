// Jorge Eduardo Garza Santos # 1656765 Percepción N6
var x;
var y;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255)
  for(x=5;x<=500;x++)
  {
  	for(y=5;y<=500;y++)
  		{
   			 ellipse(x,y,10,10);
    			y=y+10;
  		}
  x=x+10;
  }
}
