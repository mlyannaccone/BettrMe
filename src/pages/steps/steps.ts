class Step {
    step_id: number;
    name: string;
    acceptance_criteria: string;
    constructor(step_id: number, name: string, acceptance_criteria: string){
        this.step_id = step_id;
        this.name = name;
        this.acceptance_criteria = acceptance_criteria;
    }
}