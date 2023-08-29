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



