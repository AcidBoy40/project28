class tree
{
    constructor(x,y,height,width)
    {
        var options={
            isStatic:true
        }
        
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.image = loadImage("sprite/tree.png");
        World.add(world, this.body);

    }

    display()
    {
        var treepos = this.body.position;
        rectMode(CENTER);
    }
}