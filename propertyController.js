//propertyController.js

//Import Property Model
const e = require("express");
Property = require('./property')

//For index
exports.index= function (req, res){
    Property.get(function (err, property){
       if (err){
           res.json({
               status: "Error",
               message: err
           });
       }
       res.json({
           status: "Success",
           message: "Retrieved properties successfully",
           data: property
       });
    });
}

//For creating a new property entry
exports.add = function (req, res){
    var property = new Property();
    //property.imageUrl = req.body.imageUrl ? req.body.imageUrl : property.imageUrl;
    //console.log(req.body.imageUrl)
    /*property.imageUrl = req.body.imageUrl ? req.body.imageUrl : "sampleurl";
    property.roomPrice = req.body.roomPrice ? req.body.roomPrice : 500.00;
    property.mealType = req.body.mealType ? req.body.mealType : "type1";
    property.mealPrice = req.body.mealPrice ? req.body.mealPrice : 200.00;
    property.totalPrice = req.body.totalPrice ? req.body.totalPrice : 700.00;*/

    property.imageUrl = "ssdases.com/ddfdf";
    property.roomPrice = 900.00;
    property.mealType = "type2";
    property.mealPrice = 200.00;
    property.totalPrice = 1100.00;

    /*property.imageUrl = req.params.imageUrl ? req.params.imageUrl : "sampleurl";
    property.roomPrice = req.params.roomPrice;
    property.mealType = req.params.mealType;
    property.mealPrice = req.params.mealPrice;
    property.totalPrice = req.params.totalPrice;*/

    //save and check error
    property.save(function (err){
        if (err)
            res.json(err);
        res.json({
            message: "New Property added successfully",
            data: property
        });
    });
}

//view property
exports.view = function (req, res){
    Property.findById(req.params.property_id, function (err, property){
        if (err)
            res.send(err)
        res.json({
            message: 'Property Details',
            data: property
        });
    });
}

//update property
exports.update = function (req, res){
    Property.findById(req.params.property_id, function (err, property){
        if (err)
            res.send(err)
        property.imageUrl = req.body.imageUrl? req.body.imageUrl : property.imageUrl;
        property.roomPrice = req.body.roomPrice;
        property.mealType = req.body.mealType;
        property.mealPrice = req.body.mealPrice;
        property.totalPrice = req.body.totalPrice;

        //save and check errors
        property.save(function (err){
            if (err)
                res.json(err)
            res.json({
                message: "Property Updated Successfully",
                data: property
            })
        });
    });


};

//Delete property
exports.delete = function (req, res){
    Property.deleteOne({
        _id: req.params.property_id
    }, function (err, contact){
        if (err)
            res.send(err)
        res.json({
            status: "Success",
            message: "Deleted property successfully"
        })
    });
}

exports.filterForLandingPage = function (req, res){
    let checkin = req.params.checkIn
    let checkOut = req.params.checkOut
    let numberOfRooms = req.params.numberOfRooms
    let occupancy = req.params.occupancy

    Property.get( function (err, property){
        if (err)
            res.send(err);
        res.json({
            checkin: checkin,
            checkOut : checkOut,
            numberOfRooms : numberOfRooms,
            occupancy : occupancy
        })
    });

}