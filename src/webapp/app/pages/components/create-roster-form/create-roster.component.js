import './create-roster.css';
import { CreateRosterTemplate } from './create-roster.template';

export class CreateRosterComponent{
    
    constructor(model){
        this.state = model;
    }

    render(){
        return CreateRosterTemplate(this.state);
    }
}


function getInputCollections(elementId){
    const sections =  document.getElementsByClassName(elementId);
    return Array.from(sections);
}

function getFormValue(){
    const span = document.getElementById('span').value;
    const sectionNames = getInputCollections('section-input');
    const staffNmes = getInputCollections('section-input');

    return {
        spanIndays: span,
        sections: sectionNames.map(item => item.value),
        staff: staffNmes.map(item => item.value),
    }
}


function addEventListener$(){
    document.getElementById('generate-rooster').addEventListener('click', ()=>{
        console.log(getFormValue());
    });
}

if (document.readyState !== "loading") {
 
    addEventListener$();
  
  } else {
    document.addEventListener("DOMContentLoaded", function() {
        addEventListener$();
    });
  }