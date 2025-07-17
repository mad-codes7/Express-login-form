const express = require('express');
const fs = require('fs');
const PORT = 8000;

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));


app.post('/login',(req,res)=>{
    const {username, password}=req.body;
    
    let users = [];

    //reading existing data
    if(fs.existsSync('DATA.json')){
        const data = fs.readFileSync('DATA.json','utf-8');
        users =  JSON.parse(data);
    }

    const newUser = {
        username,
        password,
        timestamp : new Date().toISOString()
    }

    users.push(newUser);

    fs.writeFile('DATA.json', JSON.stringify(users),(err,data)=>{
        return res.json({Status : "SUCCESS"})
    })

    // res.send("HELLO USER")
})

app.listen(PORT,()=>{
    console.log(`Listening on port${PORT}`);
})