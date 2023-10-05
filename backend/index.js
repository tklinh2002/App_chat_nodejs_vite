var express = require('express')
var cors = require('cors')
const { default: axios } = require('axios')


var app = express() 
app.use(express.json())
app.use(cors({origin:true}))


 
app.post("/authenticate", async (req, res)=>{
    const {username} = req.body
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "55ff1e4b-090e-4827-a83c-301846ab8871"}}
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
})
 
app.listen(3001)