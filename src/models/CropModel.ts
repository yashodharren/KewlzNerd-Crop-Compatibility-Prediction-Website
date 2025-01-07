// Crop requirement definitions
export interface CropRequirements {
  name: string;
  temperature: { min: number; max: number; optimal: number };
  humidity: { min: number; max: number; optimal: number };
  rainfall: { min: number; max: number; optimal: number };
  pH: { min: number; max: number; optimal: number };
  nitrogen: { min: number; max: number; optimal: number };
}

export const cropDatabase: CropRequirements[] = [
  {
    name: 'rice',
    temperature: { min: 20, max: 35, optimal: 25 },
    humidity: { min: 60, max: 90, optimal: 75 },
    rainfall: { min: 100, max: 200, optimal: 150 },
    pH: { min: 5.5, max: 7.5, optimal: 6.5 },
    nitrogen: { min: 80, max: 120, optimal: 100 }
  },
  {
    name: 'wheat',
    temperature: { min: 15, max: 30, optimal: 22 },
    humidity: { min: 50, max: 80, optimal: 65 },
    rainfall: { min: 60, max: 150, optimal: 100 },
    pH: { min: 6.0, max: 7.5, optimal: 6.8 },
    nitrogen: { min: 100, max: 150, optimal: 120 }
  },
  {
    name: 'corn',
    temperature: { min: 18, max: 32, optimal: 25 },
    humidity: { min: 55, max: 85, optimal: 70 },
    rainfall: { min: 80, max: 180, optimal: 130 },
    pH: { min: 5.8, max: 7.0, optimal: 6.5 },
    nitrogen: { min: 140, max: 200, optimal: 170 }
  }
];