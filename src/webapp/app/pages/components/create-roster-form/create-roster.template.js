export const CreateRosterTemplate = (model) => {
    return`
    <main>
    <h1>Getting started</h1>
    <small>
        Simply fill in the required fields 
        below to generate your new roster.
    </small>
        <form class="centered-form">
        <input type="number" placeholder="Rooste span in days" id="1"/>
        
        <hr>
        <input placeholder="Name of staff memeber" id="staff1"/>
        <input placeholder="Name of staff member" id="staff2"/>
        <input placeholder="Name of staff member" id="staff3"/>
        <i class="fas fa-plus-circle"></i>
        <hr>
        <input placeholder="Name of work section e.g. Packaging" id="section1"/>
        <input placeholder="Name of work section e.g. Operations" id="section2"/>
        <i class="fas fa-plus-circle"></i>
        <button type="button" id="generate-rooster">Generate roster</button>
    </form>
    </main>
        `
}