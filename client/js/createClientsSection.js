import { svgAddUser } from "./svg.js";
import { addClientModal } from "./addClient.js";
export const createClientsSection = () => {
  const section = document.createElement("section"),
    h1 = document.createElement("h1"),
    container = document.createElement("div"),
    main = document.createElement("main"),
    sortingDisplay = document.createElement("thead"),
    theadTr = document.createElement("tr"),
    sortingDisplayId = document.createElement("td"),
    sortingDisplayName = document.createElement("td"),
    sortingDisplayCreate = document.createElement("td"),
    sortingDisplayEdit = document.createElement("td"),
    sortingDisplayContacts = document.createElement("td"),
    sortingDisplayActions = document.createElement("td"),
    sortingDisplaySpan = document.createElement("span"),
    addUserBtn = document.createElement("button"),
    addUserBtnSvg = document.createElement("span"),
    tableWrapper = document.createElement("div"),
    clientsTable = document.createElement("table"),
    createSpan = document.createElement("span"),
    editSpan = document.createElement("span"),
    tableBody = document.createElement("tbody");

  addUserBtn.addEventListener("click", () => {
    document.body.append(addClientModal());
  });

  main.classList.add("main");
  section.classList.add("clients");
  container.classList.add("container");
  tableWrapper.classList.add("clients__wrapper");
  h1.classList.add("clients__title");
  clientsTable.classList.add("clients__table");
  tableBody.classList.add("clients__tbody");
  sortingDisplay.classList.add("clients__display", "display-info");
  sortingDisplayId.classList.add(
    "display-info__item",
    "display-info__item--id",
    "sort-up"
  );
  sortingDisplayName.classList.add(
    "display-info__item",
    "display-info__item--name",
    "sort-down"
  );
  sortingDisplayCreate.classList.add(
    "display-info__item",
    "display-info__item--create",
    "sort-down"
  );
  sortingDisplayEdit.classList.add(
    "display-info__item",
    "display-info__item--edit",
    "sort-down"
  );
  sortingDisplayContacts.classList.add(
    "display-info__item",
    "display-info__item--contacts"
  );
  sortingDisplayActions.classList.add(
    "display-info__item",
    "display-info__item--actions"
  );
  addUserBtn.classList.add("clients__btn", "btn-reset");
  addUserBtnSvg.classList.add("clients__btn-svg");
  sortingDisplaySpan.classList.add("display-info__sorting");
  createSpan.classList.add("create-span");
  editSpan.classList.add("edit-span");

  h1.textContent = "Клиенты";
  sortingDisplayId.textContent = "id";
  sortingDisplayName.textContent = "Фамилия Имя Отчество";
  sortingDisplayCreate.textContent = "Дата и время создания";
  sortingDisplayEdit.textContent = "Последние изменения";
  sortingDisplayContacts.textContent = "Контакты";
  sortingDisplayActions.textContent = "Действия";
  addUserBtn.textContent = "Добавить клиента";
  sortingDisplaySpan.textContent = "а-я";
  addUserBtnSvg.innerHTML = svgAddUser;

  main.append(section);
  section.append(container);
  sortingDisplayName.append(sortingDisplaySpan);
  sortingDisplayCreate.append(createSpan);
  sortingDisplayEdit.append(editSpan);
  theadTr.append(
    sortingDisplayId,
    sortingDisplayName,
    sortingDisplayCreate,
    sortingDisplayEdit,
    sortingDisplayContacts,
    sortingDisplayActions
  );
  sortingDisplay.append(theadTr);
  tableWrapper.append(clientsTable);
  clientsTable.append(sortingDisplay, tableBody);
  addUserBtn.appendChild(addUserBtnSvg);
  container.append(h1, tableWrapper, addUserBtn);

  return {
    main,
    clientsTable,
    tableBody,
  };
};
