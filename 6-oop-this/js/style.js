'use strict';

const fn = function() {
    console.log(this.name);
}

const obj = {
    name: 'Adam',
    showName: fn
}

// fn()
obj.showName()


document.addEventListener('click', function() {
    console.log(this);
    const inside = function () {
        console.log(this);
    }
    inside()
})

function showName() {
   console.log(this.name)
}

const karol = {
    name: 'karol',
    showName: showName
}
karol.showName()



function one() {
    this.name = 'pierwsza'
    return this.name
}

const object1 = {
    two: one,
    four: function() {
        console.log(this);
    }
}

object1.two()
object1.four()

/////call//////////

const showPesel = function() {
    console.log(`twoj pesel to: ${this.pesel}`);
}

const human = {
    pesel: 2032049402840,
    showPesel: showPesel
}

// human.showPesel()
showPesel.call(human)

const showUser = function(name) {
    console.log(`użytkownik ${name} ma ${this.pesel}`);
}

showUser.call(human,'damian')

/////bind///////////////////////////

const showPeselUser = showPesel.bind(human)
showPeselUser()


///////////////////////////////////

const szarik = {
    children: ['fafik','żaba'],
    showChildren: function() {
        const that = this
        console.log(that);
        this.children.forEach(function(child,index) {
            console.log(that.children[index]);
        })
    }
}

szarik.showChildren()

console.log('---------------------------------');

const szarik1 = {
    children: ['fafik','żaba'],
    showChildren: function() {
        for(const child of this.children) {
            console.log(child);
        }
    }
}

szarik1.showChildren()

console.log('---------------------------------');


const szarik2 = {
    children: ['fafik','żaba'],
    showChildren: function() {
        this.children.forEach((child,index) => {
            console.log(this.children[index]);
        })
    }
}

szarik2.showChildren()

console.log('---------------------------------');

const szarik3 = {
    children: ['fafik','żaba'],
    showChildren: function() {
        this.children.forEach(function (child,index) { console.log(this.children[index]);
        }.bind(this))
    }
}

szarik3.showChildren()
