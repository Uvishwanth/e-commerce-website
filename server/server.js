import express from 'express'

const app=express();

app.use('/',(req,res)=>{res.send({status:'200', message: 'data sent sucessfully'})})

app.listen(3000,()=>{console.log('http://localhost:3001')})