
class Family {
    constructor(name) {
        this.name = name;
        // this.addMember = function() {
        //     console.log(`wywoane z instancji`);
        // }
    }

    addMember() {
        console.log(`wywoane z prototypu`);
    }
}

const nowakowie = new Family('nowakowie');
console.log(nowakowie.addMember());


class Family2 {
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
    }

    addMember(newMember) {
        this.names.push(newMember)
        this.members++
        console.log(`nowy czonek rodziny ${newMember} rodzina liczy teraz ${this.members} osób`);
    }
    //metoda statyczna  dostępna tylko z poziomu klasy nie instancji
    static makeFamily(...members) {
        return members
    }
}

console.log(Family2.makeFamily('Jan','Ewa'));

const kowalscy = new Family2(3, 'Jan','Ewa','Adam')
console.log(kowalscy);
kowalscy.addMember('Bogdan')
kowalscy.addMember('ola')
console.log(kowalscy);

const kwiatkowscy = new Family2(1, 'Piotr')
console.log(kwiatkowscy);
kwiatkowscy.addMember('Grażyna')
console.log(kwiatkowscy);

////klasy i dziedziczenie////////////////////////
console.log('--------------------------------');

class Animal {
    constructor(age,name) {
        this.age = age
        this.name = name
    }
    breathe() {
        console.log('zwierze oddycha');
    }
}
const zwierze = new Animal(2, 'Benio')
console.log(zwierze);
class Mammal extends Animal {
constructor(age,name,hairs) {
    super(age,name)
    this.hairs = hairs
}
drinkMilk() {
    console.log(`Ssaki piją mleko`);
}
}
const ssak = new Mammal(3,'Alex','blond')
console.log(ssak);
ssak.breathe()
ssak.drinkMilk()
class Human extends Mammal {
    constructor(age,name,hairs,language) {
        super(age,name,hairs)
        this.language = language == undefined ? 'angielski' : language
    }
    speak(lang) {
        console.log(`ten człowiek mówi po ${lang}`)
    }
}
const man = new Human(33,'Zbyszek','black','polski')
man.speak('polsku')
console.log(man);

