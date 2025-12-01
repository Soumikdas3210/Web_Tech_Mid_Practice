let images = [
    "https://nintenduo.com/wp-content/uploads/2025/08/Elden-Ring-Cover.webp",
    "https://wallpapers.com/images/featured/red-dead-redemption-2-4k-h93m94yxqtqno6jx.jpg",
    "https://hwbusters.com/wp-content/uploads/2025/05/Clair-Obscur-1-e1746553033231.png",
    "https://image.api.playstation.com/vulcan/ap/rnd/202511/1117/83f610d161c4cbb33c707b63688ced14a1a7c2ef0dadfd9d.jpg"

];

let index = 0;

let sliderImage = document.getElementById("sliderImage");
sliderImage.src = images[index];

document.getElementById("nextBtn").addEventListener("click", function () {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    sliderImage.src = images[index];
});

document.getElementById("prevBtn").addEventListener("click", function () {
    index--;
    if (index < 0) {
        index = images.length - 1; // loop to last
    }
    sliderImage.src = images[index];
});

setInterval(function () {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    sliderImage.src = images[index];
}, 3000);