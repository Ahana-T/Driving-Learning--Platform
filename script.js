// SIGNUP
function signup() {
  let user = document.getElementById("signupUser").value;
  let pass = document.getElementById("signupPass").value;
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);
  alert("Signup successful!");
  window.location.href = "login.html";
}

// LOGIN
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  if (user === localStorage.getItem("user") && pass === localStorage.getItem("pass")) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}

// COURSE PROGRESS
function markComplete(level) {
  localStorage.setItem(level, "Completed");
  alert(level + " completed");
}

// QUIZ
function submitQuiz() {
  let score = 0;
  let answers = document.querySelectorAll('input[value="correct"]:checked');
  score = answers.length;

  document.getElementById("result").innerText =
    "Your Score: " + score + " / 5";

  localStorage.setItem("quizScore", score);
}


// CERTIFICATE
window.onload = function () {
  if (document.getElementById("userName")) {
    document.getElementById("userName").innerText = localStorage.getItem("user");
  }
}

function downloadCertificate() {
  window.print();
}
