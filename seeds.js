var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [

]
 
function seedDB(){
   //Remove all campgrounds
   Campground.deleteMany({}, function(err){
//        if(err){
//
//
//           console.log(err);
//        }
//        console.log("removed campgrounds!");
//        Comment.deleteMany({}, function(err) {
//            if(err){
//                console.log(err);
//            }
//            console.log("removed comments!");
//             //add a few campgrounds
//            data.forEach(function(seed){
//                Campground.create(seed, function(err, campground){
//                    if(err){
//                        console.log(err)
//                    } else {
//                        console.log("added a campground");
//                        //create a comment
//                        Comment.create(
//                            {
//                                text: "This place is great, but I wish there was internet",
//                                author: "Homer"
//                            }, function(err, comment){
//                                if(err){
//                                    console.log(err);
//                                } else {
//                                    campground.comments.push(comment);
//                                    campground.save();
//                                    console.log("Created new comment");
//                                }
//                            });
//                    }
//                });
//            });
//        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;