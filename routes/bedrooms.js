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
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        });

});

router.get('/:id', function(req, res, next){
    Bedroom.findById(req.params.id)
        .exec(function(err, doc){
            if(err){
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: doc
            });
        });

});

router.post('/', function(req, res, next){
    var bedroom = new Bedroom({
        bedSize: req.body.bedSize,
        sqFt: req.body.sqFt,
        houseId: req.body.houseId
    });
    console.log(JSON.stringify(bedroom));
    bedroom.save(function(err, result){
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

router.patch('/:id', function(req, res, next){
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
        doc.bedSize = req.body.bedSize;
        doc.sqFt = req.body.sqFt;
        doc.house = req.body.house;
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

router.delete('/:id', function (req, res, next) {
    Bedroom.findById(req.params.id, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No bedroom found',
                error: {message: 'Bedroom could not be found'}
            });
        }
        doc.remove(function (err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
    });
});

module.exports = router;