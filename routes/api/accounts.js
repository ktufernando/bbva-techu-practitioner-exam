const mongoose = require('mongoose');
const router = require('express').Router();
const auth = require('../auth');
const Account = mongoose.model('Account');

//router.get('/', auth.required, (req, res, next) => {
router.get('/', (req, res, next) => {
    Account.find({accounts:req.body.name}).then(function(account){
      if(!account) { return res.sendStatus(404);}
      return res.json({account});
    }).cath(next);
});

router.get('/users/:name', auth.required, (req, res, next) => {
    Account.find({accounts:req.name}).then(function(account){
      if(!account) { return res.sendStatus(404);}
      return res.json({account});
    }).cath(next);
});

router.post('/', function(req, res, next){
    var account = new Account();

    account.account = req.body.account.account;
//De donde obtengo el usuario logueado?
    //account.name = user.name;
    account.amount = req.body.account.amount;
    account.type = req.body.account.type;

    account.save().then(function(){
      return res.json({account});
    }).catch(next);
});

module.exports = router;
