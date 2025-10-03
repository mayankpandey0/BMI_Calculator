const form = document.getElementById("bmi-form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const unitSelect = document.getElementById("unit");
const resultSection = document.getElementById("result");
const bmiValueEl = document.getElementById("bmi-value");
const categoryEl = document.getElementById("category");
const noteEl = document.getElementById("note");
const healthyRangeEl = document.getElementById("healthy-range");
const progressEl = document.getElementById("bmi-progress");
const calcBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn");

function resetResult() {
  resultSection.classList.add("hidden");
  bmiValueEl.textContent = "—";
  categoryEl.textContent = "—";
  noteEl.textContent = "—";
  healthyRangeEl.textContent = "—";
  progressEl.style.width = "0%";
  progressEl.style.background = "";
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  resetResult();

  const weight = parseFloat(weightInput.value);
  let height = parseFloat(heightInput.value);
  const unit = unitSelect.value;

  // Basic frontend validation
  if (!weight || weight <= 0) {
    alert("Enter a valid weight in kilograms.");
    return;
  }
  if (!height || height <= 0) {
    alert("Enter a valid height.");
    return;
  }

  if (unit === "cm") {
    // user entered cm; send height_cm
  } else {
    // user entered meters; convert to m parameter
  }

  calcBtn.disabled = true;
  calcBtn.textContent = "Calculating...";

  const payload = {
    weight_kg: weight,
  };
  if (unit === "cm") {
    payload.height_cm = height;
  } else {
    payload.height_m = height;
  }

  try {
    const res = await fetch("/api/bmi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(()=>({error:"Invalid response"}));
      throw new Error(err.error || "Server error");
    }

    const data = await res.json();
    bmiValueEl.textContent = data.bmi;
    categoryEl.textContent = data.category;
    noteEl.textContent = data.note;
    healthyRangeEl.textContent = `${data.healthy_weight_min_kg} - ${data.healthy_weight_max_kg}`;

    // Visual progress: map BMI range 12..40 to 0..100%
    const clamp = (v,min,max)=>Math.max(min,Math.min(max,v));
    const pct = clamp((data.bmi - 12) / (40 - 12), 0, 1) * 100;
    progressEl.style.width = pct + "%";

    // color by category
    let color = "";
    if (data.category === "Underweight") color = "linear-gradient(90deg, #fde68a, #fca5a5)";
    else if (data.category === "Normal") color = "linear-gradient(90deg, #bbf7d0, #86efac)";
    else if (data.category === "Overweight") color = "linear-gradient(90deg, #ffd27f, #ff7b7b)";
    else color = "linear-gradient(90deg,#ff9fb3,#fb7185)";

    progressEl.style.background = color;

    resultSection.classList.remove("hidden");
  } catch (error) {
    console.error(error);
    alert("Error: " + (error.message || "Could not calculate BMI"));
  } finally {
    calcBtn.disabled = false;
    calcBtn.textContent = "Calculate BMI";
  }
});

clearBtn.addEventListener("click", () => {
  weightInput.value = "";
  heightInput.value = "";
  unitSelect.value = "cm";
  resetResult();
});
