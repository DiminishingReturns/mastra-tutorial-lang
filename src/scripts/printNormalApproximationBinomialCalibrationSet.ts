import { generatedNormalApproximationBinomialCalibrationSet } from '../problem-bank/examples/normalApproximationBinomial/generatedCaibrationSet';

const calibrationExamples =
  generatedNormalApproximationBinomialCalibrationSet[5]; //all examples

console.log(JSON.stringify(calibrationExamples, null, 2));
