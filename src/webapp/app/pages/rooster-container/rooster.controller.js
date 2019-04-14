import { RoosterTemplate } from "./rooster.template";
import "./rooster.css";

export const RosterController = props => {
  // Process inputs and events?

  //then render
  return render(props);
};

function render(model) {
  try {
    const result = RoosterTemplate(model);

    return result;
  } catch (err) {
    alert(err);
    return null;
  }
}



if (document.readyState !== "loading") {
  alert(document.getElementById('export_to_pdf'));
  
  document.getElementById('export_to_pdf').addEventListener('click', ()=>{
    alert('I have been triggere');
  })

} else {
  document.addEventListener("DOMContentLoaded", function() {
    alert("document was not ready, place code here");

    // addEventListeners();
  });
}