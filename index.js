const editButton = document.querySelector(".edit-btn");
const modal = document.querySelector("#accessibleModal");
const closeButton = document.querySelector("#closeModalBtn");

function trapFocus(event) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === "Tab") {
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }
}

editButton.addEventListener("click", function () {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  closeButton.focus();
  document.addEventListener("keydown", trapFocus);
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  editButton.focus();
  document.removeEventListener("keydown", trapFocus);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeButton.click();
  }
});

const dialog = document.querySelector("#accessibleDialog");
const openDialogBtn = document.querySelector("#openDialogBtn");
const closeDialogBtn = document.querySelector("#closeDialogBtn");

openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
  closeDialogBtn.focus();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  openDialogBtn.focus();
});

dialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    dialog.close();
    openDialogBtn.focus();
  }
});

const menuButton = document.querySelector("#menuButton");
const menuContent = document.querySelector("#menuContent");

menuButton.addEventListener("click", function () {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !isExpanded);
  menuContent.hidden = isExpanded;
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !menuContent.hidden) {
    menuContent.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
  }
});
