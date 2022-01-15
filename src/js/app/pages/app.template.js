export const AppTemplate = (props) => {
    return `
    <div class="grid-container">
        <section class="top-nav">
            <h1>Rota App</h1>
        </section>

        <section class="header shadow-lg">
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


        <section id="main-content" class="main-content shadow-md">
        <div id="loader-placeholder">....</div>
        </section>

        <section id="roster-container" class="roster-container shadow-md">
        </section>

        <section class="footer" id="footer">
            &copy <a href="https:/twitter.com/Banzyme2">Peculia Group</a>
        </section>


    </div>
    `
}