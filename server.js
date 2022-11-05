const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (request, response) => {
    response.send(`99 little bugs in the code, 99 little bugs. 
    <a href='http://localhost:3000/98'>Take one down, pass it around</a>`)
})

app.get('/0', (request, response) => {
    response.send(`<a href='http://localhost:3000/'>Start Over</a>`)
})

app.get('/:number_of_bottles', (request, response) => {
    response.send(`${request.params.number_of_bottles} little bugs in the code, ${request.params.number_of_bottles} little bugs
    <a href='http://localhost:3000/${request.params.number_of_bottles -1}'>Take one down, pass it around</a>
    ${Math.floor(Math.random()*100)} bugs in the code`)
})

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})