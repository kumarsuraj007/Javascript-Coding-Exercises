// Higher order function.
function giveAccessTo (name) {
    return `Give access to ${name}`
}

function authenticate(verify) {
    let arr = [];
    for(let i = 0; i < verify; i++) {
        arr.push(i)
    }
    return true;
}    

function letPerson(person, fn) {
    if(person.level === 'admin') {
        fn(5000)
    } else if (person.level === 'user') {
        fn(10000)
    }
    return giveAccessTo(person.name)
}

console.log(letPerson({level: 'admin', name:'Suraj'}, authenticate));


// call(), apply(), bind();

let wizard = {
    name: 'Merlin',
    health: 50,
    heal (num1, num2) {
        return this.health = num1 + num2;
    },
};

let archer = {
    name: 'robin',
    health: 30
}

// call and apply works the same but the difference is that call take simple parameters and apply take an array of parameter.
console.log('1', archer)
// wizard.heal.call(archer, 50, 30)
// wizard.heal.apply(archer, [50, 30])
// bind gives us new function 
const healArcher = wizard.heal.bind(archer, 50, 100);
healArcher()
console.log('2', archer)









