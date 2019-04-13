import "./app.css";
import { AppTemplate } from "./app.template";

import "./shared/global.css";
import { MakeAsyncGetRequest } from "./utils/aws_lambda.service";
import { RosterController } from "./pages/rooster-container/rooster.controller";




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

  // Inject other page components
  

  // Todo: Move to own container!
  const schedule = MakeAsyncGetRequest(
    "https://3ttpf1otke.execute-api.us-west-2.amazonaws.com/qa/rota_geb_roster_api",
    "T7Cti60Nhf8ZT6A9yJYbq2vtVTH5FRjM2uUexJMz",
    "dash"
  );

  document.getElementById("test").innerHTML += RosterController({section: 'roster', data: schedule});
};

/**********************Initialise application************************ */
createApp();

function generateRoster(e){
  alert('Start generating', e);
}