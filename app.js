var express=require("express")
var bp=require("body-parser")
var f=require("express-fileupload");
const app=express();
const {spawn}=require("child_process").spawn()
app.use(f());
app.use(bp.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/a.html");
})
app.post("/",(req,res)=>{
    if(!req.files)console.log("not upload")
    else
    {
        const text=req.files.myfile.data.toString('utf8')
        res.send(text)
        // const childpy = spawn('python',["./app.py",{env:{
        //     NODE_ENV: 'production',
        //     PATH: process.env.PATH
        // }},text]);
        // childpy.stdout.on("data",(data)=>{
        //     console.log(`stdout: ${data}`)
        //     res.send(data.toString())
        // })
        // childpy.stderr.on("data",(data)=>{
        //     console.error(`stderr: ${data}`)
        // })
        // childpy.on("close",(code)=>{
        //     console.log(`CHild exited with code: ${code}`)
        // })
        // // console.log(req.files.myfile.data.toString('utf8'))
    }
})

app.listen(8080,()=>{
    console.log("Server started on 8080");
})
