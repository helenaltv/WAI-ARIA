const editButton = document.querySelector(".edit-btn");
const modal = document.querySelector(".modal-container ");
const closeButton = document.querySelector("#closeModalBtn");

editButton.addEventListener("click", function () {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  modal.focus();
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  editButton.focus();
});
