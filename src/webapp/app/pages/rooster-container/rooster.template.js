export const RoosterTemplate = (model) => {
    // Receives full schedule from parent container
    const today = new Date();
    const scheduleRows = createScheduleRows(model);

    return `
    <article class="content-wrapper">
        <h1 class="heading mb-1">Your ${Object.keys(model).length} day roster</h1>
        <section id="daily-view">
            Starting from today : ${today}
        </section>

        <section id="calender-view">
            <table id="shedule-table">
                <tr>
                <th>Day</th>
                <th>CASUALTY</th>
                <th>MATERNITY</th>
                <th>WARDS</th></tr>
                ${scheduleRows}
            </table>
            
        </section>
        <button class="btn-primary" id="export_to_pdf">Export to pdf</button>
        <button class="btn-outline-primary" id="create-another">Create new roster</button>
    </article>

    <div class="stepper shadow-md">
    <setion>
        <h4 class="heading">Individual view View</h4>
    </section>

    <!--Begin stepper-->
    <div class="md-stepper-horizontal orange">
      <div class="md-step active done">
        <div class="md-step-circle"><span>1</span></div>
        <div class="md-step-title">Day ..</div>
        <div class="md-step-bar-left"></div>
        <div class="md-step-bar-right"></div>
      </div>
      <div class="md-step active editable">
        <div class="md-step-circle"><span>2</span></div>
        <div class="md-step-title">Day ..</div>
        <div class="md-step-optional">Optional</div>
        <div class="md-step-bar-left"></div>
        <div class="md-step-bar-right"></div>
      </div>
      <div class="md-step active">
        <div class="md-step-circle"><span>3</span></div>
        <div class="md-step-title">Day ..</div>
        <div class="md-step-bar-left"></div>
        <div class="md-step-bar-right"></div>
      </div>
      <div class="md-step">
        <div class="md-step-circle"><span>4</span></div>
        <div class="md-step-title">Day ..</div>
        <div class="md-step-bar-left"></div>
        <div class="md-step-bar-right"></div>
      </div>
    </div>
    <!--End stepper-->
    </div>
    `
}

// Display/Presentation logic
const createStepper = (data) =>{
    // TODO
}


const createScheduleRows = (data) => {
    
    let rows = "";
    for (let key in data) {
       let currDate = incrementDate( parseInt(key) );
        let row = `
        <tr>
            <td>${ currDate }</td>
            <td>${data[key][0]}</td>
            <td>${data[key][1]}</td>
            <td>${data[key][2]}</td>
        </tr>
        `;
        rows += row;
    }
    return rows;
}

function incrementDate(incrementBy){
  const today = new Date();
  today.setDate(today.getDate() + incrementBy);
  return today.toDateString();
}