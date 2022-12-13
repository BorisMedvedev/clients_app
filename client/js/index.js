import { createClientsHeader } from "./createHeader.js";
import { createClientsSection } from "./createClientsSection.js";

const createApp = () => {
  const header = createClientsHeader(),
    clientSection = createClientsSection();

  document.body.append(header, clientSection.main);
};

createApp();
