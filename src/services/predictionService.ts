import { cropDatabase } from '../models/CropModel';
import { calculateSuitabilityScore } from '../utils/predictionAlgorithm';
import { generateRecommendations } from '../utils/recommendationGenerator';

export interface PredictionInput {
  temperature: number;
  humidity: number;
  rainfall: number;
  pH: number;
  nitrogen: number;
}

export interface PredictionResult {
  crop: string;
  confidence: number;
  recommendations: string[];
}

export const predictCrop = async (input: PredictionInput): Promise<PredictionResult> => {
  // Simulate API delay for realistic behavior
  await new Promise(resolve => setTimeout(resolve, 500));

  // Convert PredictionInput to a Record<string, number>
  const inputRecord: Record<string, number> = {
    temperature: input.temperature,
    humidity: input.humidity,
    rainfall: input.rainfall,
    pH: input.pH,
    nitrogen: input.nitrogen,
  };

  // Calculate suitability scores for each crop
  const cropScores = cropDatabase.map(crop => ({
    crop: crop.name,
    score: calculateSuitabilityScore(inputRecord, crop),
    requirements: crop,
  }));

  // Sort by score and get the best match
  const bestMatch = cropScores.sort((a, b) => b.score - a.score)[0];

  // Generate recommendations for the best matching crop
  const recommendations = generateRecommendations(inputRecord, bestMatch.requirements);

  return {
    crop: bestMatch.crop,
    confidence: bestMatch.score,
    recommendations,
  };
};