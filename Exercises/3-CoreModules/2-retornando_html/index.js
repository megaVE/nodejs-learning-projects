const http = require("http")

const port = 3000

const server = http.createServer((req,res) => {
    res.statusCode = 200 // Requisição bem sucedida
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>My first HTML server!</h1>')
})

server.listen(port, () => {
    console.log(`Server running on the port ${port}`)
})