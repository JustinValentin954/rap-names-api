const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age':'30',
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation':'Plaistow, London, England',
    },
    'supa hot fire':{
        'age':'Age means nothing to him',
        'birthName':'Glasses, Jacket, Shirt man',
        'birthLocation':'Everywhere',
    },
    'drake':{
        'age':'36',
        'birthName':'Aubrey Drake Graham',
        'birthLocation':'Toronto, Ontario, Canada',
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
}) 

app.get('/api/:name',(req, res)=>{
    const rapperName = req.params.name.toLowerCase()
    if (rappers[rapperName]){
        res.json(rappers[rapperName])
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})