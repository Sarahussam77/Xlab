document.addEventListener('DOMContentLoaded', function () {
    let menuState = 0;
    // Add a click event listener to btn-select
    document.querySelector(".container").addEventListener("click", function () {
      const miniMenuOptions = document.querySelector(".mini-menu-options");
      if (menuState === 0) {
        miniMenuOptions.style.display = "block";
        menuState = 1;
      } else {
        miniMenuOptions.style.display = "none";
        menuState = 0;
      }
    });
  
    // Add click event listeners to menu items in mini-menu-options
    const menuItems = document.querySelectorAll(".mini-menu-options li");
    menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const numHijos = item.children.length;
        if (numHijos < 2) {
          // esconde el menu
          document.querySelector(".mini-menu-options").style.display = "none";
          // obtiene el texto del elemento elegido
          const texto = item.textContent.trim();
          // y lo agrega a la barra del menu
          document.querySelector(".menu-select .menu-actual").textContent = texto;
        }
        menuState = 0; // reinicia la variable que controla el menu
      });
    });
  });

  function myFunction(x) {
    x.classList.toggle("change");
  }



//   slider

document.addEventListener('DOMContentLoaded', function () {
  
  
    let currentIndex = 0;
    let autoplayInterval;
    const imageElement = document.getElementById('myImage');
  const newImageUrl = ["assets/Image/4.webp","assets/Image/photo-1667266543254-505cf5b16ec4.webp","assets/Image/skin.jpg"]; // Replace this with the new image URL

  // Update the src attribute of the image element
  
  
    function showSlide() {
      imageElement.src = newImageUrl[currentIndex];
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % newImageUrl.length;
      showSlide();
    }
  
    function prevSlide() {
      currentIndex = currentIndex = (currentIndex - 1 + newImageUrl.length) % newImageUrl.length;
      showSlide();
    }
  
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 4000);
    }
  
   
  
    // Start autoplay initially
    startAutoplay();
  
   
  });



  document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const paragraph = document.getElementById('changingParagraph');
    const phrases = [
      "Your skincare routine is a bank account. Invest wisely.",
      "The best foundation you can wear is glowing healthy skin.",
      "Skincare must be good enough to eat.",
      "Beautiful skin requires commitment, not a miracle.",
      "Your makeup game will never be a 10 if your skincare game is only a two.",
      "Beauty is being comfortable in your own skin.",
      "Good things come to those who double cleanse.",
      "Stop wishing you had great skin and get it."
    ];
  
    let currentIndex = 0;
  
  
    function showSlide() {
      paragraph.textContent = phrases[currentIndex];
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % phrases.length;
      showSlide();
    }
  
    function prevSlide() {
      currentIndex = currentIndex = (currentIndex - 1 + phrases.length) % phrases.length;
      showSlide();
    }
  
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 4000);
    }
  
    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }
  
    // Start autoplay initially
    startAutoplay();
  
    // Button click events
    nextBtn.addEventListener('click', function () {
      stopAutoplay();
      nextSlide();
      startAutoplay();
    });
  
    prevBtn.addEventListener('click', function () {
      stopAutoplay();
      prevSlide();
      startAutoplay();
    });

    
  });