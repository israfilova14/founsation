const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');

app.use(cors())
app.use(express.json())
dotenv.config()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const {Schema} = mongoose;
const founsationSchema = new Schema ({
    image: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
})

const Founsation = mongoose.model("Founsation", founsationSchema)

app.post ("/founsation", async(req, res) => {
    try{
        const {image, title, description} = req.body;
        const founsation = new Founsation({
            image,
            title,
            description
        })
        await founsation.save()
        res.status(200).send(founsation)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.get("/founsation", async(req, res)=>{
    try{
        const founsations = await Founsation.find({})
        res.status(200).send(founsations)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.delete("/founsation/:id", async(req, res) => {
    try{
        const {id} = req.params
        const founsation = await Founsation.findByIdAndDelete(id)
        res.status(200).send(founsation)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.get ("/founsation/:id", async(res, req) => {
    try{
        const {id} = req.params
        const founsation = await Founsation.findById(id)
        res.status(200).send(founsation)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.put("/founsation/:id", async(res, req) => {
    try{
        const {id} = req.params
        const {image, title, description} = req.body
        const founsation = await Founsation.findByIdAndUpdate(
            id,
            {
                image,
                title,
                description
            },
            {new: true}
        )
        res.status(200).send(founsation)
     }catch(err){
        res.status(500).json({
            message: err
        })
     }
})

const PORT = process.env.PORT;
const DB = process.env.DB_URL

mongoose.connect(DB)
  .then(() => console.log('Connected!'));

app.listen(PORT, console.log("Port is up and runnnin on the post", PORT))