import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler

# Sample training data (you should replace this with real data)
X_train = np.array([
    # [temperature, humidity, rainfall, pH, nitrogen]
    [25, 80, 150, 6.5, 100],
    [20, 70, 120, 7.0, 90],
    [30, 60, 100, 5.5, 120],
    # Add more training data...
])

y_train = np.array(['rice', 'wheat', 'corn'])  # Corresponding crop labels

# Initialize and train the model
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

def predict_crop(temperature, humidity, rainfall, ph, nitrogen):
    # Prepare input data
    input_data = np.array([[temperature, humidity, rainfall, ph, nitrogen]])
    input_scaled = scaler.transform(input_data)
    
    # Get prediction and probabilities
    prediction = model.predict(input_scaled)[0]
    probabilities = model.predict_proba(input_scaled)[0]
    
    # Get feature importances
    feature_importance = dict(zip(
        ['temperature', 'humidity', 'rainfall', 'pH', 'nitrogen'],
        model.feature_importances_
    ))
    
    # Generate recommendations based on feature importance
    recommendations = []
    for feature, importance in feature_importance.items():
        if importance > 0.2:  # Threshold for important features
            recommendations.append(f"Pay special attention to {feature} levels")
    
    return {
        'crop': prediction,
        'confidence': float(max(probabilities) * 100),
        'recommendations': recommendations
    }

# FastAPI endpoint
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class PredictionInput(BaseModel):
    temperature: float
    humidity: float
    rainfall: float
    pH: float
    nitrogen: float

@app.post("/predict")
async def predict(input_data: PredictionInput):
    try:
        result = predict_crop(
            input_data.temperature,
            input_data.humidity,
            input_data.rainfall,
            input_data.pH,
            input_data.nitrogen
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))