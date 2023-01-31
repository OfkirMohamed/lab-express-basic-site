const express = require("express")
const app = express()
const port = 3000

app.use(express.static(__dirname + "/public"))

app.get("/", (req,resp) => {
    resp.sendFile(__dirname + "/views/homepage.html")
})
app.get("/bio", (req, resp) => {
    resp.sendFile(__dirname + "/views/2ndpage.html")
})
app.get("/highlights", (req, resp) => {
    resp.sendFile(__dirname + "/views/3rdpage.html")
})
app.listen(port, () => {
    console.log(`yo we listening in the port ${port}`)
})