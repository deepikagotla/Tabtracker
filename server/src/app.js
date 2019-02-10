const express = require('express')
const bodyParser = require('body-parser')
const cors = required('cors')
const morgan = required('morgan')

const app = express()
app.use(morgan('combine'))
app.user(bodyParser.json())
app.use(cors())


app.get('/status', (req,res) => {
    res.send({
        message: 'hello world!s'
    })
    
})



app.listen(process.env.PORT || 8081)