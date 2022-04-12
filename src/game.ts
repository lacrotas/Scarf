class Card{
    suit: string;
    order: number;

    constructor(suit: string, order: number){
        this.suit = suit;
        this.order = order;
    }
}

class Deck{
    suit: string;
    deck: Array<Object>;
}

class Stack{
    stack: Array<Object>;
}
