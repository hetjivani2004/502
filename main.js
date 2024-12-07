document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.querySelector("#greeting");
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greeting.textContent = "Good Morning! Start Your Healthy Day!";
    } else if (currentHour < 18) {
        greeting.textContent = "Good Afternoon! Keep Monitoring Your Health!";
    } else {
        greeting.textContent = "Good Evening! Relax and Stay Healthy!";
    }
});
