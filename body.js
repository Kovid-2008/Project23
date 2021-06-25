class Body{
    constructor(x,y,width,height){

        var options={
            isStatic:true
        }
        this.image= loadImage("player.png");
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(this.x,this.y,this.width,height,options);
        World.add(world,this.body);
    
        }
        draw(){
            var pos=this.body.position;
        
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,this.width,this.height);
        }
}