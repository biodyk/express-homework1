const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: "amugeuna",
    resave: false,
    saveUninitialized: true
}));
app.set('view engine','ejs');
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use(express.urlencoded({extended: true}));

app.get('/hello',function(req,res){
    res.render('hello',{name:req.query.nameQuery});
});

app.get('/user', (req,res) => {
    res.render('user',{name: req.session.item}
    );
});
app.get('/', (req, res) => {
    if(req.session.item !== undefined){
        return res.redirect("/user");
    }
    res.render(`index`);
});

app.get('/weather', function(req, res) {
    res.render('weather');
})
app.get('/balance',function(req, res){
    res.render('select');
})
app.get('/result', (req, res) => {
    console.log(req.query["ID"], req.query.name);
    if(req.query["ID"] === 'biodyk') {
        if(req.query["password"] === 'ab1212') {
            return res.send("login success!");
        }
    }

    return res.send("login failed");
});

app.post('/result', (req, res) => {
    console.log(req.body);
    if(req.body["ID"] === 'biodyk') {
        if(req.body["password"] === 'ab1212') {
            req.session.item = req.body["ID"];
            return res.send("login success!");
        }
    }

    return res.send("login failed");
});

app.post('/select', (req, res) => {
    console.log(req.body);
    
    res.send("you choose " + req.body["eman"] + "!!!");
})

app.listen(3000, () => {
  console.log("server on");  
});

