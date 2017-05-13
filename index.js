const express = require('express');
const session = require('express-session');
const parser = require('body-parser').urlencoded({ extended: false });

const app = express();
app.use(session({ 
    secret: 'keyboard cat', 
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
}));
app.listen(3000, () => console.log('Server started'));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/check', (req, res) => {
    if (req.session.daDangNhap) return res.send('DA_DANG_NHAP');
    res.send('CHUA_DANG_NHAP');
});

app.get('*', (req, res) => res.render('home'));

app.post('/dangnhap', parser, (req, res) => {
    const { username, password } = req.body;
    if (username === 'pho' && password === '123') {
        req.session.daDangNhap = true; // eslint-disable-line
        return res.send('DANG_NHAP_THANH_CONG');
    }
    res.send('DANG_NHAP_THAT_BAI');
});


