/*===SHOW MENU===*/
const showMenu = (toggleID, navID) =>{
    const toggle = document.getElementById(toggleID)
    const nav = document.getElementById(navID)

    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')


const serviceItems = document.querySelector(".service-items");
const popup = document.querySelector(".popup-box");
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click", function(event) {
  if(event.target.tagName.toLowerCase() == "button") {
    const item = event.target.parentElement;
    const h3 = item.querySelector("h3").innerHTML;
    const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
    popup.querySelector("h3").innerHTML = h3;
    popup.querySelector(".popup-body").innerHTML = readMoreCont;
    popupBox();
  }
});

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event) {
  if(event.target == popup) {
    popupBox();
  }
});

function popupBox() {
  popup.classList.toggle("open");

  if (popup.classList.contains("open")) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}