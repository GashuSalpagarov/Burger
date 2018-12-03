let reviews = document.querySelector('.reviews'),
    popup = document.querySelector('.popup'),
    popupContent = document.querySelector('.popup__content'),
    popupName = document.querySelector('.popup__name'),
    popupText = document.querySelector('.popup__text'),
    popupClose = document.querySelector('.popup__close'),
    popupContentList = document.querySelector('.popup__content div');


popup.addEventListener('click', function (e) {
    if (e.target.className === 'popup__content') return;
    popup.style.opacity = "0";
    setTimeout(function () {
        popup.style.display = "none";
    }, 500)
});
popupClose.addEventListener('click', function () {
    popup.style.opacity = "0";
    setTimeout(function () {
        popup.style.display = "none";
    }, 500)
});

reviews.addEventListener('click',  (e) => {
    let clickedBtn = e.target;
   if (clickedBtn.className === 'reviews__btn btn'){
       let textP =  clickedBtn.previousElementSibling.textContent,
           nameP = clickedBtn.previousElementSibling.previousElementSibling.textContent;
       popupName.innerText = nameP;
       popupText.innerText = textP;
       popup.style.display = "flex";
       setTimeout(function () {
           popup.style.opacity = "1";
       }, 1)
   }
});
