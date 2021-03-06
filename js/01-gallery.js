import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1-Посилання на галерею
const imgColection = document.querySelector(".gallery");

// const newLink = document.querySelector(".gallery__item");

//
let imageInstance;

// 2-Створюю нову галерею
const newGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="Image ${description}"
            />
        </a>
</div>`
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
    //  8-створює змінну посилання зображення
    const url = event.target.dataset.source;
    //  створює змінну для відображення поточного зображення на модальному вікні
    const imageInstance = basicLightbox.create(
      `<img src="${url}" width="" height=""> `,

      //   Функція, яка виконується до того, як буде показано лайтбокс.
      //  Якщо повернути false, лайтбокс не відображатиметься.
      {
        onShow: (imageInstance) => {
          window.addEventListener("keydown", closeImg);
        },
        // Функція, яка виконується до закриття лайтбокса.
        // Повернення false запобіжить закриття лайтбоксу.
        onClose: (imageInstance) => {
          window.removeEventListener("keydown", closeImg);
        },
      }
    );

    // document.addEventListener("keypress", function (e) {
    //   if (e.keyCode === 27) document.getElementById("modal_id").hidden = 1;
    // });
    imageInstance.show();
    function closeImg(event) {
      if (event.keyCode === 27) {
        imageInstance.close();
        // console.log(imageInstance);
      }
    }
  }
  //   console.dir(event);
}

// ИНТЕРЕСНО
// Не так давно, вместо свойств key и code использовали свойство keyCode.Многие
//  посты на форумах и блогах по - прежнему могут использовать его, но будьте осторожны
//     - оно устарело, не используйте свойство keyCode.

// function closeImg(event) {
//   if (event.code === "Escape") {
//     imageInstance.close();
//     console.log(event.code);
//   }

// function closeImg(event) {
//   if (event.key === "Escape") {
//     imageInstance.close();
//     // console.log(imageInstance);
//   }
// }

// var elements = $(".modal-overlay, .modal");

// $(".cooperation__wrapper-link").click(function () {
//   elements.addClass("active");
// });

// $(".close-modal").click(function () {
//   elements.removeClass("active");
// });
