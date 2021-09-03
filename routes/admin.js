var express = require('express')
var router = express.Router()

router.get("/",(req,res,next)=>{
    res.render("admin/index")
})
router.get("/login",(req,res,next)=>{
    res.render("admin/login")
})
router.get("/contacts",(req,res,next)=>{
    res.render("admin/contacts")
})
router.get("/email",(req,res,next)=>{
    res.render("admin/email")
})
router.get("/reservations",(req,res,next)=>{
    res.render("admin/reservations")
})
router.get("/users",(req,res,next)=>{
    res.render("admin/users")
})

module.exports = router