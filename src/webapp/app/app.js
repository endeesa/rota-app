import "./app.css";
import { AppTemplate } from "./app.template";

import "./shared/global.css";
import { MakeAsyncGetRequest } from "./utils/aws_lambda.service";
import { RosterController } from "./pages/rooster-container/rooster.controller";
import { CreateRosterComponent, getFormValue } from "./pages/components/create-roster-form/create-roster.component";

// Initialise app container
const createApp = () => {
  const appRoot = document.querySelector("#root");
  const state = {};
  try {
    appRoot.innerHTML = AppTemplate(state);
  } catch (error) {
    console.error("Failed to initialise app: ", error);
  }

  const form = new CreateRosterComponent();
  document.getElementById("main-content").innerHTML += form.render();
}

/**********************Initialise application************************ */
createApp();

/******Post render************** */ 

if (document.readyState !== "loading") {
  // alert('document is already ready, just execute code here');
  addEventListeners();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    // alert("document was not ready, place code here");

    addEventListeners();
  });
}

function generateDictFromArr(arr){
  const dict = {};
  for(let i in arr){
    dict[i] = arr[i];
  }
  console.warn('dict tranformed: ', dict);
  return dict;
}

function renderRoster(schedule, formValues){
    let apiData;
    const workforce = generateDictFromArr(formValues.staff);
    const departments = generateDictFromArr(formValues.sections);
    try {
      apiData = schedule;
    } catch (error) {
      console.log('Error parsing JSON: ', error);
      return null;
    }

    document.getElementById("roster-container").innerHTML += RosterController({
      data: schedule,
      rawInputs: {
        span: parseInt(formValues.spanIndays),
        staff: workforce,
        sections: departments
      }
    });


    const formContainer = document.getElementById("main-content");
    const rosterContainer = document.getElementById("roster-container");
    // Export pdf btn
    document.getElementById("export_to_pdf").addEventListener("click", () => {
      alert("Starting pdf export...");
    });
  
    // create another roster
    document.getElementById("create-another").addEventListener("click", () => {
      formContainer.style.display = "initial";
      rosterContainer.style.display = "none";
    });
  
}


// Event hanlders
function addEventListeners() {
  const formContainer = document.getElementById("main-content");
  const rosterContainer = document.getElementById("roster-container");

  // Generate new roster if DNE
  document.getElementById("generate-rooster").addEventListener("click", () => {
    const formVal = getFormValue();
    const schedule = MakeAsyncGetRequest(
      "https://3ttpf1otke.execute-api.us-west-2.amazonaws.com/qa/rota_geb_roster_api",
      {
        span: formVal.spanIndays,
        sections:formVal.sections.length,
        staff: formVal.staff.length
      },
      "T7Cti60Nhf8ZT6A9yJYbq2vtVTH5FRjM2uUexJMz"
    );

    renderRoster(schedule, formVal);

    formContainer.style.display = "none";
    rosterContainer.style.display = "initial";
  });

  // Listen to cell events
  document.querySelectorAll("#shedule-table td").forEach(e =>
    e.addEventListener("click", function(event) {
      // Here, `this` refers to the element the event was hooked on
      alert(`Clicked: ${event.target.innerHTML}`);
    })
  );
}
