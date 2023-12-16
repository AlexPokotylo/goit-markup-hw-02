(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", () => {
    refs.modal.classList.toggle("is-hidden");
    document.body.style.overflow = "hidden";
  });
  refs.closeModalBtn.addEventListener("click", () => {
    refs.modal.classList.toggle("is-hidden");
    document.body.style.overflow = null;
  });
})();
