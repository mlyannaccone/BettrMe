var Step = /** @class */ (function () {
    function Step(step_id, name, acceptance_criteria) {
        this.step_id = step_id;
        this.name = name;
        this.acceptance_criteria = acceptance_criteria;
    }
    return Step;
}());
function getSteps() {
    var steps = [
        new Step(1, "step1", "ac1"),
        new Step(2, "step2", "ac2"),
        new Step(3, "step3", "ac3"),
        new Step(4, "step4", "ac4"),
        new Step(5, "step5", "ac5"),
        new Step(6, "step6", "ac6"),
        new Step(7, "step7", "ac7"),
    ];
    return steps;
}
