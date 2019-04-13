import { RoosterTemplate } from './rooster.template';
import './rooster.css';

export const RosterController = (props) => {

    // verify/process app data
    const data = props.data;
    //then render
    return render(JSON.parse(data));


}

function completeTable(data){
    const table = document.getElementById('more-rows');
    let rows = "";
    for( let key in data){
        let row = `
        <tr>
            <td>${key}</td>
        </tr>
        `
        rows += row;
        table.innerHTML += rows;
    }
    alert('done!');
}


function render(model) {
    return RoosterTemplate(model);
}

function hanldeExport(){
    alert('wont work');
}

if (document.readyState !== 'loading') {
    // alert('document is already ready, just execute code here');
    // addEventListeners();

} else {
    document.addEventListener('DOMContentLoaded', function () {
        alert('document was not ready, place code here');

        addEventListeners();

    });
}

// Event hanlders
function addEventListeners() {
    // Export pdf btn
    document.getElementById('export_to_pdf').addEventListener('click', () => {
        alert('Starting pdf export...');
    })
}

