var conn = require('./../inc/db')

var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  conn.query(`
    SELECT * FROM tb_menus ORDER BY title
  `, (err,results)=>{
    if(err){
      console.log(err)
    }else{
      res.render('index', { 
        title: 'Restaurante Saboroso!',
        menus: results 
      });
    }
  })
});

router.get('/contacts', (req,res,next)=>{
  res.render('contact', {
    title: 'Contato - Restaurante Saboroso!'
  })
})

router.get('/menu', (req,res,next)=>{
  res.render('menu', {
    title: 'Menu - Restaurante Saboroso!'
  })
})

router.get('/reservations', (req,res,next)=>{
  res.render('reservation', {
    title: 'Reservas - Restaurante Saboroso!'
  })
})

router.get('/services', (req,res,next)=>{
  res.render('services', {
    title: 'Serviços - Restaurante Saboroso!'
  })
})

module.exports = router;