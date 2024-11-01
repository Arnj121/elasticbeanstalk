const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('sdfsfdfs')
})

app.listen(5000,'0.0.0.0',()=>{
    console.log('running')
})