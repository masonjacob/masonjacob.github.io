const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3000

const app = express();

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'MysticQuills|10|',
    database: 'portfolio-website-database'
});

app.post('/post', (req, res) => {
    const id  = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const image = req.body.image;
    db.query(
        'INSERT INTO projects (id, name, description, image) VALUES (?,?)', 
        [id, name, description, image], 
        (err, result) => {
            if (err) {
                console.error(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.get("/api", (req,res) => {
    res.json({message: "Hello World!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});