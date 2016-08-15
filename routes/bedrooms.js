/**
 * Created by neelkrishna on 8/15/16.
 */
var express = require('express');
var router = express.Router();
var Bedroom = require('../models/bedroom');

router.get('/', function(req, res, next){
    Bedroom.find()
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
    var bedroom = new Bedroom({
        //fill bedroom info
    });
    message.save(function(err, result){
        if(err){
            return res.status(404).json({
                title: 'Error',
                error: err
            });
        }
        res.status(201).json({
            message: 'saved bedroom',
            obj: result
        });
    });
});

router.patch('/', function(req, res, next){
    Bedroom.findById(req.params.id, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'Error',
                error: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'No bedroom found',
                error: {message: 'Bedroom could not be found'}
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