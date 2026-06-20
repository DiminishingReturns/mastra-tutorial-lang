import { generatedBinomialCalibrationSet } from '../problem-bank/examples/binomialDistribution/generatedCalibrationSet';

// We will be using this file twice.  The first time is to print the entire generated binomial calibration set (to see if the structure and contents are correct), and the second time is to print a specific example from the set to plug into MASTRA for testing.

// FIRST CHECK: Uncomment the line below to print the entire generated binomial calibration set so that you can check the structure and contents.

console.log(JSON.stringify(generatedBinomialCalibrationSet, null, 2));

// Run this command in the terminal to see the output:  npx tsx src/scripts/runBinomialCalibrationSet.ts

// Inspect structure and content outputs in terminal.

// Once this is good; start work on the agents and workflow.  Do the second check below to print a specific example from the set to plug into MASTRA for testing.

// SECOND CHECK: Uncomment the lines below to print a specific example from the generated binomial calibration set. This will allow you to see the details of that example and use it for testing in MASTRA. You can change the index number (currently set to 11) to see different examples from the set.

// To see what MASTRA produces for the binomial calibration set, we can print a specific example. The examples are indexed starting from 0, so we can choose any index to see the corresponding example. Here, we will print the example at index 11, which is one of the examples in the generated binomial calibration set. Comment out the line above (console.log(JSON.stringify(generatedBinomialCalibrationSet, null, 2))).  Uncomment the line below two lines below and run the command npx tsx src/scripts/runBinomialCalibrationSet.ts in the terminal again to see the output for that specific example.
//

// Copy the output from the terminal.  Select the workflow that you want to test the design in (generateBinomialCalibrationSetWorkflow) and paste the output (select json option on the right panel) as the input for that workflow.  Scroll to the bottom of the right panel, run the workflow and observe the results (look at the output on the last step of your workflow). You can compare the results with your expectations based on the input data to see how well MASTRA processes the binomial calibration example. This will help you understand the behavior of MASTRA and allow you to test your agents and workflow effectively.

// Start-End of course contexts: [10- 86]

//const calibrationExamples = generatedBinomialCalibrationSet[11]; //all examples
//console.log(JSON.stringify(calibrationExamples, null, 2));
