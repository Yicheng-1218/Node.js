let express=require('express');
let router=express.Router();
let javascript=require('./javascript.js');
let html=require('./html.js');
let css=require('./css.js');
router.use(express.static('./public'));
router.get('/',(req,res)=>{
    
    let options = {
        root: './public',
        dotfiles: 'deny'
    }
    res.sendFile('router_page.html',options)
})

router.use('/html',html);
router.use('/css',css);
router.use('/javascript',javascript);

module.exports=router;