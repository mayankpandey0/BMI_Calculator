# BMI_Calculator
BMI-Calculator
BMI Calculator Web Application

A full-stack web application for calculating Body Mass Index (BMI) built with Python Flask backend and modern HTML/CSS/JavaScript frontend.

https://img.shields.io/badge/BMI-Calculator-blue https://img.shields.io/badge/Python-3.8%2B-green https://img.shields.io/badge/Flask-2.3.3-lightgrey

🌟 Features

· Dual Unit Support: Switch between Metric (kg, cm) and Imperial (lbs, inches) units · Real-time Calculation: Instant BMI calculation with AJAX requests · Responsive Design: Works perfectly on desktop, tablet, and mobile devices · BMI Classification: Automatic categorization with color-coded results · Modern UI: Beautiful gradient design with smooth animations · Error Handling: Comprehensive client and server-side validation · BMI Reference Chart: Built-in BMI category guide

🚀 Live Demo

[Add your live demo link here after deployment]

📸 Screenshots

[Add screenshots of your application here]

🛠 Technology Stack

Backend

· Python 3.8+ - Programming language · Flask - Web framework · Werkzeug - WSGI web application library

Frontend

· HTML5 - Markup language · CSS3 - Styling with modern features · JavaScript - Client-side functionality · Responsive Design - Mobile-first approach

📦 Installation

Prerequisites

· Python 3.8 or higher · pip (Python package manager)

Local Development

Clone the repository bash git clone https://github.com/yourusername/bmi-calculator.git cd bmi-calculator

Create virtual environment (recommended) bash

Windows
python -m venv venv venv\Scripts\activate

Linux/Mac
python3 -m venv venv source venv/bin/activate

Install dependencies bash pip install -r requirements.txt

Run the application bash python app.py

Access the application Open your browser and navigate to http://localhost:5000

Project Structure

bmi-calculator/ ├── app.py # Flask application ├── requirements.txt # Python dependencies ├── README.md # Project documentation ├── templates/ │ └── index.html # Main HTML template └── static/ ├── style.css # CSS stylesheets └── script.js # JavaScript functionality

🎯 How to Use

Select Unit System: Choose between Metric or Imperial units
Enter Measurements: · Metric: Weight in kilograms (kg), Height in centimeters (cm) · Imperial: Weight in pounds (lbs), Height in inches (in)
Calculate: Click the "Calculate BMI" button
View Results: See your BMI value and category with color coding
BMI Categories

· Underweight: BMI < 18.5 (Yellow) · Normal weight: 18.5 ≤ BMI < 25 (Blue) · Overweight: 25 ≤ BMI < 30 (Yellow) · Obese: BMI ≥ 30 (Red)

🚀 Deployment

PythonAnywhere

Create account at pythonanywhere.com
Upload files via dashboard or GitHub
Configure WSGI file and virtual environment
Reload web app
Railway

bash

Add railway configuration
railway init railway deploy

Heroku

bash

Create Procfile and runtime.txt
heroku create your-bmi-calculator git push heroku main

Render.com

Connect GitHub repository
Set build command: pip install -r requirements.txt
Set start command: python app.py
Deploy
🧪 Testing

Test the application with these example inputs:

Metric System

· Weight: 70 kg · Height: 175 cm · Expected BMI: 22.9 (Normal weight)

Imperial System

· Weight: 154 lbs · Height: 69 inches · Expected BMI: 22.7 (Normal weight)

🔧 API Endpoints

POST /calculate

Calculate BMI from provided measurements.

Request:

json { "weight": 70, "height": 175, "unit_system": "metric" }

Response:

json { "bmi": 22.9, "category": "Normal weight", "unit_system": "metric" }

🐛 Troubleshooting

Common Issues

Port already in use bash

Use different port
python app.py --port 5001

Module not found errors bash

Reinstall dependencies
pip install -r requirements.txt

CSS/JS not loading · Check static file paths · Clear browser cache · Verify file permissions

Debug Mode

For development, enable debug mode in app.py:

python if name == 'main': app.run(debug=True, host='0.0.0.0', port=5000)

🤝 Contributing

We welcome contributions! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
Development Setup

bash

Install development dependencies
pip install -r requirements.txt

Run with auto-reload for development
python app.py

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments

· BMI formula based on WHO standards · Design inspired by modern web applications · Icons from Font Awesome · Color scheme using modern CSS gradients

📞 Support

If you encounter any issues or have questions:

Check the Issues page
Create a new issue with detailed description
Contact: your-email@example.com
🔄 Changelog

v1.0.0 (2024-01-01)

· Initial release · Dual unit support (Metric/Imperial) · Responsive design · BMI categorization

Disclaimer: This BMI calculator is for informational purposes only. It is not a substitute for professional medical advice. Always consult with healthcare professionals for health-related decisions.

Note: BMI has limitations and may not accurately represent health status for all individuals, including athletes, pregnant women, and the elderly.

Made with ❤ using Python and Flask

⬆ Back to Top
