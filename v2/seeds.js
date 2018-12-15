var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
        {
            name: "Aquin beach",
            image: "https://farm1.staticflickr.com/48/135446785_7469688b2b.jpg",
            description: "That is seventeen five - your half of the thirty-five thousand. Plus there's an extra fifteen in there, it's all yours, you've earned it. We made a deal. That's right. Because I think that we can do business together - we came to an understanding. Take a look at the money in your hand. Now just imagine making that every week. That's right. Two pounds a week, thirty-five thousand a pound."
        },
        
        {
            name: "Aux Cayes",
            image: "https://farm6.staticflickr.com/5349/7061833149_ae64eb6cac.jpg",
            description: "That is seventeen five - your half of the thirty-five thousand. Plus there's an extra fifteen in there, it's all yours, you've earned it. We made a deal. That's right. Because I think that we can do business together - we came to an understanding. Take a look at the money in your hand. Now just imagine making that every week. That's right. Two pounds a week, thirty-five thousand a pound."
        },
        
        {
            name:"Au Cap-haitian",
            image: "https://farm9.staticflickr.com/8319/8070545277_9c07782969.jpg",
            description: "Disrupt jean shorts viral hella meh, plaid cupidatat magna art party. Echo Park adipisicing literally narwhal. Williamsburg leggings church-key, craft beer forage cornhole jean shorts blue bottle pariatur."
        }
        
    ];

var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    author: String
});

module.exports = mongoose.model("Comment", commentSchema);