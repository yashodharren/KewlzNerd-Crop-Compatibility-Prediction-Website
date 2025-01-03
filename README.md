### **To-Do List for Project**
1. Main Page Setup
    - Initialize project using Vite + React + TypeScript.
    - Create the main layout for the website.

2. Components Development
    - Header, Hero, Services, Crop Prediction, Crop Section and Footer sections.

3. Utilities
    - Create utility functions:
       - cropPrediction.ts for hardcoded crop compatibility logic.

4. Running the server of Website
    - Run the command npm install in the terminal (install all the dependancies needed for the website)
    - The dependancies will be installed and be stored in a file node_modules in the folder of the project
    - Run the command npm run dev to lauch the website on a browser via localhost

5. User Authentication
   - Authentication (Login and Signup pages): LoginForm.tsx, SignUpForm.tsx.
   - Implement one hardcoded user credential within AuthContext.ts (testing user authentication)

6. Firebase Configuration(Storing User Credentials)
    - Set up Firebase project in firebase.ts.
    - Implement user authentication to retrieve and store user data.
        - Implement AuthContext.ts for authentication state management.
        - auth.ts for Firebase authentication.
        - errorMessage.ts for user-friendly error handling.

7. Machine Learning
    - Implement a ML model to train the dataset
    - Validate the accuracy of ML using evaluation metrics

8. Deploy ML model......

9. Production build of Website
    - In VS code run the command npm run build (Vite requires a production build of the project before deployment)
    - A dist folder will be created containing the optimized static files for the website (contains assets and index.html file)
    - The assests file contain:
       - JavaScript Files: Bundled and minified JavaScript files for the website's functionality.
       - CSS Files: Compiled and optimized CSS files for styling.

10. Publish the Website in the Internet using Netlify
    - Create and Netlify account
    - Upload the dist file from the project folder
    - Get the URL for the Website (https://agrigrow-crop-compability.netlify.app/)

### **File directory for a website:**
/dist
/node_modules
/src
│
├── /component
│   ├── /auth
│   │   ├── LoginForm.tsx
│   │   └── SignUpForm.tsx
│   │
│   ├── /layout
│   │   ├── ProtectedRoute.tsx
│   │
│   ├── CropSection.tsx
│   │   
│   ├── Dashboard.tsx
│   │
│   ├── Footer.tsx
│   │
│   ├── Header.tsx
│   │
│   ├── Hero.tsx
│   │
│   ├── PredictionModel.tsx
│   │
│   └── Services.tsx
│
├── /config
│   ├── firebase.ts
│
├── /contexts
│   ├── AuthContext.ts
│
├── /utils
│   ├── auth.ts
│   ├── cropPrediction.ts
│   └── errorMessage.ts
│
├── /App.tsx
│   
├── /index.css   
│   
├── /main.tsx  
│
├── /vite-env.d.ts
├── 
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
