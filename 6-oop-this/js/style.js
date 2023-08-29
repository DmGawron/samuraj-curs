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
