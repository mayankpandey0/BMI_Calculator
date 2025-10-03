from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder="static", template_folder="templates")
CORS(app)

def classify_bmi(bmi):
    if bmi < 18.5:
        return "Underweight", "You are under the normal weight range. Consider gaining weight healthily."
    elif 18.5 <= bmi < 25:
        return "Normal", "Great — your weight is within the normal range."
    elif 25 <= bmi < 30:
        return "Overweight", "You are above the recommended weight range. Consider lifestyle adjustments."
    else:
        return "Obesity", "Your BMI is in the obesity range. Consult a healthcare professional."

def healthy_weight_range(height_m):
    # returns min and max healthy weights for BMI 18.5 - 24.9
    min_w = 18.5 * (height_m ** 2)
    max_w = 24.9 * (height_m ** 2)
    return round(min_w, 1), round(max_w, 1)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/bmi", methods=["POST"])
def api_bmi():
    data = request.get_json() or {}
    # Accept keys: weight_kg, height_cm OR height_m
    try:
        weight = float(data.get("weight_kg", None))
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid or missing weight_kg (should be a number)."}), 400

    height_cm = data.get("height_cm", None)
    height_m = data.get("height_m", None)

    # Prefer height_m if provided, else convert from cm
    try:
        if height_m is not None:
            height = float(height_m)
        elif height_cm is not None:
            height = float(height_cm) / 100.0
        else:
            return jsonify({"error": "Missing height (provide height_cm or height_m)."}), 400
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid height (must be numeric)."}), 400

    # Basic validation bounds
    if weight <= 0 or not (10 <= weight <= 500):
        return jsonify({"error": "Weight out of reasonable range (10 - 500 kg)."}), 400
    if height <= 0 or not (0.4 <= height <= 2.8):
        return jsonify({"error": "Height out of reasonable range (0.4 - 2.8 meters)."}), 400

    bmi = weight / (height ** 2)
    bmi_rounded = round(bmi, 1)
    category, note = classify_bmi(bmi)
    healthy_min, healthy_max = healthy_weight_range(height)

    result = {
        "bmi": bmi_rounded,
        "category": category,
        "note": note,
        "height_m": round(height, 2),
        "healthy_weight_min_kg": healthy_min,
        "healthy_weight_max_kg": healthy_max,
    }
    return jsonify(result), 200

if __name__ == "__main__":
    # Development mode; for production use gunicorn or similar
    app.run(host="0.0.0.0", port=5000, debug=True)
