class Mango
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2
			
			}
		this.x=x;
		this.y=y;
		
        this.body=Bodies.circle(this.x, this.y, 20,options);
        this.image = loadImage("mango.png");
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