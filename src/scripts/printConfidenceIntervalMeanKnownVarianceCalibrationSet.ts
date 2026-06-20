import { generatedConfidenceIntervalMeanKnownVarianceCalibrationSet } from '../problem-bank/examples/confidenceIntervalMeanKnownVariance/generatedCalibrationSet';

// console.log(
//   JSON.stringify(
//     generatedConfidenceIntervalMeanKnownVarianceCalibrationSet,
//     null,
//     2,
//   ),
// );

// Start - End of in class calibration set examples: [8]-[47]

const calibrationExamples =
  generatedConfidenceIntervalMeanKnownVarianceCalibrationSet[47]; //all examples

console.log(JSON.stringify(calibrationExamples, null, 2));
