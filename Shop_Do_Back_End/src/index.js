const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config()

const app = express();
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Hello World 2')
})

console.log('process.env.MONGO_DB', process.env.MONGO_DB)

mongoose.connect(`mongodb+srv://huyvanvu456:${process.env.MONGO_DB}@cluster0.lktcd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log('Connect Db successfully!')
    })
    .catch(err => {
        console.log(err)
    })
app.listen(port, () => {
    console.log('Server is running in port ', + port)
})