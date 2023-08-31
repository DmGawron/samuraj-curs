

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

class Dog {
    constructor(name, color) {
        this.name = name;
        let _color = color 
        this.getColor = () => _color
        this.setColor = (value) => _color = value 
    }
}

const fafik = new Dog('fafik','brown')


class Car {
    constructor(name,counter,year) {
        this.name = name
        let _counter = counter
        let _year = year
        let _changeNumber = 0
    
        this.getYear = function() {
            return _year
        } 
    
        this.setCounter = function(value) {
            _changeNumber++
            return _counter = value
    }

    this.getCounter = function() {
        if(_changeNumber > 0) console.log(`uważaj licznik zmieniony ${_changeNumber}`)
        return _counter
    }

    this.showCarAge = function(year) {
        return year - _year
}
}
}

const polonez = new Car('polonez',250000,2009 )

console.log(polonez.getYear());
console.log(polonez.setCounter(10000));
console.log(polonez.setCounter(8000));
console.log(polonez.getCounter());
console.log(polonez.showCarAge(2023));

/////////////////metody prywatne///////////////

class Person {

    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    #fullName() {
        return `${this.#firstName} ${this.#lastName}`
    }

    introduceYourself() {
        return `Hello my name is ${this.#fullName()}`
    }
}

const person = new Person('Jarosław' ,'Psikutas bez s')

// console.log(person.#fullName());
console.log(person.introduceYourself());







