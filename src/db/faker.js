const fs = require('fs')
const Chance = require('chance')
const l = console.log

const c = new Chance();



c.mixin({
    'todo': function () {
        return {
            id : c.natural({min: 1, max: 200}),
            name : c.sentence({words: 5}),
            isComplete : c.bool()
        }
    }
})

let data = { "todos" : c.unique(c.todo, 20) }
const file = fs.createWriteStream('./db.json')
file.write(JSON.stringify(data))
file.end()

