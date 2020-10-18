var category2 = [{
        name: "Jamie Oliver Wooden Serving Spoon, Set of 3",
        price: "1,699",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Wooden spoon set is not only functional but decorative", "Spoon made out of Acacia wood and dipped handles in Teal Color.", "The broad, deep spoon heads are designed to scoop generous portions"],
        dimensions: {
            width: "2",
            height: "4.5",
            depth: "36"
        },
        images: ["6.png", "66.png"]
    }, {
        name: "Brabantia Spaghetti Spoon plus Measure Tool",
        price: "13999",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Long stem and pronged scoop with slot – easy in use, measuring and serving spaghetti", "Built-in spaghetti measure - one person portion", "Durable - made of high-grade, heat resistant nylon (max. 220°C)", "No damage to non-stick cookware", "Easy to store - hanging loop", "Easy to clean - dishwasher safe", "Part of the Brabantia TASTY+ collection - a colourful tool for every kitchen job!"],
        dimensions: {
            width: "5.1",
            height: "8.1",
            depth: "30"
        },
        images: ["7.png", "77.png"]
    },
    {
        name: "Brabantia Soup Ladle plus Scraper Tool",
        price: "799",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Designed to get the last drop out of your pan, for right-handed and left-handed use", "Durable - made of high-grade, heat resistant nylon (max. 220°C)", "No damage to non-stick cookware", "Easy to store - hanging loop", "Easy to clean - dishwasher safe", "Part of the Brabantia TASTY+ collection - a colourful tool for every kitchen job!"],
        dimensions: {
            width: "7.7",
            height: "9.5",
            depth: "32.8"
        },
        images: ["8.png", "88.png"]
    },
    {
        name: "Brabantia Serving Spoon plus Scraper",
        price: "799",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Perfect shape to scrape clean the corners of your pan", "Durable - made of high-grade, heat resistant nylon (max. 220°C)", "No damage to non stick cookware", "Easy to store - hanging loop", "Easy to clean - dishwasher safe", "Part of the Brabantia TASTY+ collection - a colourful tool for every kitchen job!"],
        dimensions: {
            width: "7.59",
            height: "9.02",
            depth: "15.8"
        },
        images: ["9.png", "99.png"]
    }
]



var str1 = "";
for (var i = 0; i < category2.length; i++) {
    str1 = str1 +
        '<div class="card text-left">' +
        '<img class="card-img-top" src="products/2/img/' + category2[i].images[0] + '" alt="" height="300">' +
        '<div class="card-body text-center">' +
        '<p class="card-title" id="title1' + i + '" onclick="page(this.id)" style="margin-bottom: 0; font-weight: bold;">' + category2[i].name + '</p>' +
        '<small style="color: #757575;">BAKING UTENSILS</small>' +
        '<p class="card-text" id="desc1' + i + '" style="font-weight: bold;">' + "Rs. " + category2[i].price + '</p>' +
        '<a href="pages/category 2.html" class="btn btn-primary" id="titlee' + i + '" onclick="cat2(this.id)">Buy Now</a>' +
        '</div>' +
        '</div>'

}
document.getElementById("cat2").innerHTML = str1;

function cat2(id) {
    var num = id.slice(id.length - 1);
    var category = category2[num].description;
    var title = document.querySelector("#title1" + num).innerHTML;
    var price = document.querySelector("#desc1" + num).innerHTML;
    var description = category2[num].overview;
    localStorage.setItem("id", num);
    localStorage.setItem("Title", title);
    localStorage.setItem("price", price);
    localStorage.setItem("Description", description);
    localStorage.setItem("category", JSON.stringify(category));

}

function show_cat2() {
    var num = localStorage.getItem("id");
    var dimension = {
        width: category2[num].dimensions.width,
        height: category2[num].dimensions.height,
        depth: category2[num].dimensions.depth,
    }
    var title = localStorage.getItem("Title");
    var price = localStorage.getItem("price");
    var desc = localStorage.getItem("Description");
    document.getElementById("img1").src = "../products/2/img/" + category2[num].images[0];
    document.getElementById("img2").src = "../products/2/img/" + category2[num].images[1];
    document.getElementById("width").innerHTML = dimension.width;
    document.getElementById("height").innerHTML = dimension.height;
    document.getElementById("depth").innerHTML = dimension.depth;
    document.getElementById("h1").innerHTML = title;
    document.getElementById("p").innerHTML = price;
    document.getElementById("description").innerHTML = desc;



}