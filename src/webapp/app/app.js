import { AppTemplate } from "./app.template";
import "./app.css";

const createApp = () => {
  const appRoot = document.querySelector("#root");
  const initState = {
    appName: "Rota App"
  };

  try {
    appRoot.innerHTML = AppTemplate(initState);
  } catch (error) {
    console.error("Failed to initialise app: ", error);
  }

};


/**********************Initialise application************************ */
createApp();