const openModalBtns = document.querySelectorAll(".open-modal-btn");
const modals = document.querySelectorAll(".modal");

openModalBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-modal");
    document.getElementById(target).style.display = "block";
  });
});

modals.forEach(modal => {
  const closeBtn = modal.querySelector(".close-btn");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
