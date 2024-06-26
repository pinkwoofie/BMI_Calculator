
function calculateBMI()
{
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please provide a valid height.`;
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please provide a valid weight.`;
    } else {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
        let message;

        if (bmi < 18.6) {
            message = `Underweight: ${bmi}`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            message = `Normal Range: ${bmi}`;
        } else {
            message = `Overweight: ${bmi}`;
        }

        result.innerHTML = message;
    }
}