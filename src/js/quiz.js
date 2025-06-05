document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-quiz-btn");
  const resultArea = document.getElementById("quiz-result-area");
  const scoreElement = document.getElementById("quiz-score");
  const feedbackElement = document.getElementById("quiz-feedback");

  const questions = [
    { name: "q1", correctAnswer: "b" },
    { name: "q2", correctAnswer: "b" },
    { name: "q3", correctAnswer: "a" },
    { name: "q4", correctAnswer: "b" },
    { name: "q5", correctAnswer: "c" },
    { name: "q6", correctAnswer: "d" },
    { name: "q7", correctAnswer: "a" },
    { name: "q8", correctAnswer: "b" },
    { name: "q9", correctAnswer: "c" },
    { name: "q10", correctAnswer: "c" },
  ];

  if (submitButton) {
    submitButton.addEventListener("click", function () {
      let score = 0;
      questions.forEach((question) => {
        const selectedOption = document.querySelector(
          `input[name="${question.name}"]:checked`
        );
        if (selectedOption && selectedOption.value === question.correctAnswer) {
          score++;
        }
      });

      scoreElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;

      // Feedback simples
      if (score === questions.length) {
        feedbackElement.textContent =
          "Excelente! Você está muito bem preparado(a)!";
      } else if (score >= questions.length / 2) {
        feedbackElement.textContent =
          "Bom trabalho! Continue aprendendo sobre prevenção.";
      } else {
        feedbackElement.textContent =
          "Continue estudando para se preparar melhor para enchentes.";
      }

      resultArea.style.display = "block";
      submitButton.style.display = "none"; // Esconde o botão de submissão após mostrar o resultado
    });
  }
});
