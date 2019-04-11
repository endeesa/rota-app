import { AppTemplate } from "./app.template";
import { MakeAsyncGetRequest } from "./utils/aws_lambda.service";
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

  // Todo: Move to own container!
  MakeAsyncGetRequest(
    "https://3gthhjctm4.execute-api.us-west-2.amazonaws.com/default/rota_geb_roster_api",
    "T7Cti60Nhf8ZT6A9yJYbq2vtVTH5FRjM2uUexJMz",
    "rooster-container"
  );
};

/**********************Initialise application************************ */
createApp();
