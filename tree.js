class Tree
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		
        this.body=Bodies.rectangle(this.x, this.y, 100,100,options);
        this.image = loadImage("tree.png");
        this.width = width;
        this.height = height;

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
			image(this.image,0,0,600,600);
			pop()
			
	}

}