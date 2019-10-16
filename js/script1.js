      var Writelink = document.querySelector(".button-write-us");

      var popup = document.querySelector(".modal-write-us");

      var close = popup.querySelector(".modal-close");
      var form = popup.querySelector("form");
      var name = popup.querySelector("[name=name]");
      var mail = popup.querySelector("[name=mail]");

      var isStorageSupport = true;
      var storage = "";

      try {
        storage = localStorage.getItem("name");
      } catch (err) {
        isStorageSupport = false;
      }

      Writelink.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        if (storage) {
        name.value = storage;
        }
        name.focus();
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (!name.value || !mail.value) {
          evt.preventDefault();
          popup.classList.add("modal-error");
          console.log("Нужно ввести имя и адрес почты");
        } else {
          if (isStorageSupport) {
        localStorage.setItem("name", name.value);
          }
        }
      });
      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
          }
        }
      });

        var mapLink = document.querySelector(".contacts-button-map");

        var mapPopup = document.querySelector(".modal-map");
        var mapClose = mapPopup.querySelector(".modal-close");

        mapLink.addEventListener("click", function (evt) {
          evt.preventDefault();
          mapPopup.classList.add("modal-show");
        });

        mapClose.addEventListener("click", function (evt) {
          evt.preventDefault();
          mapPopup.classList.remove("modal-show");
        });

        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            if (mapPopup.classList.contains("modal-show")) {
              mapPopup.classList.remove("modal-show");
      }
    }
  });
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


