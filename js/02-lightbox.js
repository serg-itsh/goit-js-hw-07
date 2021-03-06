import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1-Посилання на галерею
const imgColection = document.querySelector(".gallery");

// const newLink = document.querySelector(".gallery__item");

//
let imageInstance;

// 2-Створюю нову галерею
const newGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="Image ${description}" />
        </a>`
  )
  .join("");

// 3-Додає галерею до розмітки
imgColection.insertAdjacentHTML("afterbegin", newGallery);

// imgColection.addEventListener("click", closeImg); ?????

// 4-Додає слухача на колекцію
imgColection.addEventListener("click", eventHandler);

// 5-функція відкриття модалки та вівід зображення
function eventHandler(event) {
  // 6-Робить відміну перенаправлення за посиланням
  event.preventDefault();

  // 7-робить перевірку
  if (event.target.nodeName === "IMG") {
    let lightbox = new SimpleLightbox(".gallery a", {
      //   overlayOpacity: 0.3,
      captionsData: "alt",
      captionDelay: 250,
    });
    // let gallery = new SimpleLightbox(".gallery a");
    // gallery.on("chang.simplelightbox", function () {});
    // close();
    // var gallery = $(".gallery a").simpleLightbox();

    // gallery.destroy(); // Next Image
  }

  //   console.dir(event);
}

//  let lightbox = new SimpleLightbox(".gallery a");

//  gallery.on("nextDone.simplelightbox", function () {
//    // do something…
//  });
