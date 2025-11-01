class Block{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.angle=0;
        this.c=70;
    }
    display(){
        noFill();
        stroke(this.c);
        push();
        translate(this.x,this.y);
        rotate(this.angle);

        if(this.angle>0 && this.angle<45){
            this.drawRect();
        }
        else{
            this.drawX()
        }
        
        
        pop();
    }

    move(){
        let distance
        //if the cursor are moving then only calculate the distance and
        //start rotation
        if(pmouseX-mouseX!=0 || pmouseY-mouseY!=0){
            distance=dist(mouseX,mouseY,this.x,this.y);
            if(distance<distMouse){
                this.angle++;
                this.c=255;
            }
               
        }
        //if the square are already moved then do the following thing
        if(this.angle>0 && this.angle<90){
                this.angle++;
                if(this.c>70){
                    this.c-=3;
                }
                
        }else{
            this.angle=0;
            this.c=70;
        }
        //take the corrdinate in term of the canvas  
        
    }
    drawX(){
        let margin=-size/2
        line(margin+offset/2,margin+offset/2,size+margin-offset/2,margin+size-offset/2);
        line(size+margin-offset/2,margin+offset/2,margin+offset/2,size+margin-offset/2);
    }
    drawRect(){
        rect(0,0,size-offset,size-offset);
    }
}