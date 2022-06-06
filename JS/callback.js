function firstStep(secondStep) {
    console.log('Step 1 completed . Please call Step 2 !!');
    secondStep();
}

function secondStep() {
    console.log('Step 2 Proceeding. Please call Step !!');
}
firstStep(secondStep);