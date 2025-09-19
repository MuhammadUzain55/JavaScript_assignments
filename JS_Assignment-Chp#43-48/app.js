let allImages = document.querySelectorAll("img");

allImages.forEach((img) => {
    img.addEventListener("click", () => {
        alert("Thanks for purchasing a phone from us.");
    });
});