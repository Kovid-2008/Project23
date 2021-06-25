class Computer{
    constructor(x,y,width,height){

    var options={
        isStatic:true
    }
    this.image= loadImage("base2.png");
    this.width=width;
    this.height=height;
    this.x=x;
    this.y=y;
    this.body=Bodies.rectangle(this.x,this.y,this.width,height,options);
    World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
    
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}