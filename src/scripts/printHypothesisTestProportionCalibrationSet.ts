import { generatedHypothesisTestProportionCalibrationSet } from '../problem-bank/examples/hypothesisTestProportion/generatedCalibrationSet';

// console.log(
//   JSON.stringify(generatedHypothesisTestProportionCalibrationSet, null, 2),
// );

const calibrationExamples = generatedHypothesisTestProportionCalibrationSet[2]; //all examples

console.log(JSON.stringify(calibrationExamples, null, 2));
