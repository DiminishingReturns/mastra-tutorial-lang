import {
  DiscreteRandomVariableContextSeed,
  discreteRandomVariableContextSeeds,
} from '../../contextSeeds/discreteRandomVariableContexts';
import { createDiscreteRandomVariableProblem } from '../../generators/createDiscreteRandomVariableProblems';

export const generatedDiscreteRandomVariableCalibrationSet = [
  createDiscreteRandomVariableProblem({
    contextId: 'coffee-orders',
    questionType: 'compute-expected-value',
  }),

  createDiscreteRandomVariableProblem({
    contextId: 'printer-errors',
    questionType: 'compute-variance',
  }),

  createDiscreteRandomVariableProblem({
    contextId: 'missed-buses',
    questionType: 'compute-standard-deviation',
  }),

  createDiscreteRandomVariableProblem({
    contextId: 'defective-items',
    questionType: 'interpret-expected-value',
  }),

  createDiscreteRandomVariableProblem({
    contextId: 'library-renewals',
    questionType: 'validate-pmf',
  }),

  createDiscreteRandomVariableProblem({
    contextId: 'app-notifications',
    questionType: 'find-missing-probability',
  }),
];
