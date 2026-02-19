import express from 'express';
import cors from 'cors';

async function main() {

const hostname = 'localhost'
const port = 3000

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) =>{

res.send({

sucess: true,
statuscode: 280,
body: 'Welcome to Sneezeify'


})


})

app.listen(port, () => {
    console.log(`Server is running on: http://${hostname}:${port}`)
})




}

main()