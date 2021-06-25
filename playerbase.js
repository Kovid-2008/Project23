class Player{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.image=loadImage("base1.png");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);

    }
    show(){
        var pos=this.body.position;


        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        
    }
}