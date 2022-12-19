import { svgContactDefault, svgContactHover } from "./svg.js";
import { createContactItem } from "./createContact.js";

export const createModalForm = () => {
  const modalTitle = document.createElement("h2"),
    modalCloseBtn = document.createElement("button"),
    modalForm = document.createElement("form"),
    labelLastName = document.createElement("label"),
    inputLastName = document.createElement("input"),
    labelName = document.createElement("label"),
    inputName = document.createElement("input"),
    labelSurName = document.createElement("label"),
    inputSurName = document.createElement("input"),
    requiredName = document.createElement("span"),
    requiredSurName = document.createElement("span"),
    addContactBtn = document.createElement("button"),
    addContactBtnSvgDefault = document.createElement("span"),
    addContactBtnSvgHover = document.createElement("span"),
    saveContactBtn = document.createElement("button"),
    cancelBtn = document.createElement("button"),
    formFloatingName = document.createElement("div"),
    formFloatingSurName = document.createElement("div"),
    formFloatingLastName = document.createElement("div"),
    contactsBlock = document.createElement("div");

  modalTitle.classList.add("modal__title");
  modalCloseBtn.classList.add("modal__close-btn", "btn-reset");
  modalForm.classList.add("modal__form");
  formFloatingName.classList.add("form__floating");
  formFloatingSurName.classList.add("form__floating");
  formFloatingLastName.classList.add("form__floating");
  cancelBtn.classList.add("modal__cancel-btn", "btn-reset");
  inputName.classList.add("modal__input");
  inputSurName.classList.add("modal__input");
  inputLastName.classList.add("modal__input");
  labelName.classList.add("modal__label");
  labelSurName.classList.add("modal__label");
  labelLastName.classList.add("modal__label");
  requiredName.classList.add("modal__label");
  requiredSurName.classList.add("modal__label");
  addContactBtn.classList.add(
    "modal__add-contact-btn",
    "modal__add-contact-btn--active",
    "btn-reset",
    "site-btn"
  );
  saveContactBtn.classList.add("modal__save-contact-btn", "btn-reset");
  contactsBlock.classList.add("modal__contacts-block");
  addContactBtnSvgDefault.classList.add(
    "add-btn-svg",
    "add-btn-svg--default",
    "add-btn-svg--active"
  );
  addContactBtnSvgHover.classList.add("add-btn-svg", "add-btn-svg--hover");
  labelName.for = "floatingName";
  labelSurName.for = "floatingSurName";
  labelLastName.for = "floatingLasName";
  inputName.id = "floatingName";
  inputSurName.id = "floatingSurName";
  inputLastName.id = "floatingLasName";
  inputName.type = "text";
  inputSurName.type = "text";
  inputLastName.type = "text";

  labelName.placeholder = "Имя";
  labelSurName.placeholder = "Фамилия";
  labelLastName.placeholder = "Отчество";

  labelName.textContent = "Имя";
  labelSurName.textContent = "Фамилия";
  labelLastName.textContent = "Отчество";
  modalTitle.textContent = "Новый клиент";
  addContactBtn.textContent = "Добавить контакт";
  saveContactBtn.textContent = "Сохранить";
  cancelBtn.textContent = "Отмена";
  requiredName.textContent = "*";
  requiredSurName.textContent = "*";
  addContactBtnSvgDefault.innerHTML = svgContactDefault;
  addContactBtnSvgHover.innerHTML = svgContactHover;

  labelName.append(requiredName);
  labelSurName.append(requiredSurName);
  formFloatingName.append(inputName, labelName);
  formFloatingSurName.append(inputSurName, labelSurName);
  formFloatingLastName.append(inputLastName, labelLastName);
  contactsBlock.append(addContactBtn);
  modalForm.append(
    formFloatingName,
    formFloatingSurName,
    formFloatingLastName,
    contactsBlock,
    saveContactBtn,
    cancelBtn
  );
  addContactBtn.append(addContactBtnSvgDefault, addContactBtnSvgHover);

  addContactBtn.addEventListener("mousemove", () => {
    addContactBtnSvgDefault.classList.remove("add-btn-svg--active");
    addContactBtnSvgHover.classList.add("add-btn-svg--active");
  });
  addContactBtn.addEventListener("mouseleave", () => {
    addContactBtnSvgDefault.classList.add("add-btn-svg--active");
    addContactBtnSvgHover.classList.remove("add-btn-svg--active");
  });

  addContactBtn.addEventListener("click", (el) => {
    el.preventDefault();
    const contactsItems = document.getElementsByClassName("contact");
    if (contactsItems.length < 9) {
      const contactsItem = createContactItem();
      contactsBlock.prepend(contactsItem.contact);
    } else {
      const contactsItem = createContactItem();
      contactsBlock.prepend(contactsItem.contact);
      addContactBtn.classList.remove("modal__add-contact-btn--active");
    }
  });

  return {
    modalForm,
    modalCloseBtn,
    modalTitle,
    addContactBtn,
    contactsBlock,
    inputName,
    inputSurName,
    inputLastName,
    labelName,
    labelSurName,
    labelLastName,
    cancelBtn,
  };
};
