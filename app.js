import express from 'express'
import fs from 'fs'
import path from 'path'

const filehtml = fs.readFileSync('./index.html', 'utf-8')
const app = express();

app.get("/" , (req,res,next)=>{
     res.send(path.join('index.html'))
})

app.listen('3000' , ()=>{
   console.log('hy i am here')
})