import React, { useState } from 'react';
import { PredictionInput, PredictionResult, predictCropSuitability } from '../utils/cropPrediction';
import { ThermometerSun, Droplets, Cloud, TestTube2, Leaf } from 'lucide-react';

export function PredictionModel() {
  const [input, setInput] = useState<PredictionInput>({
    temperature: 25,
    humidity: 70,
    rainfall: 120,
    pH: 6.5,
    nitrogen: 120,
  });

  const [results, setResults] = useState<PredictionResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const predictions = predictCropSuitability(input);
    setResults(predictions);
    setShowResults(true);
  };

  return (
    <section id="predictor" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Crop Suitability Predictor</h2>
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <ThermometerSun className="h-5 w-5 text-green-600" />
                <span>Temperature (°C)</span>
              </label>
              <input
                type="number"
                name="temperature"
                value={input.temperature}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                step="0.1"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <Droplets className="h-5 w-5 text-green-600" />
                <span>Humidity (%)</span>
              </label>
              <input
                type="number"
                name="humidity"
                value={input.humidity}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <Cloud className="h-5 w-5 text-green-600" />
                <span>Rainfall (mm)</span>
              </label>
              <input
                type="number"
                name="rainfall"
                value={input.rainfall}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <TestTube2 className="h-5 w-5 text-green-600" />
                <span>Soil pH</span>
              </label>
              <input
                type="number"
                name="pH"
                value={input.pH}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                step="0.1"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <Leaf className="h-5 w-5 text-green-600" />
                <span>Nitrogen (kg/ha)</span>
              </label>
              <input
                type="number"
                name="nitrogen"
                value={input.nitrogen}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Predict Suitability
              </button>
            </div>
          </form>

          {showResults && (
            <div className="mt-8 space-y-6">
              {results.map((result) => (
                <div
                  key={result.cropName}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold capitalize">{result.cropName}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-medium">Suitability:</span>
                      <span className={`text-lg font-bold ${
                        result.suitability >= 80 ? 'text-green-600' :
                        result.suitability >= 60 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {result.suitability}%
                      </span>
                    </div>
                  </div>
                  {result.recommendations.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Recommendations:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {result.recommendations.map((rec, idx) => (
                          <li key={idx}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}