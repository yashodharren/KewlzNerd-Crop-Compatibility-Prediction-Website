### **To-Do List for Project**(H3)
1. Main Page Setup
    - Initialize project using Vite + React + TypeScript.
    - Create the main layout for the website.

2. Components Development
    - Header, Hero, Services, Crop Prediction, Crop Section and Footer sections.

3. Utilities
    - Create utility functions:
       - cropPrediction.ts for hardcoded crop compatibility logic.

4. User Authentication
   - Authentication (Login and Signup pages): LoginForm.tsx, SignUpForm.tsx.
   - Implement one hardcoded user credential within AuthContext.ts(testing user authentication)

5. Firebase Configuration(User Credentials)
    - Set up Firebase project in firebase.ts.
    - Implement user authentication to retrieve and store user data.
        - Implement AuthContext.ts for authentication state management.
        - auth.ts for Firebase authentication.
        - errorMessage.ts for user-friendly error handling.

6. Machine Learning
   - Implement a ML model to train the dataset
   - Validate the accuracy of ML using evaluation metrics

7. Deploy ML model......
