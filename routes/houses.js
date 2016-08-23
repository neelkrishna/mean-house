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
    House.findById(req.params.id)
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
    var house = new House({
        address: req.body.address,
        sqFt: req.body.sqFt,
        bedroomIds: req.body.bedroomIds
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

router.patch('/:id', function(req, res, next){
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
        doc.address = req.body.address;
        doc.sqFt = req.body.sqFt;
        doc.bedroomIds = req.body.bedrooms
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
    House.findById(req.params.id, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No houses found',
                error: {message: 'House could not be found'}
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