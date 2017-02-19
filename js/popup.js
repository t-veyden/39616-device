
var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector(".write-us");
var user = popup.querySelector("[name=user]");
var address = popup.querySelector("[name=address]");
var storage = localStorage.getItem("user");
var field = popup.querySelector(".red");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
    user.value = storage;
    address.focus();
  } else {
    user.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
  if (!user.value || !address.value) {
      event.preventDefault();
      field.classList.add("invalid");
  } else {
    localStorage.setItem("user", user.value);
  }
  });
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
      }
    }
  });





/MAP/
var mapOpen = document.querySelector(".js-open-map");

 var mapPopup = document.querySelector(".modal-content-map");
 var mapClose = mapPopup.querySelector(".modal-content-close");

 mapOpen.addEventListener("click", function(event) {
   event.preventDefault();
   mapPopup.classList.add("modal-content-show");
 });

 mapClose.addEventListener("click", function(event) {
   event.preventDefault();
   mapPopup.classList.remove("modal-content-show");
 });

 window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
     if (mapPopup.classList.contains("modal-content-show")) {
       mapPopup.classList.remove("modal-content-show");
     }
   }
 });
