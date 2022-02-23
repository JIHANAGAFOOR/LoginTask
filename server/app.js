const express=require("express")
const cors=require("cors")
const app=express();
app.use(cors());
app.use("/login",(req,res)=>{
    res.send({
        token:'myToken'
    });
})
app.listen(1234,()=>{
    console.log("server is listening");
})