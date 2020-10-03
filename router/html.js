let express=require('express');
let router=express.Router();
router.use(express.static('./public'));
router.get('/',(req,res)=>{
    let options={
        root:'./public'
    }
    res.sendFile('html_page.html',options);
})

router.get('/ex',(req,res)=>{
    res.sendFile('html_ex.html',{root:'./public'});
})

module.exports=router;