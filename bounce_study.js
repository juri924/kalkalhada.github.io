function wow() {
	// fill(0, 10);
	let rectCol = color(col); // p5js 알아들을 수 있는 color 데이터 형태로.
	rectCol.setAlpha(50); // alpha값을 지정.
	fill(rectCol);
	noStroke();
	rectMode(CORNER);
	rect(0, 0, width, height);
	
  // 도형의 위치 업데이트
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // 도형이 화면 경계를 넘어가는 지 테스트
  // 넘어갈 경우, -1을 곱하여 방향을 반대로 돌린다.
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // 도형 그리기
	fill(255);
	stroke(0);
  ellipse(xpos, ypos, rad, rad);
}





