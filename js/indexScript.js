const imageUrls =[
  "https://zenfolio.creatorcdn.com/6e812bdb-ce51-4e46-b8c4-b7502be79ab8/0/1/0/X2XL/0-0-0/8567c613-451e-454e-89b4-f5c5fa6df85d/1/1/1.jpg?fjkss=exp=1735459200~hmac=9eb2009b204d4917a35a351b1dc8e9ba93561bf1921240f131cbdb6d93bd3996",
  "https://zenfolio.creatorcdn.com/6e812bdb-ce51-4e46-b8c4-b7502be79ab8/0/1/0/X2XL/0-0-0/bb19c0e9-b5a4-49c0-8ed0-c8ba098bcdd8/1/1/2.jpg?fjkss=exp=1735459200~hmac=9eb2009b204d4917a35a351b1dc8e9ba93561bf1921240f131cbdb6d93bd3996",
  "https://zenfolio.creatorcdn.com/6e812bdb-ce51-4e46-b8c4-b7502be79ab8/0/1/0/X2XL/0-0-0/d751bb0d-c164-49c6-bd61-0131b0927273/1/1/3.jpg?fjkss=exp=1735459200~hmac=9eb2009b204d4917a35a351b1dc8e9ba93561bf1921240f131cbdb6d93bd3996",
  "https://zenfolio.creatorcdn.com/6e812bdb-ce51-4e46-b8c4-b7502be79ab8/0/1/0/X2XL/0-0-0/1c03c039-8491-4286-b22a-262ef9f98996/1/1/4.jpg?fjkss=exp=1735459200~hmac=9eb2009b204d4917a35a351b1dc8e9ba93561bf1921240f131cbdb6d93bd3996",
  "https://zenfolio.creatorcdn.com/6e812bdb-ce51-4e46-b8c4-b7502be79ab8/0/1/0/X2XL/0-0-0/5689cf85-bd20-465e-9f28-19162bb29c4f/1/1/5.jpg?fjkss=exp=1735459200~hmac=9eb2009b204d4917a35a351b1dc8e9ba93561bf1921240f131cbdb6d93bd3996",
  "https://zenfolio.creatorcdn.com/6e812bdb-ce51-4e46-b8c4-b7502be79ab8/0/1/0/X2XL/0-0-0/87b87d58-b3c9-419f-b6f7-584364d447af/1/1/6.jpg?fjkss=exp=1735459200~hmac=9eb2009b204d4917a35a351b1dc8e9ba93561bf1921240f131cbdb6d93bd3996",
  "https://zenfolio.creatorcdn.com/6e812bdb-ce51-4e46-b8c4-b7502be79ab8/0/1/0/X2XL/0-0-0/56571c6d-1478-4dc3-800b-c6c0b0d13ac7/1/1/7.jpg?fjkss=exp=1735459200~hmac=9eb2009b204d4917a35a351b1dc8e9ba93561bf1921240f131cbdb6d93bd3996",
  "https://zenfolio.creatorcdn.com/6e812bdb-ce51-4e46-b8c4-b7502be79ab8/0/1/0/X2XL/0-0-0/e1e86b18-f223-4fbe-b179-df55147a657e/1/1/8.jpg?fjkss=exp=1735459200~hmac=9eb2009b204d4917a35a351b1dc8e9ba93561bf1921240f131cbdb6d93bd3996",
  "https://zenfolio.creatorcdn.com/6e812bdb-ce51-4e46-b8c4-b7502be79ab8/0/1/0/X2XL/0-0-0/86012aeb-91af-40bd-8304-6bf8cf9bc929/1/1/9.jpg?fjkss=exp=1735459200~hmac=9eb2009b204d4917a35a351b1dc8e9ba93561bf1921240f131cbdb6d93bd3996"
]

const slideshow = document.getElementById("slideshow");

imageUrls.forEach((url, index) => {
  const img = document.createElement("img");
  img.src = url;
  img.classList.add(index === 0 ? "active" : "inactive");
  slideshow.appendChild(img);
});

let current = 0;

function changeImage() {
  const images = document.querySelectorAll(".slideshow img");
  images[current].classList.remove("active");
  images[current].classList.add("inactive");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
  images[current].classList.remove("inactive");
}

setInterval(changeImage, 3000);
