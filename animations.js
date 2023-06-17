function arrowSet() {
	push();
	rect(0,0,20,20);
	rect(20,-20,20,20);
	rect(40,-40,20,20);
	rect(60,-20,20,20);
	rect(80,0,20,20);
	pop();
}
	
function moveBox(){
	for(let boxFive = 100; boxFive - 0; boxFive = boxFive - 5) {
	push();
  strokeWeight(1);
	stroke(255);
	rect(boxFive,boxFive,100+sin(frameCount)*50, 100-sin(frameCount)*50);
	pop();
	}
	

}