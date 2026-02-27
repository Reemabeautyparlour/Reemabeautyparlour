const gallery = document.getElementById("gallery");

const images = [
  "../../upload/photos/1.jpg",
  "../../upload/photos/2.jpg",
  "../../upload/photos/3.jpg"
];

images.forEach(img => {
  const image = document.createElement("img");
  image.src = img;
  gallery.appendChild(image);
});
