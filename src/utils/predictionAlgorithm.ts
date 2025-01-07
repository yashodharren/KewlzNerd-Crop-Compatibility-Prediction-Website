import { CropRequirements } from '../models/CropModel';

interface RequirementValue {
  min: number;
  max: number;
  optimal: number;
}

interface FeatureWeight {
  temperature: number;
  humidity: number;
  rainfall: number;
  pH: number;
  nitrogen: number;
}

const featureWeights: FeatureWeight = {
  temperature: 0.25,
  humidity: 0.2,
  rainfall: 0.2,
  pH: 0.15,
  nitrogen: 0.2,
};

export const calculateSuitabilityScore = (
  input: Record<string, number>,
  requirements: CropRequirements
): number => {
  let totalScore = 0;
  let totalWeight = 0;

  for (const [feature, weight] of Object.entries(featureWeights)) {
    const req = requirements[feature as keyof CropRequirements] as RequirementValue | undefined;

    // Skip if the requirement or input is missing
    if (!req || typeof input[feature] !== 'number') continue;

    const { min, max, optimal } = req;
    const value = input[feature];

    let score = 0;

    if (value >= min && value <= max) {
      // Calculate normalized distance from the optimal value
      const range = max - min;
      const distanceFromOptimal = Math.abs(value - optimal) / range;
      score = 1 - distanceFromOptimal; // Higher score for closer values
    }

    totalScore += score * weight;
    totalWeight += weight;
  }

  // Return the weighted average score as a percentage
  return totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0;
};