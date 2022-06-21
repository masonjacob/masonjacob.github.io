const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const PORT = process.env.PORT || 3000

const app = express();

app.use(cors());
// app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'MysticQuills|10|',
    database: 'portfolio-website-database'
});

app.get('/get', (req, res) => {
    db.query("SELECT * FROM portfolio-website-database", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
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