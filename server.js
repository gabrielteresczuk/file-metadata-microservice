const express = require('express');
const multer = require('multer');
const app = express();


/* ----------- middleware ----------- */

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* ------------- mehtods ------------ */

// importante cargar el multer
const upload = multer();

app.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{

    const file = req.file;

    res.json({
        "name": file.originalname,
        "type": file.mimetype,
        "size": file.size
    })
});

/* ------------ listener ------------ */
const port = 8080;
const server = app.listen(port,()=>console.log('escuchando el puerto '+8080));
server.on('error',error => console.log('ocurrio un error '+error));