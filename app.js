const express = require('express')
const path = require('path')
const PORT = 3031;
const app =  express();


app.use(express.static("public"));

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'views', "home.html")); })






app.listen(PORT, () => {console.log(`Server listening on http://localhost:${PORT}`)})
