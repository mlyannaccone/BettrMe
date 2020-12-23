

const start = 0;

const steps = ["Set out all Seven dog bowls",
               "Distribute each bowl the appropriate portion of food for the corresponding dog",
               "Place each bowl down in the appropriate room along with the intended dog",
               "Wait while the dogs eat. Stay nearby.",
               "When dogs have finished eating, guide them each outside and pick up their bowls.",
               "Rinse out dog bowls and place in dishwasher while dogs are outside.",
               "Bring all dogs back inside and lock the sliding door."
]

function displaySteps() {
    var stepList = document.getElementById('stepList');

    steps.forEach((value) => {
        var li = document.createElement("li");
        var hr = document.createElement("hr");
        var step = document.createTextNode(value);
        li.appendChild(step);
        stepList.appendChild(li);
        stepList.appendChild(hr);
    });

}