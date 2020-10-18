var category4 = [{
        name: "Frieling Mini Shortcake Pan",
        price: "12000",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Shortcake pan from Frieling (care of Zenker of Germany)", "Bakes 12 miniature golden shortcakes for topping with sweetened fruit and whipped cream", "Makes delicious, light strawberry shortcake desserts for summer lunches or picnics", "Shortcakes can be made of red velvet, chocolate, or spice cake for a new twist on an old standby", "Shortcake rounds measure 2.25 in diameter each (approximate)", "Made of carbon steel", "Nonstick coating for snappy shortcake release + easy cleanup", "Dimensions: 15 x 10", "Made in Germany"],
        dimensions: {
            width: "2.03",
            height: "10.08",
            depth: "2.03"
        },
        images: ["6.jpg", "66.jpg"]
    },
    {
        name: "Fiesta 8oz Ramekin  Shamrock",
        price: "13999",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Made from lead-free, fully-vitrified china", "Oven-safe to 500°F", "Microwave-safe", "Dishwasher-safe", "Freezer-safe", "Capacity: 8oz", "Dimensions: 2 high x 4 diameter", "Made in the USA", "Item: 0568324"],
        dimensions: {
            width: "8.03",
            height: "10.08",
            depth: "9.03"
        },
        images: ["7.jpg"]
    },
    {
        name: "Fiesta 9 x 9 Square Baker  Scarlet",
        price: "9000",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Fully vitrified industrial strength", "Signature Fiesta® sculpted concentric rings", "Oven safe to 500°F", "Dishwasher safe ", "Microwave safe ", "Freezer safe", "Dimensions: 9 x 9 x 2.5", "5-year chip-free Homer Laughlin Fiesta® Warranty", "Made in the USA", "Item: 0962326"],
        dimensions: {
            width: "7.86",
            height: "8.78",
            depth: "7.1"
        },
        images: ["8.jpg"]
    },
    {
        name: "Zenker by Frieling Springform Cake Pan - 10",
        price: "10499",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["10” nonstick springform cake pan from Frieling/Zenker Bakeware", "Perfect for birthday cakes, tiered wedding cakes, & New York-style cheesecakes", "Textured bottom for clean release", "Coated carbon steel is light in the hand, heats evenly", "2.5 depth for deep-dish cakes & desserts", "Heat resistant up to 450° F", "Modern black finish", "Hand washing recommended", "Zenker by Frieling springform cake pan dimensions: 10 diameter x 2.5 deep", "Zenker by Frieling springform cake pan warranty: 5 years on pan, lifetime on buckle"],
        dimensions: {
            width: "14.59",
            height: "16.02",
            depth: "15.8"
        },
        images: ["9.jpg"]
    }
]



var str1 = "";
for (var i = 0; i < category4.length; i++) {
    str1 = str1 +
        '<div class="card text-left">' +
        '<img class="card-img-top" src="products/4/img/' + category4[i].images[0] + '" alt="" height="300">' +
        '<div class="card-body text-center">' +
        '<p class="card-title" id="title3' + i + '" onclick="page(this.id)" style="margin-bottom: 0; font-weight: bold;">' + category4[i].name + '</p>' +
        '<small style="color: #757575;">BAKING UTENSILS</small>' +
        '<p class="card-text" id="desc3' + i + '" style="font-weight: bold;">' + "Rs. " + category4[i].price + '</p>' +
        '<a href="pages/category 4.html" class="btn btn-primary" id="titlee3' + i + '" onclick="cat4(this.id)">Buy Now</a>' +
        '</div>' +
        '</div>'

}
document.getElementById("cat4").innerHTML = str1;

function cat4(id) {
    var num = id.slice(id.length - 1);
    var category = category4[num].description;
    var title = document.querySelector("#title3" + num).innerHTML;
    var price = document.querySelector("#desc3" + num).innerHTML;
    var description = category4[num].overview;
    localStorage.setItem("id", num);
    localStorage.setItem("Title", title);
    localStorage.setItem("price", price);
    localStorage.setItem("Description", description);
    localStorage.setItem("category", JSON.stringify(category));

}

function show_cat4() {
    var num = localStorage.getItem("id");
    var dimension = {
        width: category4[num].dimensions.width,
        height: category4[num].dimensions.height,
        depth: category4[num].dimensions.depth,
    }
    var title = localStorage.getItem("Title");
    var price = localStorage.getItem("price");
    var desc = localStorage.getItem("Description");
    document.getElementById("img1").src = "../products/4/img/" + category4[num].images[0];
    document.getElementById("img2").src = "../products/4/img/" + category4[num].images[1];
    document.getElementById("width").innerHTML = dimension.width;
    document.getElementById("height").innerHTML = dimension.height;
    document.getElementById("depth").innerHTML = dimension.depth;
    document.getElementById("h1").innerHTML = title;
    document.getElementById("p").innerHTML = price;
    document.getElementById("description").innerHTML = desc;



}