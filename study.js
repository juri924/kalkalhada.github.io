function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	noStroke();
}

function draw() {
	background(0, 20);
	let x = frameCount;
	let y = sin(x * 0.5) * 200;           
	// 현재 높이는 -1 픽셀 ~ +1 픽셀 정도일 것.
	// -1 * 200 ~ 1 * 200

	push();
	fill(255);
	translate(x, y + height*0.5);
	ellipse(0, 0, 10, 10);
	pop();
	
	let ry = sin(frameCount) * 100;
	let rx = cos(frameCount) * 100;
	push();
	translate(width * 0.5, height * 0.5);
	translate(0, ry);
	// rotate(sin(frameCount) * 360); // - 180 ~ 180
	rect(0, 0, 100 + sin(frameCount)*50, 100 - sin(frameCount)*50);
	pop();
	
	let radius = 200;
	
	for(let angle = 0; angle < 360; angle = angle + 20) {
			push();
			translate(width*0.5, height*0.5);
			translate(cos(angle)*radius, sin(angle)*radius);
			ellipse(0, 0, 50, 50);
			pop();
	}
	/*
	push();
	translate(width*0.5, height*0.5);
	translate(cos(30)*radius, sin(30)*radius);
	ellipse(0, 0, 50, 50);
	pop();
	
	push();
	translate(width*0.5, height*0.5);
	translate(cos(60)*radius, sin(60)*radius);
	ellipse(0, 0, 50, 50);
	pop();
	
	push();
	translate(width*0.5, height*0.5);
	translate(cos(90)*radius, sin(90)*radius);
	ellipse(0, 0, 50, 50);
	pop();
	*/
	
	/*
	background(100);    			// 배경색 코드를 비활성화: 궤적이 남음.
	let x = frameCount * 0.5;    // 속도 빠르게 혹은 느리게
	let y = sin(x) * (height*0.25); // -1*150 ~ 1*150 에다가 height/2를 곱하면? 

	// 1. 삼각함수를 시각화
	push();
	fill(200, 100, 0);
	translate(x, y + (height * 0.5));  
	ellipse(0, 0, 50, 50);
	pop();
	
	// 2. 원형으로 배치
	push();
	translate(width/2, height/2);  // 캔버스의 중앙에 배치.
	ellipse(0, 0, 20, 20);
	drawUnitCircle();
	pop();
	
	// 2-1. 원형으로 회전 애니메이션
	push();
	// 캔버스의 중앙에 배치.
	translate(width/2, height/2);  
	// 원의 (x, y)를 구하는 공식 사용해서 원을 계속 돌아다니게 이동
	// frameCount가 각도 파라미터로 쓰였음: 각도가 바뀌면서 계속 원을 돌아다님.
	translate(cos(frameCount)*100, sin(frameCount)*100);
	ellipse(0, 0, 20, 20);
	pop();
	*/
	
}

function drawUnitCircle() {
	// radius의 값을 고정된 숫자가 아닌 마우스나 frameCount 숫자값과 연동한다면?
	let radius = 200;
		
	push()
	translate(cos(30)*radius, sin(30)*radius);
	ellipse(0, 0, 10, 10);
	pop();

	push();
	translate(cos(60)*radius, sin(60)*radius);
	ellipse(0, 0, 10, 10);
	pop();

	push();
	translate(cos(90)*radius, sin(90)*radius);
	ellipse(0, 0, 10, 10);
	pop();
	
	// 1. 복붙을 해서 cos(), sin() 함수 안의 각도 값을 360도까지 적어보세요.
}