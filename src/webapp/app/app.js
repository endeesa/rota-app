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

  document.getElementById("roster-container").innerHTML += RosterController({section: 'roster', data: schedule});
};

/**********************Initialise application************************ */
createApp();


if (document.readyState !== 'loading') {
  // alert('document is already ready, just execute code here');
  addEventListeners();

} else {
  document.addEventListener('DOMContentLoaded', function () {
      alert('document was not ready, place code here');

      addEventListeners();

  });
}

// Event hanlders
function addEventListeners() {
  const formContainer = document.getElementById('main-content');
  const rosterContainer = document.getElementById('roster-container');
  // Export pdf btn
  document.getElementById('export_to_pdf').addEventListener('click', () => {
      alert('Starting pdf export...');
  });

  // create another roster
  document.getElementById('create-another').addEventListener('click', ()=>{
    formContainer.style.display = 'initial';
    rosterContainer.style.display = 'none';
  });

  //Show full schedule
  document.getElementById('generate-rooster').addEventListener('click', ()=>{
    formContainer.style.display = 'none';
    rosterContainer.style.display = 'initial';
  });


}
