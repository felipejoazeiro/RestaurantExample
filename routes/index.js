var conn = require('./../inc/db')

var express = require('express');
var menus = require('./../inc/menus')
var reservations= require('./../inc/reservations')
var contacts = require('./../inc/contacts')
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
    contacts.render(req,res)
  })
  router.post('/contacts', (req,res,next)=>{
    if(!req.body.name){
      contacts.render(req,res, "Insira o seu nome")
    }else if(!req.body.email){
      contacts.render(req,res, "Insira o seu nome")
    }else if(!req.body.message){
      contacts.render(req,res, "Insira o seu nome")
    }else{
      contacts.save(req.body).then(results=>{
        req.body = {}
        contacts.render(req,res,null, "Contato enviado com sucesso")
      }).catch(err=>{
        contacts.render(req,res,err.message)
      })
    }
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
  reservations.render(req,res)
})

router.post('/reservations',(req,res,next)=>{
  if(!req.body.name){
    reservations.render(req,res, "Digite o nome")
  }else if(!req.body.email){
    reservations.render(req,res, "Digite o email")
  }else if(!req.body.people){
    reservations.render(req,res, "Digite a quantidade de pessoas")
  }else if(!req.body.date){
    reservations.render(req,res, "Digite a data")
  }else if(!req.body.time){
    reservations.render(req,res, "Digite o horário")
  }else{
    reservations.save(req.body).then(results=>{
      req.body = {};
      reservations.render(req, res, null, "Reserva realizada com sucesso")
    }).catch(err=>{
      reservations.render(req,res,err.message)
    })
  }
})

router.get('/services', (req,res,next)=>{
  res.render('services', {
    title: 'Serviços - Restaurante Saboroso!',
    background: 'background-image: url(images/img_bg_1.jpg)',
    h1: 'É um prazer poder servir!'
  })
})

module.exports = router;
