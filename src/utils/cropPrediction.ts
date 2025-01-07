// Simplified crop prediction model based on environmental factors
type CropRequirements = {
  minTemp: number;
  maxTemp: number;
  minHumidity: number;
  maxHumidity: number;
  minRainfall: number;
  maxRainfall: number;
  minpH: number;
  maxpH: number;
  minNitrogen: number;
  maxNitrogen: number;
};

const cropRequirements: Record<string, CropRequirements> = {
  rice: {
    minTemp: 20,
    maxTemp: 35,
    minHumidity: 60,
    maxHumidity: 90,
    minRainfall: 100,
    maxRainfall: 200,
    minpH: 5.5,
    maxpH: 7.5,
    minNitrogen: 80,
    maxNitrogen: 120,
  },
  wheat: {
    minTemp: 15,
    maxTemp: 30,
    minHumidity: 50,
    maxHumidity: 80,
    minRainfall: 60,
    maxRainfall: 150,
    minpH: 6.0,
    maxpH: 7.5,
    minNitrogen: 100,
    maxNitrogen: 150,
  },
  corn: {
    minTemp: 18,
    maxTemp: 32,
    minHumidity: 55,
    maxHumidity: 85,
    minRainfall: 80,
    maxRainfall: 180,
    minpH: 5.8,
    maxpH: 7.0,
    minNitrogen: 140,
    maxNitrogen: 200,
  },
};

export type PredictionInput = {
  temperature: number;
  humidity: number;
  rainfall: number;
  pH: number;
  nitrogen: number;
};

export type PredictionResult = {
  cropName: string;
  suitability: number;
  recommendations: string[];
};

export function predictCropSuitability(input: PredictionInput): PredictionResult[] {
  const results: PredictionResult[] = [];

  for (const [cropName, requirements] of Object.entries(cropRequirements)) {
    const recommendations: string[] = [];
    let suitabilityScore = 100;

    // Temperature check
    if (input.temperature < requirements.minTemp || input.temperature > requirements.maxTemp) {
      suitabilityScore -= 20;
      recommendations.push(`Temperature is outside optimal range (${requirements.minTemp}°C - ${requirements.maxTemp}°C)`);
    }

    // Humidity check
    if (input.humidity < requirements.minHumidity || input.humidity > requirements.maxHumidity) {
      suitabilityScore -= 20;
      recommendations.push(`Humidity is outside optimal range (${requirements.minHumidity}% - ${requirements.maxHumidity}%)`);
    }

    // Rainfall check
    if (input.rainfall < requirements.minRainfall || input.rainfall > requirements.maxRainfall) {
      suitabilityScore -= 20;
      recommendations.push(`Rainfall is outside optimal range (${requirements.minRainfall}mm - ${requirements.maxRainfall}mm)`);
    }

    // pH check
    if (input.pH < requirements.minpH || input.pH > requirements.maxpH) {
      suitabilityScore -= 20;
      recommendations.push(`Soil pH is outside optimal range (${requirements.minpH} - ${requirements.maxpH})`);
    }

    // Nitrogen check
    if (input.nitrogen < requirements.minNitrogen || input.nitrogen > requirements.maxNitrogen) {
      suitabilityScore -= 20;
      recommendations.push(`Nitrogen level is outside optimal range (${requirements.minNitrogen} - ${requirements.maxNitrogen} kg/ha)`);
    }

    results.push({
      cropName,
      suitability: Math.max(0, suitabilityScore),
      recommendations,
    });
  }

  return results.sort((a, b) => b.suitability - a.suitability);
}