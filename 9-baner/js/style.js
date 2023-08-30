

class Cat {
    constructor(color) {
     this._color = color   
    }
    getColor() {
        return this._color
    }

    setColor(value) {
        if(typeof value === 'string') {
           return this._color = value
        } else {
            console.log('wartosc nieprawidlowa');
        }
    }
}

const kotek = new Cat('czarny')
console.log(kotek.setColor('white'));
console.log(kotek.getColor());