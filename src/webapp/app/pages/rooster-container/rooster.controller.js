import "./rooster.css";
import { RoosterTemplate } from "./rooster.template";

export const RosterController = props => {
  // Process inputs and events?
  console.log('Rost controller data', props)
  //then render
  return render(props);
};

function render(model) {
  try {
    console.log('Received from parent: ', model);
    const result = RoosterTemplate(model);
    return result;
  } catch (err) {
    alert(err);
    return null;
  }
}


if (document.readyState !== "loading") {
  // alert('document is already ready, just execute code here');
    // Listen to cell events
    document.querySelectorAll("#shedule-table td").forEach(cell =>
      cell.addEventListener("click", function(event) {
        // Here, `this` refers to the element the event was hooked on
        alert(`Clicked: ${event.target.innerHTML}`);
      })
    );
} else {
  document.addEventListener("DOMContentLoaded", function() {
    // alert("document was not ready, place code here");
      // Listen to cell events
  document.querySelectorAll("#shedule-table td").forEach(cell =>
    cell.addEventListener("click", function(event) {
      // Here, `this` refers to the element the event was hooked on
      alert(`Clicked: ${event.target.innerHTML}`);
    })
  );
  });
}

