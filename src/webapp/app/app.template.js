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

    <section id="rooster-container" class="content">
    Jan 2016 ,32 - A B C
    </section>

    <section class="section participants">
        <h2 class="text-primary"> Generate roster </h2>
        <small> Add the names of the participants below to get started.</small> 
        <form class="my-4">
        <div class="form-field-wrapper">
            <input class="form-field" placeholder="Name of participant 1" id="name-1"/>
            <span class="shadow-form-field"></span>
        </div>

        <div class="form-field-wrapper">
            <input class="form-field" placeholder="Name of participant 1" id="name-1"/>
            <span class="shadow-form-field"></span>
        </div>

        <div class="form-field-wrapper">
            <input class="form-field" placeholder="Name of participant 2"  id="name-2"/><i id="add-more-btn" class="fas fa-user-plus ml-1"></i>
            <span class="shadow-form-field"></span>
        </div>
        </form>
        <button id="generate-roster-btn">Generate roster<i class="fas fa-step-forward ml-1"></i></button>
    </section>
    `
}