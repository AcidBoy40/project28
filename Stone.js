class stone
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        this.image = loadImage("sprite/stone.png");
        World.add(wolrd, this.body);
    }

    display()
    {
        var stonepos = this.body.position;
        rectMode(CENTER);
    }
}