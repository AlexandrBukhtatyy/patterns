interface Point {
    x: number;
    y: number;
}

class Shape {
    position: Point;
    constructor(position: Point) {
        this.position = position;
    }
}

class Square extends Shape {
    public width: number;
    public height: number;

    constructor(position: Point, width: number, height: number) {
        super(position);
        this.width = width;
        this.height = height;
    }

    public area(): number {
        return this.width * this.height;
    }

}

class Circle extends Shape {
    public radius: number;

    constructor(position: Point, radius: number) {
        super(position);
        this.radius = radius;
    }

    public area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
