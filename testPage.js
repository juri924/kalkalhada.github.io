let colors=['#000000', '#568AEA','#874363', '#324B3C','#413361','#582354','#213E58']
let sliderA;
let sliderA_value = 0;

let sliderB;
let sliderB_value = 0;

let rad = 40; // 공 크기
let xpos, ypos; // 시작
let xspeed = 5; // 도형의 속도
let yspeed = 5; // 도형의 속도
let xdirection = 1; // 왼쪽 또는 오른쪽
let ydirection = 1; // 위 또는 아래
let col = colors[0];
let widthEnd; 

function setup() {  
	textFont('Source Code Pro');
	createCanvas(windowWidth, windowHeight)
	angleMode(DEGREES);
	background(col);
	rectMode(CENTER);
	
	/* 캔버스 끝에서 버튼, 슬라이더, UI 위치 */
	widthEnd = 150;

	xpos = width / 2;
  ypos = height / 2;
	
	sliderA = createSlider(0, 100, 1, 2);
	sliderA.position(width - widthEnd, 130);
	
	sliderB = createSlider(10, 150, 2, 2);
	sliderB.position(width - widthEnd, 200);
	
	button = createButton('Background');
  button.position(width - widthEnd,40);
	button.mousePressed(randomBgColor);
}

function draw() {	
	let movTan = tan(frameCount) * 60; // 좌우로 이동할 수 있다
	let movSin = sin(frameCount) * 100; // 좌우로 이동할 수 있다
	let movCos = cos(frameCount * 20) * width * 0.5; // 원형으로 이동한다.
	
//	push();
//	textFont('Lobster');
//	fill(255)
//	textSize(100);
//	text('contrast', width*0.1, height*0.5);
//	pop();
	
	// text는 캔버스 위의 좌표. draw()함수에 써줘야함.
	push();
	textSize(16);
	stroke(255);
	fill(255);
	text('circleBox', width - widthEnd, 120);
	text('rotate', width - widthEnd, 190);
	pop();
	
	// 깜빡이는 별
	// 0. 100, 200, 300, 400 : true
	if(frameCount%10 == 0) {
		push();
		scale(0.5);
		translate(width*0.5+movSin,height*0.5+movTan); 
		rotate(40);
		beginShape();
		vertex(-10, 10);
		vertex(0, 35);
		vertex(10, 10);
		vertex(35, 0);
		vertex(10, -8);
		vertex(0, -35);
		vertex(-10, -8);
		vertex(-35, 0);
		endShape();
		pop();
	}

	// x자 모영 
	push();
	noFill();
	stroke(255);
	translate(width*0.3 + movSin , height*0.6 + movSin); 
	rect(0,0,40,40);
	pop();
	
	// 회전하는 바람개비..
	push();
	translate(width*0.5 + movSin/100 , height*0.2+ movCos/200); 
	rotate (frameCount*sliderB_value*2); 
	rect(0,0,60,5);
	ellipse(0,50,30,8);
	//rect(0,20,10,40);
	pop();
	
	push();
	translate(width*0.5 + movSin/100 , height*0.4+ movCos/100); 
	rotate (frameCount*5); 
	rect(0,0,sliderB_value/2,sliderB_value/2);
	ellipse(0,50,sliderB_value,8);
	//rect(0,20,10,40);
	pop();
	
	// 사각이 오르락 내리락
	push();
	scale(0.5);
	translate(width * 0.1 , height * 0.5 + movSin);
	arrowSet();
	translate(width * 0.2 , height * 0.2 + movSin);
	arrowSet();
	pop();

	boxBox();

	// 사각안에 움직이는 볼
	push();
	fill(255);
	translate(width*0.5, height*0.5);
	scale(0.5);
	wow();
	pop();
	
	push();
	circleBox();
	pop();
	sliderA_value = sliderA.value();
	sliderB_value = sliderB.value();
}

function circleBox(){
	let circleX = frameCount * 10; //frameCount 숫자가 올라가면 빨라짐
	let circleY = sin(circleX * 0.5) * 5;

	push();
  fill(255);
  translate(width * 0.7, height * 0.2 + circleY);
  ellipse(0, 0, 80, sliderA_value);
	ellipse(0, 100, sliderA_value, 100);
	ellipse(0, -100, 100, sliderA_value);
	pop();
}

function randomBgColor(){
	col = random(colors);
	background(col);
}

function boxBox() {
	let rectCol = color(col); // p5js 알아들을 수 있는 color 데이터 형태로.
	rectCol.setAlpha(10); // alpha값을 지정.
	// 박스 움직일 때 블러효과 빼는방법 알아보기..
	push();
	fill(rectCol);
	rectMode(CORNER);
	rect(0, 0, width, height);
  translate(width * 0.1, height * 0.6);
 	moveBox()
	pop();
}

