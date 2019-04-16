import * as jsPDF from "jspdf";
import { MakeAsyncGetRequest } from "./../shared/index";

import { AppTemplate } from "./app.template";
import {
  RosterController,
  SimpleLoaderComponent,
  CreateRosterComponent,
  getFormValue
} from "./components/index";

import "./../shared/styles/global.css";
import "./app.css";

// Initialise app container
const createApp = () => {
  const appRoot = document.querySelector("#root");
  const state = {};
  try {
    appRoot.innerHTML = AppTemplate(state);
    // localStorage.clear()
  } catch (error) {
    console.error("Failed to initialise app: ", error);
  }

  const form = new CreateRosterComponent();
  document.getElementById("main-content").innerHTML += form.render();

  document.getElementById(
    "loader-placeholder"
  ).innerHTML = SimpleLoaderComponent();
};

/**********************Initialise application************************ */
createApp();

/******Post render************** */
if (document.readyState !== "loading") {
  addEventListeners();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    addEventListeners();
  });
}

function renderRoster(schedule, formValues) {
  console.log("render roster called with: ", schedule);
  const workforce = generateDictFromArr(formValues.staff);
  const departments = generateDictFromArr(formValues.sections);

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
    const doc = new jsPDF();
    doc.fromHTML(document.getElementById("shedule-table"));
    doc.save("roster.pdf");

    alert("Starting pdf export...");
  });

  // create another roster
  document.getElementById("create-another").addEventListener("click", () => {
    formContainer.style.display = "initial";
    rosterContainer.style.display = "none";
  });
}

function isNullOrEmpty(val) {
  return val == null || val == "" || Number(val) === 0 ? true : false;
}

// Event hanlders
function addEventListeners() {
  const formContainer = document.getElementById("main-content");
  const rosterContainer = document.getElementById("roster-container");

  // Generate new roster if DNE
  document
    .getElementById("generate-rooster")
    .addEventListener("click", async () => {
      document.getElementById("form-err-msg").innerText = null;
      const formVal = getFormValue();
      if (
        isNullOrEmpty(formVal.spanIndays) ||
        formVal.sections.length === 0 ||
        formVal.staff.length == 0
      ) {
        document.getElementById("form-err-msg").innerText =
          "You need to fill in all fields.";
        return null;
      }

      document.getElementById("loader-placeholder").style.display = "initial";
      const apiResponse = MakeAsyncGetRequest(
        "https://3ttpf1otke.execute-api.us-west-2.amazonaws.com/qa/rota_geb_roster_api",
        {
          span: formVal.spanIndays,
          sections: formVal.sections.length,
          staff: formVal.staff.length
        },
        "T7Cti60Nhf8ZT6A9yJYbq2vtVTH5FRjM2uUexJMz"
      );

      apiResponse
        .then(data => {
          renderRoster(data, formVal);
          formContainer.style.display = "none";
          document.getElementById("loader-placeholder").style.display = "none";
          rosterContainer.style.display = "initial";
        })
        .catch(error => {
          document.getElementById("loader-placeholder").style.display = "none";
          document.getElementById("form-err-msg").innerText = `${error}`;
        });
    });

  // Listen to cell events
  document.querySelectorAll("#shedule-table td").forEach(cell =>
    cell.addEventListener("click", function(event) {
      // Here, `this` refers to the element the event was hooked on
      alert(`Clicked: ${event.target.innerHTML}`);
    })
  );
}
