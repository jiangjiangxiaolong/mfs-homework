var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header({"Access-Control-Allow-Origin":"*"});
  res.render('index', { title: '注册' });
});

router.get('/json',function(req,res,next){
  res.header({"Access-Control-Allow-Origin":"http://www.a.com:3000"});
  res.json({ title: 'Hello' });
});
router.post('/reg',function(req,res,next){
  res.header({"Access-Control-Allow-Origin":"*"});
  var u = req.body['username'];
  var p1 = req.body['password1'];
  var p2 = req.body['password2'];
  if (p1 == p2 && p1 != "" && u != "mafengshe"){
    res.render('index',{errno:0,errmsg:"注册成功",data:{} });
  }
  else{
    res.render('index',{errno:1,errmsg:"用户名已经存在",data:{}});
  }

});
module.exports = router;
