class boy
{
    constructor(x,y,h,w)
    {
        var options={
            isStatic:true,
        }
        
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.image = loadImage("sprite/boy.png");
        World.add(wolrd, this.body);
    }

    display()
    {
        var boypos = this.body.position;
        rectMode(CENTER);
    }

}