export const RoosterTemplate = (model) => {
    // Receives full schedule from parent container
    const today = new Date();

    return `
    <article class="content-wrapper">
        <h1>${model.section}</h1>
        <section id="daily-view">
            Today : ${today}
        </section>

        <section id="calender-view">
            <h2>Click any cell to view upcoming shifts</h2>

            <p>${model.data}</p>

            <button id="export_to_pdf">Export to pdf</button>
        </section>
    </article>
    `
}