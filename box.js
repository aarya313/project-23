class Box{
    constructor(x,y,width,height){
        var Options={
            restitution : 1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,Options);
        this.width=width;
        this.height=height;
     World. add(world,this.body);
    }
    display(){
        
    }
}