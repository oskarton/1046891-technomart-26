        var cartLink = document.querySelectorAll(".button-buy");
        var bookLink = document.querySelectorAll(".button-to-bookmark");

        var cart = document.querySelector('.button-cart')

        var buttonCartLink = document.querySelector(".button-cart-red")
        var buttonBookCart = document.querySelector(".button-bookmark-red")

        var cartPopup = document.querySelector(".popup-in-cart");

        var cartClose = cartPopup.querySelector(".modal-close");

        for (var i = 0; i<=cartLink.length; i++) {
          cartLink[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            cartPopup.classList.add("modal-show");
          });
        };

        cartClose.addEventListener("click", function (evt) {
          evt.preventDefault();
          cartPopup.classList.remove("modal-show");
        });
        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            if (cartPopup.classList.remove("modal-show")) {
              cartPopup.classList.remove("modal-show");
            }
          }
        });
