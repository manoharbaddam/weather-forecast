
# Project Title

A responsive Weather Forecast web application built using HTML, CSS, TailwindCSS, and JavaScript. It provides real-time weather updates, including temperature, humidity, visibility, air pressure, and wind speed for any location.



## ⚡ Features




- **Real-time Weather Data**: Fetches live data using the [OpenWeather API](https://openweathermap.org/).
- **Responsive Design**: Optimized for various screen sizes with [TailwindCSS](https://tailwindcss.com/).
- **User-friendly Interface**: Allows users to search any city and view its weather conditions instantly.
- **Detailed Metrics**:
  - Temperature (°C)
  - Humidity (%)
  - Visibility (km)
  - Air Pressure (hPa)
  - Wind Speed (m/s)


## 🛠 Technologies Used

- **HTML5:** For structure and semantics.

- **CSS3 & TailwindCSS:** For styling and responsive design.

- **JavaScript (ES6):** For interactivity and API integration.

- **OpenWeather API:** For fetching weather data.


## 📂 Project Structure

```plaintext
weather-forecast/
├── assets/
│   ├── search.png      # Search button icon
│   ├── clouds.png      # Example weather condition image
├── index.html          # Main HTML file
├── style.css           # Custom styles (if any)
├── tailwind.config.js  # Tailwind configuration
├── script.js           # JavaScript logic
└── README.md           # Documentation for the project
```
## 🔑 API Configuration

Sign up at [OpenWeather API](https://openweathermap.org/api) to get your API key.

Replace the placeholder API key in script.js:

```bash
const apiKey = "your-api-key-here";
```

## 🏗 Installation & Setup

#### 1. Clone the Repository


Clone the repository from [GitHub](https://github.com/manoharbaddam/weather-forecast.git):


```bash
git clone https://github.com/manoharbaddam/weather-forecast.git
cd weather-forecast
```

#### 2. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/en) installed. Run the following commands:
```bash
npm install
```

#### 3. Setup Tailwind CSS
If you use [Tailwind CSS](https://tailwindcss.com/) for styling, ensure it is properly configured:

Install Tailwind:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Update tailwind.config.js with your project paths:


```bash
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
Add Tailwind directives to input.css:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Build Tailwind CSS:
```bash
npx tailwindcss -i ./input.css -o ./output.css --watch
```


for more information reach out for [tailwindcss.com](https://tailwindcss.com/) .

#### 4. Open the App
Launch the index.html file in your browser. You can use a live server or open it directly:

```bash
npx live-server
```
## 🤝 Contributing


**Manohar Reddy Baddam** - Developer

Feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/manohar-reddy-baddam-6693b0255/).


Contributions are welcome! Feel free to fork this repository and submit a pull request.

