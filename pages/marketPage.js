function dropDown(event) {
  let target = event.target.parentElement;
  if (event.target.tagName != "BUTTON") {
    if (event.target.tagName == "SPAN" || event.target.tagName == "svg") {
      target = event.target.parentElement.parentElement;
    } else if (event.target.tagName == "path") {
      target = event.target.parentElement.parentElement.parentElement;
    }
  }

  const dropdownMenu = target.querySelector(".dropdown-child");
  dropdownMenu.style.display =
    dropdownMenu.style.display == "block" ? "none" : "block";
  target.querySelector(".dropdown-button>svg").style.transform =
    dropdownMenu.style.display == "block" ? "rotate(180deg)" : "";
}
function confirmPurchase(e) {
  let target = e.target.parentElement.parentElement.parentElement;
  if (e.target.tagName != "BUTTON") {
    if (e.target.tagName == "svg") {
      target = e.target.parentElement.parentElement.parentElement.parentElement;
    } else if (e.target.tagName == "path") {
      target =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement;
    }
  }
  const confirmationPopup = target.querySelector(".confirmation-popup");
  confirmationPopup.style.display =
    confirmationPopup.style.display == "block" ? "none" : "block";
  if (confirmationPopup.getBoundingClientRect().right > window.innerWidth) {
    confirmationPopup.classList.toggle("active");
  }
}

function toggleHamburger() {
  const [main] = document.getElementsByTagName("MAIN");
  main.style.display = main.style.display == "none" ? "flex" : "none";
  const [aside] = document.getElementsByTagName("ASIDE");
  aside.style.display = aside.style.display == "flex" ? "none" : "flex";
}
