var category1 = [{
        name: "KitchenAid  Contour Silver 2-Speed Hand Blender",
        price: "13999",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Plastic and steel construction", "BPA-free Tritan  plastic and tumblers", "Stainless steel blades", "Auto-iQ intelligent blending programs: Puree, Frozen Drinks/Smoothies, Blend, Ultra Blend and Pulse", "blending speeds: low, medium and high", "72-oz. capacity/64-oz. liquid capacity pitcher", "24- and 32-oz. travel cups and two travel lids", "1,200 watts", "Removable parts are dishwasher-safe", "Made in China", "Item Number: BL641"],
        dimensions: {
            width: "2.03",
            height: "10.08",
            depth: "2.03"
        },
        images: ["7.jpg", "77.jpg"]
    },
    {
        name: "Ninja  Foodi Cold and Hot Blender",
        price: "17000",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Plastic and steel construction", "BPA-free Tritan  plastic and tumblers", "Stainless steel blades", "Auto-iQ intelligent blending programs: Puree, Frozen Drinks/Smoothies, Blend, Ultra Blend and Pulse", "blending speeds: low, medium and high", "72-oz. capacity/64-oz. liquid capacity pitcher", "24- and 32-oz. travel cups and two travel lids", "1,200 watts", "Removable parts are dishwasher-safe", "Made in China", "Item Number: BL641"],
        dimensions: {
            width: "7.86",
            height: "8.78",
            depth: "17.91"
        },
        images: ["8.jpg", "88.jpg"]
    },
    {
        name: "Hurom Citrus Juicer",
        price: "23000",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Plastic and steel construction", "BPA-free Tritan  plastic and tumblers", "Stainless steel blades", "Auto-iQ intelligent blending programs: Puree, Frozen Drinks/Smoothies, Blend, Ultra Blend and Pulse", "blending speeds: low, medium and high", "72-oz. capacity/64-oz. liquid capacity pitcher", "24- and 32-oz. travel cups and two travel lids", "1,200 watts", "Removable parts are dishwasher-safe", "Made in China", "Item Number: BL641"],
        dimensions: {
            width: "1.22",
            height: "7.4",
            depth: "9.12"
        },
        images: ["5.jpg", "55.jpg"]
    },
    {
        name: "Cuisinart  Smart Stick  Cordless Hand Blender",
        price: "12000",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: ["Plastic and steel construction", "BPA-free Tritan  plastic and tumblers", "Stainless steel blades", "Auto-iQ intelligent blending programs: Puree, Frozen Drinks/Smoothies, Blend, Ultra Blend and Pulse", "blending speeds: low, medium and high", "72-oz. capacity/64-oz. liquid capacity pitcher", "24- and 32-oz. travel cups and two travel lids", "1,200 watts", "Removable parts are dishwasher-safe", "Made in China", "Item Number: BL641"],
        dimensions: {
            width: "2.03",
            height: "10.08",
            depth: "2.03"
        },
        images: ["6.jpg", "66.jpg"]
    }
]



var str1 = "";
for (var i = 0; i < category1.length; i++) {
    str1 = str1 +
        '<div class="card text-left">' +
        '<img class="card-img-top" src="products/1/img/' + category1[i].images[0] + '" alt="" height="300">' +
        '<div class="card-body text-center">' +
        '<p class="card-title" id="titl' + i + '" onclick="page(this.id)" style="margin-bottom: 0; font-weight: bold;">' + category1[i].name + '</p>' +
        '<small style="color: #757575;">BAKING UTENSILS</small>' +
        '<p class="card-text" id="des' + i + '" style="font-weight: bold;">' + "Rs. " + category1[i].price + '</p>' +
        '<a href="pages/category 1.html" class="btn btn-primary" id="titl' + i + '" onclick="cat1(this.id)">Buy Now</a>' +
        '</div>' +
        '</div>'

}
document.getElementById("cat1").innerHTML = str1;

function cat1(id) {
    var num = id.slice(id.length - 1);
    var category = category1[num].description;
    var title = document.querySelector("#titl" + num).innerHTML;
    var price = document.querySelector("#des" + num).innerHTML;
    var description = category1[num].overview;
    localStorage.setItem("id", num);
    localStorage.setItem("Title", title);
    localStorage.setItem("price", price);
    localStorage.setItem("Description", description);
    localStorage.setItem("category", JSON.stringify(category));

}

function show_cat1() {
    var num = localStorage.getItem("id");
    var dimension = {
        width: category1[num].dimensions.width,
        height: category1[num].dimensions.height,
        depth: category1[num].dimensions.depth,
    }
    var title = localStorage.getItem("Title");
    var price = localStorage.getItem("price");
    var desc = localStorage.getItem("Description");
    document.getElementById("img1").src = "../products/1/img/" + category1[num].images[0];
    document.getElementById("img2").src = "../products/1/img/" + category1[num].images[1];
    document.getElementById("width").innerHTML = dimension.width;
    document.getElementById("height").innerHTML = dimension.height;
    document.getElementById("depth").innerHTML = dimension.depth;
    document.getElementById("h1").innerHTML = title;
    document.getElementById("p").innerHTML = price;
    document.getElementById("description").innerHTML = desc;



}