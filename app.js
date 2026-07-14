const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://neeha:neeha123@ac-8g72doc-shard-00-00.pg0x2ra.mongodb.net:27017,ac-8g72doc-shard-00-01.pg0x2ra.mongodb.net:27017,ac-8g72doc-shard-00-02.pg0x2ra.mongodb.net:27017/hackdb?ssl=true&replicaSet=atlas-2j5jph-shard-0&authSource=admin&appName=Cluster0").then(
    () => {
        console.log("Mongodb connected")
    }
).catch(
    (error) => {
        console.log(error)
    }
);

const Hack=mongoose.model("Hackathon Entry",new mongoose.Schema(
    {
        teamid:String,
        teamname:String,
        teamldname:String,
        lemail:String,
        lphone:String,
        clgname:String,
        noofmem:String,
        projecttitle:String,
        pstrack:String,
        technostack:String,
        mentname:String,
        regdate:String,
        tableno:String



    }
))
app.get("/test",(req,res) => {
    res.send("hello")
})

app.post("/add-team",async (req,res)=>{
    await Hack.create(req.body)
    res.json({"status":"success"})
})


app.post("/view-team", async (req, res) => {
    const hacks = await Hack.find()
    res.json(hacks)
})


app.listen(3000,() => {
    console.log("server started")
})