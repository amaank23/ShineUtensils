var category3 = [{
        name: "Burleigh Black Regal Peacock Tea Cup",
        price: "2678",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Cast by hand from English earthenware clay at Middleport Pottery", "Uniquely decorated by skilled craftspeople with Burleigh’s centuries-old technique of tissue transfer printing from hand-engraved copper rollers", "Capacity: 187ml"],
        dimensions: {
            width: "2.03",
            height: "4.08",
            depth: "3.03"
        },
        images: ["6.jpg", "66.jpg"]
    }, {
        name: "Denby Studio Blue Ridged Mug, Set of 2",
        price: "6299",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Expertly lazed to prevent chippin and enhance durability", " Made in Enland", " Included in Denby’s 10 Year uarantee", " Suitable for oven, microwave and freezer", " Dishwasher safe"],
        dimensions: {
            width: "3.03",
            height: "6.08",
            depth: "5.03"
        },
        images: ["7.png"]
    },
    {
        name: "Denby Natural Canvas Textured Tea and Coffee Cup",
        price: "2299",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Made in England", "Included in Denby’s 10 Year Guarantee", "Expertly glazed to prevent chipping and enhance durability", "Suitable for oven, microwave and freezer", "Dishwasher safe"],
        dimensions: {
            width: "3.86",
            height: "5.78",
            depth: "4.91"
        },
        images: ["8.png", "88.png"]
    },
    {
        name: "Denby Natural Canvas Textured Mugs, Set of 2",
        price: "5199",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Made in England", "Included in Denby’s 10 Year Guarantee", "Expertly glazed to prevent chipping and enhance durability", "Suitable for oven, microwave and freezer", "Dishwasher safe"],
        dimensions: {
            width: "2.59",
            height: "5.02",
            depth: "6.8"
        },
        images: ["9.png", "99.png"]
    }
]



var str1 = "";
for (var i = 0; i < category3.length; i++) {
    str1 = str1 +
        '<div class="card text-left">' +
        '<img class="card-img-top" src="products/3/img/' + category3[i].images[0] + '" alt="" height="300">' +
        '<div class="card-body text-center">' +
        '<p class="card-title" id="title2' + i + '" onclick="page(this.id)" style="margin-bottom: 0; font-weight: bold;">' + category3[i].name + '</p>' +
        '<small style="color: #757575;">BAKING UTENSILS</small>' +
        '<p class="card-text" id="desc2' + i + '" style="font-weight: bold;">' + "Rs. " + category3[i].price + '</p>' +
        '<a href="pages/category 3.html" class="btn btn-primary" id="titlee2' + i + '" onclick="cat3(this.id)">Buy Now</a>' +
        '</div>' +
        '</div>'

}
document.getElementById("cat3").innerHTML = str1;

function cat3(id) {
    var num = id.slice(id.length - 1);
    var category = category3[num].description;
    var title = document.querySelector("#title2" + num).innerHTML;
    var price = document.querySelector("#desc2" + num).innerHTML;
    var description = category3[num].overview;
    localStorage.setItem("id", num);
    localStorage.setItem("Title", title);
    localStorage.setItem("price", price);
    localStorage.setItem("Description", description);
    localStorage.setItem("category", JSON.stringify(category));

}

function show_cat3() {
    var num = localStorage.getItem("id");
    var dimension = {
        width: category3[num].dimensions.width,
        height: category3[num].dimensions.height,
        depth: category3[num].dimensions.depth,
    }
    var title = localStorage.getItem("Title");
    var price = localStorage.getItem("price");
    var desc = localStorage.getItem("Description");
    document.getElementById("img1").src = "../products/3/img/" + category3[num].images[0];
    document.getElementById("img2").src = "../products/3/img/" + category3[num].images[1];
    document.getElementById("width").innerHTML = dimension.width;
    document.getElementById("height").innerHTML = dimension.height;
    document.getElementById("depth").innerHTML = dimension.depth;
    document.getElementById("h1").innerHTML = title;
    document.getElementById("p").innerHTML = price;
    document.getElementById("description").innerHTML = desc;



}