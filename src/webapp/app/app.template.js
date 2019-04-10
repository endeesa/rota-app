export const AppTemplate = (props) => {
    return `
    <section class="section header">
        <header>
            <h1>${props.appName}</h1>
        </header>
    </section>

    <section class="section intro mb-2">
        <h3>What is Rota?</h3>
        <p> Rota helps you to generate equitable
        work schedules quickly!</p>
    </section>

    <section class="section participants">
        <h2 class="text-primary"> Generate roster </h2>
        <small> Add the names of the participants below to get started.</small> 
        <div class="input-field">
            <input placeholder="Name of participant 1" id="name-1"/>
        </div>

        <div class="input-field">
            <input placeholder="Name of participant 2"  id="name-1"/><i id="add-more-btn" class="fas fa-user-plus ml-1"></i>
        </div>
        <button id="generate-roster-btn">Generate roster<i class="fas fa-step-forward ml-1"></i></button>
    </section>
    `
}