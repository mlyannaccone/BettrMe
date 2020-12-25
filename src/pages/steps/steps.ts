// class Step{
//     step_id: number;
//     name: string;
//     acceptance_criteria: string;

//     constructor(step_id: number, name: string, acceptance_criteria: string){
//         this.acceptance_criteria = acceptance_criteria;
//         this.name = name;
//         this.step_id - step_id;
//     }
// }

// function getSteps() :Step[] {
//     var steps = [
//         new Step(1, "step1", "ac1"),
//         new Step(2, "step2", "ac2"),
//         new Step(3, "step3", "ac3"),
//         new Step(4, "step4", "ac4"),
//         new Step(5, "step5", "ac5"),
//         new Step(6, "step6", "ac6"),
//         new Step(7, "step7", "ac7"),
//     ];
//     return steps;
// }

// function displaySteps() {
//     var stepList = document.getElementById('stepList');

//     getSteps().forEach((value) => {
//         var li = document.createElement("li");
//         var hr = document.createElement("hr");
//         var step = document.createTextNode(value.name);
//         li.appendChild(step);
//         stepList.appendChild(li);
//         stepList.appendChild(hr);
//     });

// }