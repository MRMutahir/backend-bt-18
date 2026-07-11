import http from "http"

const serverA = http.createServer((req, res) => {
    res.end("Hello World")
})


const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is successfully running PORT ${PORT}`)
});