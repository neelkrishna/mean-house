/**
 * Created by neelkrishna on 8/15/16.
 */
var express = require('express');
var router = express.Router();
var House = require('../models/house');

router.get('/', function(req, res, next){
    House.find()
        .exec(function(err, docs){
            if(err){
                return res.status(404).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        });

});

router.post('/', function(req, res, next){
    var house = new House({
        //fill house info
    });
    house.save(function(err, result){
        if(err){
            return res.status(404).json({
                title: 'Error',
                error: err
            });
        }
        res.status(201).json({
            message: 'saved house',
            obj: result
        });
    });
});

router.patch('/', function(req, res, next){
    House.findById(req.params.id, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'Error',
                error: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'No house found',
                error: {message: 'House could not be found'}
            });
        }
        doc.content = req.body.content;
        doc.save(function(err, result){
            if(err){
                return res.status(404).json({
                    title: 'Error',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
    })
});


module.exports = router;