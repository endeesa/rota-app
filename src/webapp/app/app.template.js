export const AppTemplate = (props) => {
    return `
    <div class="grid-container">
        <section class="top-nav">
            <h1>Rota App</h1>
        </section>

        <section class="header">
            <p>
            <h2>What is rota?</h2>
            <span>
              Rota is a simple web app that 
              helps you create fair rosters
              within a few seconds.
            </p>
        </section>

        <section class="social">
            <small>Share</small>
            <br>
            <i class="fab fa-twitter social-icon mr-1"></i>
            <i class="fab fa-facebook social-icon mr-1"></i>
            <i class="fab fa-linkedin social-icon"></i>
        </section>


        <section class="main-content">
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
            <button type="submit">Generate roster</button>
        </form>
        </main>

        </section>

        <section class="dashboard">
            Unused
        </section>
    </div>
    `
}