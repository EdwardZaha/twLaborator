"use strict";
// Array cu imaginile din folderul ../MEDIA
const images = [
    "../MEDIA/images0.jpg", // Exemplu de imagine
    "../MEDIA/images1.jpg", // Exemplu de imagine
    "../MEDIA/images2.jpg", // Exemplu de imagine
];
// Obtinem elementul principal din DOM
const mainImage = document.getElementById("carousel-image");
// Verificam daca elementul exista
if (!mainImage)
    throw new Error("Elementul imagine nu a fost găsit în DOM!");
let currentIndex = 0;
// Functie care schimba imaginea mare
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
}
// Slider automat la 3 secunde
setInterval(showNextImage, 3000);
