class Car {
    engine: Engine;
    wheels: Wheels[];

    constructor(engine: Engine, wheels: Wheels[]) {
        this.engine = engine;
        this.wheels = wheels;
    }
}

class Engine {}
class Wheels {}
