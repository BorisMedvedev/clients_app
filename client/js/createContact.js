import { svgDeleteContact } from "./svg.js";

export const createContactItem = () => {
  const contact = document.createElement("div"),
    contactType = document.createElement("div"),
    contactNameBtn = document.createElement("button"),
    contactList = document.createElement("ul"),
    contactPhone = document.createElement("li"),
    contactVk = document.createElement("li"),
    contactFb = document.createElement("li"),
    contactEmail = document.createElement("li"),
    contactOther = document.createElement("li"),
    contactInput = document.createElement("input"),
    contactDeleteBtn = document.createElement("button"),
    contactDeleteTooltip = document.createElement("span");

  contact.classList.add("contact");
  contactDeleteTooltip.classList.add("contact__tooltip", "site-tooltip");
  contactType.classList.add("contact__type");
  contactNameBtn.classList.add("contact__name-btn");
  contactList.classList.add("contct__list", "listreset");
  contactInput.classList.add("contact__input");
  contactPhone.classList.add("contact__item");
  contactFb.classList.add("contact__item");
  contactEmail.classList.add("contact__item");
  contactOther.classList.add("contact__item");
  contactVk.classList.add("contact__item");
  contactDeleteBtn.classList.add("contact__del-btn", "btn-reset");

  contactNameBtn.textContent = "Телефон";
  contactDeleteTooltip.textContent = "Удалить контакт";
  contactPhone.textContent = "Телефон";
  contactEmail.textContent = "Email";
  contactFb.textContent = "Фейсбук";
  contactPhone.textContent = "Телефон";
  contactVk.textContent = "ВКонтакте";
  contactOther.textContent = "Другое";
  contactInput.placeholder = "Введите данные контакта";
  contactInput.type = "text";
  contactDeleteBtn.innerHTML = svgDeleteContact;
};
