import { CreateRosterTemplate } from './create-roster.template';

export class CreateRosterComponent{
    
    constructor(model){
        this.state = model;
    }

    render(){
        return CreateRosterTemplate(this.state);
    }
}