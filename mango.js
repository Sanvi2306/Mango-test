class Mango{
constructor(x,y,radius){
var options={isStatic:true,restitution:0,friction:1}
this.radius=radius;

this.image = loadImage("Plucking mangoes/mango.png");
this.body = Bodies.circle(x, y, radius, options);
World.add(world, this.body);


}

display(){
    var pos=this.body.position;
    

ellipseMode(RADIUS);
fill("white");
ellipse(pos.x,pos.y,this.radius,this.radius);
imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);





}



}