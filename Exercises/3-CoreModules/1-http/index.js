const http = require("http")

const port = 3000

const server = http.createServer((req,res) => {
    res.write('Oj HTTP')
    res.end()
})

server.listen(port, () => {
    console.log(`Server running on the port ${port}`)
})