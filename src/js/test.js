console.log("test.js подключен и работает");
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("hiking-quiz");
  const resultContainer = document.getElementById("quiz-result");

  const scoreMap = {
    novice: 1,
    moderate: 2,
    advanced: 3,
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    let totalScore = 0;

    for (let i = 1; i <= 7; i++) {
      const answer = formData.get("q" + i);
      if (answer && scoreMap[answer]) {
        totalScore += scoreMap[answer];
      }
    }

    let level = "";
    if (totalScore <= 7) {
      level = "Novice Hiker";
    } else if (totalScore <= 14) {
      level = "Moderate Hiker";
    } else if (totalScore <= 18) {
      level = "Advanced Moderate Hiker";
    } else if (totalScore <= 20) {
      level = "Expert Hiker";
    } else {
      level = "Expert Backpacker";
    }

    resultContainer.innerHTML = `
      <h2>Your hiking level: <span style="color:#fbd784";>${level}</span></h2>
      <p>Total points scored: ${totalScore}</p>
    `;

    resultContainer.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector('.btn-start-test').addEventListener('click', () => {
  document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth' });
});