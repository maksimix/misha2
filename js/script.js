document.addEventListener("DOMContentLoaded", function() {
    // Выберите секцию
    const section = document.querySelector(".first__page__logo");
  const body = document.querySelector("body");
  const mainElem = document.querySelector("main");


 const showLinks = document.querySelectorAll('.showLink');


//  const innerBlock = document.querySelector('.inner-block');

//  innerBlock.addEventListener('click', () => {
//    innerBlock.style.transform = 'rotate(40deg) translateX(100px)';
//  });


 
function swipeBlock(){


  
  const swipeImages = document.querySelectorAll('.swipe-image');
let isDragging = false;
let initialX = 0;
let offsetX = 0;

swipeImages.forEach((image) => {
  image.addEventListener('touchstart', (e) => {
    isDragging = true;
    image.style.transition = 'none';
    initialX = e.touches[0].clientX - offsetX;
  });

  image.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    offsetX = e.touches[0].clientX - initialX;
    image.style.transform = `translateX(${offsetX}px) rotate(${offsetX * 0.1}deg)`;
  });

  image.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      image.style.transition = 'transform 0.3s ease';
      
      if (offsetX < -image.offsetWidth) {
        image.remove();
      } else {
        image.style.transform = 'translateX(0) rotate(0deg)';
      }
    }
  });
});
  
}



 showLinks.forEach(function (showLink) {
  showLink.addEventListener('click', function (event) {
      event.preventDefault();

      // Получаем идентификатор элемента, который нужно скрыть/показать
      const targetId = showLink.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          toggleElementVisibility(targetElement);
      }
  });





  
});

function toggleElementVisibility(element) {
  if (element.hidden) {
      element.removeAttribute('hidden');
  } else {
      element.setAttribute('hidden', 'true');
  }
}
    // Функция для скрытия секции с анимацией
    function hideSection() {
      section.classList.add("hidden");
     
    }
    function removeSection() {
        section.remove();
        body.style.backgroundColor = "#F3F5DB";
        unHiddenMain();
      }
    function unHiddenMain(){
        mainElem.classList.add("unhidden");
    }
      function unHiddenMain(){
        mainElem.classList.add("unhidden");
    }

swipeBlock();

    // Вызовите функцию после задержки в 2 секунды
    setTimeout(hideSection, 2000); // 2000 миллисекунд (2 секунды)
    setTimeout(removeSection, 3000); // 2000 миллисекунд (2 секунды)
  });


  


  