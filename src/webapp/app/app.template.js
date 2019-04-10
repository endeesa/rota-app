export const AppTemplate = (props) => {
    return `
    <section class="section header">
        <header>
            <h1>${props.appName}</h1>
        </header>
    </section>

    <section class="section intro">
        <h3>What is Rota?</h3>
        <p> Rota helps you to generate equitable
        work schedules quickly!</p>
    </section>
    `
}