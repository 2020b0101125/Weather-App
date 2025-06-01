# Weather App 🌤️

A simple weather application that displays real-time weather information for any city using the OpenWeatherMap API.

## 🔧 Features

- Search weather by city name
- Displays temperature, humidity, weather description, etc.
- Clean and responsive UI

## 🛠️ Tech Stack

- HTML, CSS, JavaScript,React
- [Weather API](https://www.weatherapi.com)

## 🚀 How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/2020b0101125/Weather-App.git
   make your own api key from the stated site
   add the api key to the env file in the directory

   ```

2. Install dependencies (if using npm):
   npm install

3. Get your own API key:
   =>Sign up at weatherapi.com
   =>Generate a free API key

4. Create a .env file in the root directory and add:
   VITE_API_KEY=<your_api_key_here>

5. Run the app
   npm run dev

## FOLDER STRUCTURE

```

Weather-App/
│
├── public/
├── src/
│ ├── assets/
│ │ ├── clear.png
│ │ ├── cloudy1.png
│ │ ├── cloudy2.png
│ │ ├── drizzle.png
│ │ ├── humid.png
│ │ ├── rain.png
│ │ ├── rain_heavy.png
│ │ ├── search_icon.png
│ │ ├── search_icon1.png
│ │ └── snow.png
│ │ └── wind1.png
│ │
│ ├── components/
│ │ ├── Weather.jsx
│ │ └── weather.css
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
│
├── node_modules/
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── index.html
└── README.md
```
