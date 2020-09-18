function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  var particles=[];
  var plinkos=[];
  var divisions=[];

  var divisionHeight=300;
  for(vark=0;k<=innerWidth;k=k+80){
    divisionHeight.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(j=40; j<=innerWidth; j=j+50)
  {
plinkos.push(newPlinko(j,75));
  }
  for(var j= 15; j <=width-10; j=j+50)
  {
plinkos.push(Plinko(j,175));


  }
  if(frameCount%60==0)
  {
    particles.push(new particles(random(width/2-10,width/2+10),10,10))
  }
  
    division.display()
    plinko.display()
    particle.display
    
}



