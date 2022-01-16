

import "./styles/global.css";
import "./styles/app.css";

import { AppTemplate } from "./app.template";

import {
  RosterController,
  SimpleLoaderComponent,
  CreateRosterComponent,
  getFormValue
} from "./components/index";

import {
  MakeAsyncGetRequest,
  isNullOrEmpty,
  generateDictFromArr
} from "./shared/index";

import * as jsPDF from "jspdf";
import 'jspdf-autotable';


// Initialise app container
const createApp = () => {
  const appRoot = document.querySelector("#root");
  const state = {};
  try {
    localStorage.clear();  // Start with a clean session
    appRoot.innerHTML = AppTemplate(state);
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
  document.addEventListener("DOMContentLoaded", function () {
    addEventListeners();
  });
}

// Event hanlders
function addEventListeners() {
  const formContainer = document.getElementById("main-content");
  const rosterContainer = document.getElementById("roster-container");

  // Generate new roster
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
        "/api/RosterEngine",
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
    cell.addEventListener("click", function (event) {
      // Here, `this` refers to the element the event was hooked on
      alert(`Clicked: ${event.target.innerHTML}`);
    })
  );
}

// Internal helpers
function renderRoster(schedule, formValues) {
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

  initialiseRosterContainerBtns();
}

function initialiseRosterContainerBtns() {
  const formContainer = document.getElementById("main-content");
  const rosterContainer = document.getElementById("roster-container");

  //  // create another roster
  document.getElementById("create-another").addEventListener("click", () => {
    formContainer.style.display = "initial";
    rosterContainer.style.display = "none";
  });

  // Export pdf btn
  document.getElementById("export_to_pdf").addEventListener("click", () => {
    const doc = new jsPDF();
    doc.autoTable(
      {
        html: '#shedule-table',
        theme: 'striped',
        headStyles: {fillColor: [155, 89, 182]}
      });
      let finalY = doc.previousAutoTable.finalY;
      doc.text("Xxx - x Day Rooster", 15, finalY + 15);
    doc.save("roster.pdf");
  });
}

