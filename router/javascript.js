let exp=require('express');
let router=exp.Router();
router.use(exp.static('./public'));
let options={
    root:'./public'
}
router.get('/',(req,res)=>{
    res.sendFile('javascript_page.html',options);
})

router.get('/firebase',(req,res)=>{
    res.sendFile('firebase.html',options);
})
router.get('/about',(req,res)=>{
    res.sendFile('script_info.html',options);
})

module.exports=router;