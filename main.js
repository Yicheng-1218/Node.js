let express = require('express');
let app = express();
let port = process.env.PORT || 8888;
let router=require('./router/main_router.js');
let bodyparser=require('body-parser');//需要接收post表單必備以下三行
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static('./public'));


app.get("/", (req, res) => {
    let options={
        root:'./public'
    }
    res.sendFile('main_page.html',options);
});

app.post('/',(req,res)=>{
    let id=req.body.username;
    let pwd=req.body.pwd;
    console.log(id,pwd);
    if(id=='123' && pwd=='456')
    {
        app.use('/lang',router);
        res.redirect('https://my-first-web-1.herokuapp.com/lang');
        
    }else{
        res.send('你是想看看故意打錯會怎樣嗎?');
    }
    
})



app.listen(port, () => {
    console.log(`server listen on port =${port}`)
});