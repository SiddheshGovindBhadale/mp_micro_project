const express = require("express")
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require("path")
const hbs = require("hbs")
const User = require("../src/models/users")

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

app.use(cors({
  origin:"*"
}))

const public_path = path.join(__dirname , "../public")
const temp_path = path.join(__dirname , "../templates/views")
const partials_path = path.join(__dirname , "../templates/partials")

app.use(express.static(public_path))
app.set("view engine" , "hbs")
app.set("views" , temp_path)
hbs.registerPartials(partials_path)



app.get("/" , async (req , res) => {
  res.render("index")
})

app.post("/" , async (req , res) => {
  try{
     const data = req.body.data
     fs.writeFile('../file.asm' , data , (error) => {
       console.log("file created")
     })
     
  }catch(e){
     console.log(e)
  }
})


app.listen( port , (e) => {
  console.log(`Server is running on ${port}`)
})