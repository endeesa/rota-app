export const RoosterTemplate = (model) => {
    // Receives full schedule from parent container
    const today = new Date();
    const scheduleRows = createScheduleRows(model);

    return `
    <article class="content-wrapper">
        <h1></h1>
        <section id="daily-view">
            Today : ${today}
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
            <button id="export_to_pdf">Export to pdf</button>
        </section>
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
        </tr>
        `
        rows += row;
    }
    return rows;
}