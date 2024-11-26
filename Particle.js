// 간단한 파티클 클래스
class Particle{
  constructor(position) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  applyForce(force){
    this.acceleration.add(force);
  }
  
  // 위치 업데이트를 위한 메소드
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    // reset acceleration
    this.acceleration.mult(0);
    this.lifespan -= 2;
  }

  // 화면에 보이기 위한 메소드
  display() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  // 파티클이 여전히 쓸만한가요?
  isDead() {
    return this.lifespan < 0;
  }  
}
