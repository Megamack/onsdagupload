let express = require("express");
let db = require("sqlite3");

let app = express();

app.use(express.static("public"))

app.use(express.json())
app.use( express.urlencoded() )

app.get("/test", function(req,res){
    console.log("TEST2");
    res.send("message2")
})

app.post("/form", function(req,res){
    let name = req.body.name;

    //Lägg in värdet i DB
    let message = "Tjena namnet har lagts in i databasen";

    console.log(name)
    res.json({name:name, message:message})


})


app.listen(3333)



