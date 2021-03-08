const express = require('express');

const app = express();

app.set('view engine','ejs');
app.use('/css', express.static(__dirname + '/css'));
app.use(express.urlencoded({extended: true}));

app.get('/hello',function(req,res){
    res.render('hello',{name:req.query.nameQuery});
});

app.get('/', (req, res) => {
    res.render(`index`);
});

app.get('/weather', function(req, res) {
    res.render('weather');
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
            return res.send("login success!");
        }
    }

    return res.send("login failed");
});

app.listen(3000, () => {
  console.log("server on");  
});
