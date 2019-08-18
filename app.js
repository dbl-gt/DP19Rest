const express=require('express');
const exphbs=require('express-handlebars');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const methodOverride = require('method-override');
const app=express();

mongoose.connect('mongodb://localhost/dbTest')
.then(()=> console.log("Mongo DB connected..."))
.catch(err => console.log(err));

//load the data model
require('./models/Data');
const Data=mongoose.model('data');

// remote deployment
process.env.PWD=process.cwd();

// static files
app.use('/public', express.static(process.env.PWD+'/public'));

// express-handlebars: templating serve dynamic html files
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//method-override middleware
app.use(methodOverride('_method'));

app.get('/', (req, res)=>{
    res.render("mainDrawing");
});

app.post('/dbSend', (req,res)=>{
    console.log("send to db...");
    const data={
        name:"name",
        info:req.body.details
    }
    new Data(data)
    .save()
    .then(data=>{
        res.render("mainDrawing");
    })
    .catch(err=>console.log(err));
});

app.get('/dbGet', (req,res)=>{
    console.log("get from db...");
    Data.find({})
    .then(data=>{
        res.render("mainDrawing");
    })
    .catch(err=>console.log(err));
});

app.get('/favicon.ico', (req, res)=>{
    res.status(204);
});

const port= process.env.port || 5000;
app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
});

