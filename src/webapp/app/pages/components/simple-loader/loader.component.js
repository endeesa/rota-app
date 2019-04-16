import loader from './loader.gif';

export const SimpleLoaderComponent = ()=>{
    return`
    <article class="content-wrapper">
        <img src="${loader}" alt="Loading..." width=200/>
    </article>
    `
}