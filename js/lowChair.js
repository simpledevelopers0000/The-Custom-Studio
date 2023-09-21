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

var chairImg = document.querySelectorAll(".chairImg");
const previewImg = document.querySelector(".previewImg");
const otherChair = document.querySelector(".otherChair")

for (let i = 0; i < chairImg.length; i++) {
    chairImg[i].addEventListener("click", ()=>{
        previewImg.innerHTML = `<h2>${chairImg[i].innerHTML}</h2>`
    })
    
}

for (let i = 0; i < chairItems.length; i++) {

    otherChair.innerHTML += `<div class="chair">
        <div class="img">
            <img src="${chairItems[i].chairImg}" alt="${chairItems[i].chairName}"
        </div>
            <h3>${chairItems[i].chairName}</h3>
            <p>${chairItems[i].chairPrice}</p>
    </div>`

}