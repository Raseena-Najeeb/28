class Ground
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		
        this.body=Bodies.rectangle(this.x, this.y, width, height,options);
        this.width = width;
        this.height = height;
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(0)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			rect(0,0,this.width,this.height);
			pop()
			
	}

}