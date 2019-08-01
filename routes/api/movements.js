const mongoose = require('mongoose');
const router = require('express').Router();
const auth = require('../auth');
const Movement = mongoose.model('Movement');

router.get('/', auth.required, (req, res, next) => {
  Movement.find({movements:req.body.id}).then(function(movement){
    if(!movement) { return res.sendStatus(404); }
    return res.json({movement});
    //return res.json({movement: movements.toAuthJSON()});
  }).catch(next);
});

router.post('/', function(req, res, next){
    var movement = new Movement();
    movement.account = req.body.movement.account;
    movement.amount = req.body.movement.amount;
    movement.description = req.body.movement.description;
    movement.date = req.body.movement.date;
    movement.type = req.body.movement.type;
    movement.location = req.body.movement.location;

    movement.save().then(function(){
//Que se supone que retorne?
      return res.json({movement});
    }).catch(next);
});
module.exports = router;
