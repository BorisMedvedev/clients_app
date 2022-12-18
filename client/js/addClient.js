import { createModalForm } from "./createModalForm.js";

export const addClientModal = () => {
  const createForm = createModalForm(),
    modalOverlay = document.createElement("div"),
    modalContent = document.createElement("div");

  modalOverlay.classList.add("modal-overlay", "site-modal", "modal-active");
  modalContent.classList.add(
    "modal__content",
    "site-modal__content",
    "modal-active"
  );
  createForm.modalForm.classList.add("add-client");

  modalOverlay.append(modalContent);
  modalContent.append(
    createForm.modalCloseBtn,
    createForm.modalTitle,
    createForm.modalForm
  );

  createForm.modalForm.addEventListener("submit", (el) => {
    el.preventDefault();

    let contacts = [];
    let clientsObj = {};

    clientsObj.name = createForm.inputName.value;
    clientsObj.surname = createForm.inputSurName.value;
    clientsObj.lastname = createForm.inputLastName.value;
    clientsObj.contacts = contacts;
    console.log(clientsObj);
  });

  createForm.modalCloseBtn.addEventListener("click", () => {
    modalOverlay.remove();
  });

  document.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.remove();
    }
  });
  return modalOverlay;
};
