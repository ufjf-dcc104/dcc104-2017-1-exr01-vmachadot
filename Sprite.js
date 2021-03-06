function Sprite(cor, x, y){
  this.x = x;
  this.y = y;
  this.color = cor;

  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;

}

Sprite.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, 15, 15);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x, this.y, 15, 15);
};

Sprite.prototype.mover = function (dt) {
  this.vx = this.vx + this.ax * dt;
  this.vy = this.vy + (this.ay + 60) * dt;

  this.x = this.x  + this.vx * dt;
  this.y = this.y  + this.vy * dt;
};
