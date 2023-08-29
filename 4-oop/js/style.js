
const Car = function(name) {
    this.name = name
}

const maluch = new Car('maluch');
const polonez = new Car('polonez');

maluch.name = 'zabytek'

////////////////prototyp//////////////

const Person  = function(name,age) {
    this.name = name;
    this.age = age;
    this.children = []
}

Person.prototype.addChildren = function(name) {
this.children.push(name)
}

const arek = new Person('arek', 20)
const jacek = new Person('jacek', 23)
arek.addChildren('wacek')


function Player () {

}

const janek = new Player()

class User {

}

const marta = new User()
const darek = new janek.constructor()

function Citizen(country ,citizenship) {
    this.country = country
    this.citizenship = citizenship
    // this.changeCitizenship = function(citizenship) {
    //     this.citizenship = citizenship
    //     console.log(`zmiana za pomocą metow w instancji na obywatelstwo ${this.citizenship}`)}
    }


Citizen.prototype.changeCitizenship = function(citizenship) {
    this.citizenship = citizenship
    console.log(`zmiana za pomocą metow w prototypie na obywatelstwo ${this.citizenship}`)
}

const zenek = new Citizen('Polska', 'polskie')

Citizen.prototype.age = 21

const arr = [5,6,7,8]
Array.prototype.delete = function(index) {
   return this.splice(index, 1)
}
arr.delete(1)

///instanceof//////////////////

console.log( arr instanceof Array);
console.log( zenek instanceof Citizen);

///object.getprototypeof//////////
console.log(Object.getPrototypeOf(arr));


