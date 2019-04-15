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

