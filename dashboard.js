// Sample health data
const healthData = {
    labels: [],
    exercise: [],
    calories: [],
    sleep: []
};

// Handle form submission
document.getElementById("health-data-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const date = document.getElementById("date").value;
    const exercise = parseInt(document.getElementById("exercise").value);
    const calories = parseInt(document.getElementById("calories").value);
    const sleep = parseInt(document.getElementById("sleep").value);

    // Update health data
    healthData.labels.push(date);
    healthData.exercise.push(exercise);
    healthData.calories.push(calories);
    healthData.sleep.push(sleep);

    // Update the chart
    updateChart();

    // Clear form
    document.getElementById("health-data-form").reset();
});

// Create and update chart
const ctx = document.getElementById("health-chart").getContext("2d");
const healthChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: healthData.labels,
        datasets: [
            {
                label: "Exercise (mins)",
                data: healthData.exercise,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2
            },
            {
                label: "Calories Consumed",
                data: healthData.calories,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderWidth: 2
            },
            {
                label: "Sleep (hours)",
                data: healthData.sleep,
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: { title: { display: true, text: "Date" } },
            y: { title: { display: true, text: "Value" } }
        }
    }
});

// Function to update chart
function updateChart() {
    healthChart.update();
}
