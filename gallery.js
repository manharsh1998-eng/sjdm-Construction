console.log("Gallery page loaded with images.");

const loadImages = () =>{
let imagesArray = [];
for(let i=1; i<=57
    ; i++){
imagesArray.push(`assets/gallery_images/${i}.jpg`);
}
return imagesArray;
}
const loadImagesOnPage = () =>{
    const gallery = document.querySelector(".grid");
    const images = loadImages();
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Gallery image";
        img.className = "gallery_image";
        const card = document.createElement("div");
        card.className = "card";
        card.appendChild(img);
        gallery.appendChild(card);
    });
}


loadImagesOnPage();
