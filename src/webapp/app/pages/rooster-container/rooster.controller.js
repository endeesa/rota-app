import { RoosterTemplate } from './rooster.template';
import './rooster.css';

export const RosterController = (props) => {

    // verify/process app data
    const data = props.data;
    //then render
    return render(JSON.parse(data));


}

function render(model) {
    return RoosterTemplate(model);
}

