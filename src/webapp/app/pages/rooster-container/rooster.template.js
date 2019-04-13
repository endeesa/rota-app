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
        <button id="export_to_pdf">Export to pdf</button>
    </article>
    `
}

// Display/Presentation logic
const createScheduleRows = (data) => {
    let rows = "";
    for (let key in data) {
        let row = `
        <tr>
            <td>${key}</td>
            <td>${data[key][0]}</td>
            <td>${data[key][1]}</td>
            <td>${data[key][2]}</td>
        </tr>
        `
        rows += row;
    }
    return rows;
}