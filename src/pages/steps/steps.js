var Step = /** @class */ (function () {
    function Step(step_id, name, acceptance_criteria) {
        this.acceptance_criteria = acceptance_criteria;
        this.name = name;
        this.step_id - step_id;
    }
    return Step;
}());

function getSteps() {
    var steps = [
        new Step(1, "Set out all Seven dog bowls", "ac1"),
        new Step(2, "Distribute each bowl the appropriate portion of food for the corresponding dog", "ac2"),
        new Step(3, "Place each bowl down in the appropriate room along with the intended dog", "ac3"),
        new Step(4, "Wait while the dogs eat. Stay nearby.", "ac4"),
        new Step(5, "When dogs have finished eating, guide them each outside and pick up their bowls.", "ac5"),
        new Step(6, "Rinse out dog bowls and place in dishwasher while dogs are outside.", "ac6"),
        new Step(7, "Bring all dogs back inside and lock the sliding door.", "ac7"),
    ];
    return steps;
}

function displaySteps() {
    var steplist = document.getElementById('stepList')
    getSteps().forEach(step => {
       var li = document.createElement("Li");
        var hr = document.createElement('hr');
        var steps = document.createTextNode(step.name)
        li.appendChild(steps);
        steplist.appendChild(li);
        steplist.appendChild(hr);

    })
}