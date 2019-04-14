export const CreateRosterTemplate = (model) => {
    return`
    <main>
    <h1>Getting started</h1>
    <small>
        Simply fill in the required fields 
        below to generate your new roster.
    </small>
    <form class="centered-form" id="roster-form-container">
        <input class="section-input" type="text" placeholder="Rooste span in days" id="span"/>
        <hr>

        <input class="staff-input" placeholder="Name of staff memeber" id="staff1"/>
        <input class="staff-input" placeholder="Name of staff member" id="staff2"/>
        <input class="staff-input" placeholder="Name of staff member" id="staff3"/>
        <i id="staff-input-add" class="fas fa-plus-circle"></i>
        <hr>

        <input class="section-input" placeholder="Name of work section e.g. Packaging" id="section1"/>
        <input class="section-input" placeholder="Name of work section e.g. Operations" id="section2"/>
        <i  id="section-input-add" class="fas fa-plus-circle"></i>
        <button type="button" id="generate-rooster">Generate roster</button>
    </form>
    </main>
        `
}