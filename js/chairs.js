var chairItems = [
    {
        chairImg: "../public/dinning_chair_final.png",
        chairName: "Dinning Chair",
        chairPrice: "199",
    },
    {
        chairImg: "../public/low_chair.jpg",
        chairName: "Low Chair",
        chairPrice: "$179",
    },
    {
        chairImg: "../public/grey_chair_final.png",
        chairName: "Grey Chair",
        chairPrice: "$149",
    },
    {
        chairImg: "../public/brown_chair_final.png",
        chairName: "Brown Chair",
        chairPrice: "$199",
    },
    {
        chairImg: "../public/cream_chair.jpeg",
        chairName: "Cream Chair",
        chairPrice: "$179",
    },
    {
        chairImg: "../public/grey_chair2.jpg",
        chairName: "Grey Chair",
        chairPrice: "$149",
    },
    {
        chairImg: "../public/small_chair.jpg",
        chairName: "Small Chair",
        chairPrice: "$199",
    },
    {
        chairImg: "../public/low_chair2.jpg",
        chairName: "Low Chair",
        chairPrice: "$179",
    },
    {
        chairImg: "../public/ahh_chair.jpg",
        chairName: "Ahh Chair",
        chairPrice: "$149",
    }
]

var chairItem = document.getElementById("chairItems")
var chairImg = document.querySelectorAll(".chairImg")


for (let i = 0; i < chairItems.length; i++) {
    chairItem.innerHTML += `<div class="item">
    <a href="./lowChair.html">
        <img class="chairImg" src="${chairItems[i].chairImg}" alt="${chairItems[i].chairImg}">
    </a>
    <div class="info">
        <div class="itemInfo">
            <div class="details">
                <h2>${chairItems[i].chairName}</h2>
                <p>${chairItems[i].chairPrice}</p>
            </div>
            <div class="like">
                <i class="fa-regular fa-heart fa-lg"></i>
            </div>
        </div>
        <div class="btns">
            <button class="addBtn offerBtn">Add to cart</button>
            <button class="buy offerBtn">Buy now</button>
        </div>
    </div>`
}

