class Stone
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			
			}
		this.x=x;
		this.y=y;
		
        this.body=Bodies.circle(this.x, this.y, 15,options);
        this.image = loadImage("stone.png");
        World.add(world,this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			image(this.image,0,0,50,50);
			pop()
			
	}

}