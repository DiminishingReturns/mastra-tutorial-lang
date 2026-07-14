import { generatedNormalApproximationBinomialCalibrationSet } from '../problem-bank/examples/normalApproximationBinomial/generatedCaibrationSet';

// console.log(
//   JSON.stringify(generatedNormalApproximationBinomialCalibrationSet, null, 2),
// );

// start - end [8]

const calibrationExamples =
  generatedNormalApproximationBinomialCalibrationSet[87]; //all examples

console.log(JSON.stringify(calibrationExamples, null, 2));
