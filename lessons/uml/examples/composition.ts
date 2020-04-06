class Body {
    head: Head;
    trunk: Trunk;
    hands: {left: Hand, right: Hand};
    legs: {left: Leg, right: Leg};

    constructor() {
        this.head = new Head();
        this.trunk = new Trunk();
        this.hands = {left: new Hand(), right: new Hand()};
        this.legs = {left: new Leg(), right: new Leg()};
    }
}

class Head {}
class Trunk {}
class Hand {}
class Leg {}
