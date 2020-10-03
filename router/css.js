let exp=require('express');
let router=exp.Router();
router.use(exp.static('./public'));
let options={
    root:'./public'
}
router.get('/',(req,res)=>{
    res.sendFile('css_page.html',options);
})

router.get('/ex',(req,res)=>{
    res.sendFile('css_ex.html',options);
})
module.exports=router