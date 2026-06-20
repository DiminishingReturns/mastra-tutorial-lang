import { generatedConfidenceIntervalMeanUnknownVarianceCalibrationSet } from '../problem-bank/examples/confidenceIntervalMeanUnknownVariance/generatedCalibrationSet';

// console.log(
//   JSON.stringify(
//     generatedConfidenceIntervalMeanUnknownVarianceCalibrationSet,
//     null,
//     2,
//   ),
// );

const calibrationExamples =
  generatedConfidenceIntervalMeanUnknownVarianceCalibrationSet[1]; //all examples

console.log(JSON.stringify(calibrationExamples, null, 2));
