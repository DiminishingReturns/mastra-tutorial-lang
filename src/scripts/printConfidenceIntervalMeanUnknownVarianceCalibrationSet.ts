import { generatedConfidenceIntervalMeanUnknownVarianceCalibrationSet } from '../problem-bank/examples/confidenceIntervalMeanUnknownVariance/generatedCalibrationSet';

// console.log(
//   JSON.stringify(
//     generatedConfidenceIntervalMeanUnknownVarianceCalibrationSet,
//     null,
//     2,
//   ),
// );

// Start - end [8]-[]

const calibrationExamples =
  generatedConfidenceIntervalMeanUnknownVarianceCalibrationSet[37]; //all examples

console.log(JSON.stringify(calibrationExamples, null, 2));
