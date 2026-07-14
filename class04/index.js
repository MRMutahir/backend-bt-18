import expres from 'express'

const app = expres()

app.use(expres.json())

const database = []

app.get('/', (req, res) => {
    res.json({
        message: "data list",
        data: database
    }).status(200)
})

app.post('/', (req, res) => {
    const body = req.body
    const id = database.length + 1
    database.push({
        ...body,
        id
    })
    res.json({
        message: "create data ",
        data: database
    }).status(200)
})


app.post('/id', (req, res) => {
    const id = req.body.id
    if (!id) {
        res.status(404).send("User id not found")
    }

    const getdata = database.map((ele) => {
        const user = ele.id == id ? database[id] : false
        console.log(user)
        return user
    })
    res.send(getdata)
})

app.listen(3000, () => console.log('server runing'))