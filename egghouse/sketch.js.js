//by yunzhu 
var player; 
var blocks =[];
var b;
// var coins;
// var score=0;

function preload(){
  happy = loadFont(' KGHAPPY.ttf');
  song1 = loadSound('POP.WAV');
  song2 = loadSound('morning.mp3');
}

function setup() {
  createCanvas(900,600);
  song2.play();
  coins = new Group();
  player = new Player();
  b = new Ball();
  for (var i=0; i<3; i++)
    for (var j=0;j<10;j++)
    blocks.push (new Block(j*80,i*80));
}

function draw() {
  
  background ("lightblue");
  textFont(happy);

   fill ('#f1f2e5');
  textSize(20);
  text('Yunzhu \'s Egg House',300, 20);

  player.move();
  player.show();
  b.move();
  for (var i =0; i<blocks.length;i++){
    blocks[i].show();
      if(b.collision(blocks[i])){
        b.vy =-b.vy;
        blocks.splice(i,1);
        // coins.add(c);
        song1.play();
      }
  }
  if (b.collision(player))
       b.vy =-b.vy;
  if (b.y<0)
       b.vy =-b.vy;
   b.show(); 
   
  if (blocks.length > 0) {
    // text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}