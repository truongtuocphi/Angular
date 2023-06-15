const exp = require('express');
const mysql = require('mysql')
const fs = require('fs');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
var cors = require('cors');
const { validateHeaderValue } = require('http');

const app = exp();
const port = 3200;

const PRIVATE_KEY = fs.readFileSync('private-key.txt');
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Đây là trang chủ');
});

//TODO: connect database 
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
});

database.connect((error) => {
    if (error) {
        console.log('Error connect: ' + error);
        return;
    }
    console.log('Connect to database');
});

app.post('/login', async (req, res) => {
    const un = req.body.username;
    const pw = req.body.password;
    try {
        const isAuthenticated = await checkUserPass(un, pw);
        console.log(isAuthenticated);
        if (isAuthenticated) {
            const userInfo = getUserInfo(un);
            const jwtBearerToken = jwt.sign({}, PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 120,
                subject: userInfo.id
            })
            //res.cookie("SESSIONID", jwtBearerToken, {httpOnly:true, secure:false});
            res.status(200).json({ idToken: jwtBearerToken, expiresIn: 120 });
        }
        else res.sendStatus(401); // send status 401 Unauthorized  
    }catch (error) {
        console.error(error);
        res.sendStatus(500); // send status 500 Internal Server Error
    }
});

// checkUserPass = (un, pw) => {
//     // if (un == 'aa' && pw == '123') { return true }
//     // if (un == 'bb' && pw == '321') { return true }
//     let flag = false
//     let query = `SELECT * FROM account WHERE account = ? AND password = ?`;
//     database.query(query, [un, pw], (err, results) => {
//         if(err) {
//             throw err;
//         }else {
//             flag = true;
//         }
//     });
//     return flag;
// }

checkUserPass = (un, pw) => {
    return new Promise((resolve, reject) => {
        let query = `SELECT * FROM account WHERE account = ? AND password = ?`;
        database.query(query, [un, pw], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.length > 0);
            }
        });
    });
}

getUserInfo = (username) => {
    if (username == 'admin') return { "id": "1", hoten: "Trương Tước Phi" }
    if (username == 'bb') return { "id": "2", hoten: "Nguyễn Thị Lượm" }
    return { "id": "-1", "hoten": "" }
}

app.listen(port, () => {
    console.log('Ưng dụng đang chạy với port ' + port);
});