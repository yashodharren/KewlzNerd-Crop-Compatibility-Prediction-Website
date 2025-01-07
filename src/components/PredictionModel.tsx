import React, { useState } from 'react';
import { ThermometerSun, Droplets, Cloud, TestTube2, Leaf } from 'lucide-react';
import { predictCrop } from '../services/predictionService';
import type { PredictionResult } from '../services/predictionService';

export function PredictionModel() {
  const [input, setInput] = useState({
    temperature: 25,
    humidity: 70,
    rainfall: 120,
    pH: 6.5,
    nitrogen: 120,
  });

  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const prediction = await predictCrop(input);
      setResult(prediction);
    } catch (err) {
      setError('Failed to get prediction. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="predictor" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Crop Suitability Predictor</h2>
        <div className="max-w-4xl mx-auto">
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

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
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? 'Predicting...' : 'Predict Suitability'}
              </button>
            </div>
          </form>

          {result && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold capitalize">
                  Recommended Crop: {result.crop}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium">Confidence:</span>
                  <span className={`text-lg font-bold ${
                    result.confidence >= 80 ? 'text-green-600' :
                    result.confidence >= 60 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {result.confidence.toFixed(1)}%
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
          )}
        </div>
      </div>
    </section>
  );
}