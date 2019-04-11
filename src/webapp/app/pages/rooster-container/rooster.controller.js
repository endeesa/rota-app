import { RoosterTemplate } from './rooster.template';
import './rooster.css';

export const RosterController = (props)=>{

    // verify/process app data


    //then render
    return render(props);


}


function render(model){
    return RoosterTemplate(model);
}

// Event hanlders
document.addEventListener("DOMContentLoaded", function(event) {

    // Export pdf btn
    document.getElementById('export_to_pdf').addEventListener('click', ()=>{
        alert('Starting pdf export...');
    })
});