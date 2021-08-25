var conn = require('./../inc/db')

var express = require('express');
var menus = require('./../inc/menus')
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  menus.getMenus().then(results=>{
    res.render('index', { 
      title: 'Restaurante Saboroso!',
      menus: results,
      isHome: true
    });
  })
});

router.get('/contacts', (req,res,next)=>{
    res.render('contact', {
      title: 'Contact - Restaurante Saboroso!',
      background: 'images/img_bg_3.jpg',
      h1: 'Diga um oi!'
    })
})

router.get('/menu', (req,res,next)=>{
  menus.getMenus().then(results=>{
    res.render('menu', { 
      title: 'Menu - Restaurante Saboroso!',
      background: 'background-image: url(images/img_bg_1.jpg)',
      h1: 'Saboreie nosso menu!',
      menus: results
    })
  })
})

router.get('/reservations', (req,res,next)=>{
  res.render('reservation', {
    title: 'Reservas - Restaurante Saboroso!',
    background: 'background-image: url(images/img_bg_2.jpg)',
    h1: 'Reserve uma Mesa!'
  })
})

router.get('/services', (req,res,next)=>{
  res.render('services', {
    title: 'Serviços - Restaurante Saboroso!',
    background: 'background-image: url(images/img_bg_1.jpg)',
    h1: 'É um prazer poder servir!'
  })
})

module.exports = router;
