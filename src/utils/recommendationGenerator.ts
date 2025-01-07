import { CropRequirements } from '../models/CropModel';

type RequirementValue = {
  min: number;
  max: number;
  optimal: number;
};

export const generateRecommendations = (
  input: Record<string, number>,
  crop: CropRequirements
): string[] => {
  const recommendations: string[] = [];

  // Only process known environmental factors
  const factors: (keyof Omit<CropRequirements, 'name'>)[] = [
    'temperature',
    'humidity',
    'rainfall',
    'pH',
    'nitrogen'
  ];

  factors.forEach(factor => {
    const value = input[factor];
    const requirement = crop[factor] as RequirementValue;

    const { min, max, optimal } = requirement;
    
    if (value < min) {
      recommendations.push(
        `Increase ${factor} levels (currently ${value}, minimum required is ${min})`
      );
    } else if (value > max) {
      recommendations.push(
        `Decrease ${factor} levels (currently ${value}, maximum allowed is ${max})`
      );
    } else if (Math.abs(value - optimal) > (max - min) * 0.2) {
      recommendations.push(
        `Adjust ${factor} closer to optimal level of ${optimal} for better results`
      );
    }
  });

  return recommendations;
};