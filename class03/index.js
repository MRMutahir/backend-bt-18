import express from 'express'
const app = express()
const port = 3000

let userInfo = [
    {
        name: "Muhammad Mutahir",
        email: "mutahir@gmail.com",
        age: 22,
    }
]


app.use(express.json())

app.get("/", (req, res) => {
    res.send(userInfo)
})

app.post('/', (req, res) => {
    const body = req.body
    const { name, email, age } = body
    if (name && email && age) {
        userInfo.push({
            name, email, age
        })
        res.status(200).json({ success: true, message: "create new user", data: userInfo });
    } else {
        res.status(400).json({ success: false, message: "Bad req" });
    }

})



app.listen(port, () => {
    console.log(`server running ${port}`)
})