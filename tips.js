
// Sample Tips
const tips = {
    lowActivity: [
        "Take short walks every hour to stay active.",
        "Try stretching exercises to relieve muscle tension.",
        "Set small exercise goals like 10 push-ups or 15 squats."
    ],
    moderateActivity: [
        "Maintain your current level of activity to stay healthy.",
        "Add yoga or Pilates to enhance flexibility.",
        "Ensure you're hydrating enough after exercises."
    ],
    highActivity: [
        "Consider increasing protein intake to support muscle recovery.",
        "Ensure adequate rest days to avoid overtraining.",
        "Try interval training for an added challenge."
    ],
    lowCalorie: ["Consider eating more whole grains and lean protein.", "Avoid skipping meals to prevent fatigue."],
    highCalorie: ["Watch portion sizes to maintain a balanced diet.", "Increase vegetable intake for better nutrition."],
    lowSleep: ["Aim for 7-8 hours of sleep for optimal recovery.", "Reduce screen time before bed to improve sleep quality."]
};

// Generate random tips based on activity
function getRandomTips(activity, calorie, sleep) {
    let result = [];

    if (activity === "low") result = result.concat(tips.lowActivity);
    else if (activity === "moderate") result = result.concat(tips.moderateActivity);
    else if (activity === "high") result = result.concat(tips.highActivity);

    if (calorie < 2000) result = result.concat(tips.lowCalorie);
    else if (calorie > 2500) result = result.concat(tips.highCalorie);

    if (sleep < 7) result = result.concat(tips.lowSleep);

    return result.sort(() => 0.5 - Math.random()).slice(0, 3); // Random 3 tips
}

// Form submission event
document.getElementById("tips-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const activity = document.getElementById("activity").value;
    const calorie = parseInt(document.getElementById("calorie").value);
    const sleep = parseInt(document.getElementById("sleep").value);

    // Get tips and display them
    const generatedTips = getRandomTips(activity, calorie, sleep);
    const tipsBox = document.getElementById("health-tips");
    tipsBox.innerHTML = generatedTips.map(tip => `<p>- ${tip}</p>`).join("");
});
