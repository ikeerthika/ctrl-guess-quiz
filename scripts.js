// ============================================================
// QUIZ DATA - 25 QUESTIONS
// ============================================================

const quizData = [

  // ==========================================================
  // ROUND 1 - PYTHON BASICS
  // MOVIE 1 - SILLUNU ORU KADHAL
  // ==========================================================

  {
    movieIndex: 1,
    diff: "EASY",
    q: "Q1: What is Python?",
    opts: [
      "A database management system",
      "A high-level, interpreted programming language",
      "An operating system",
      "A web browser"
    ],
    ans: 1,
    clueImage: "img1.jpg"
  },

  {
    movieIndex: 1,
    diff: "EASY",
    q: "Q2: Which of the following is a valid Python data type?",
    opts: [
      "Integer",
      "String",
      "List",
      "All of the above"
    ],
    ans: 3,
    clueImage: "img2.jpg"
  },

  {
    movieIndex: 1,
    diff: "EASY",
    q: "Q3: Which collection allows duplicate values and maintains order?",
    opts: [
      "Set",
      "Dictionary",
      "List",
      "None"
    ],
    ans: 2,
    clueImage: "img3.jpg"
  },

  {
    movieIndex: 1,
    diff: "MEDIUM",

    q: `Q4: What will be the output?

x = [1, 2, 3]
y = x
y.append(4)
print(x)`,

    opts: [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "[4]",
      "Error"
    ],

    ans: 1,
    clueImage: "img4.jpg"
  },

  {
    movieIndex: 1,
    diff: "MEDIUM",
    q: "Q5: What is the main difference between == and is in Python?",

    opts: [
      "Both are exactly the same",
      "== compares values, is compares object identity",
      "== compares identity, is compares values",
      "Both compare memory only"
    ],

    ans: 1,
    clueImage: "img5.jpg",

    actualName: "sillunu oru kadhal",

    aliases: [
      "sillunuorukadhal",
      "sillunu oru kaadhal",
      "sillunuoru kadhal",
      "SILLUNUORUKADHAL",
      "SILLUNUORU KAADHAL",
      "SILLUNU ORU KAADHAL"
    ]
  },


  // ==========================================================
  // ROUND 2 - VARIABLES & LIST OPERATIONS
  // MOVIE 2 - 96
  // ==========================================================

  {
    movieIndex: 2,
    diff: "EASY",
    q: "Q6: What is a variable in Python?",

    opts: [
      "A keyword",
      "A name that refers to a value/object",
      "A loop",
      "A function only"
    ],

    ans: 1,
    clueImage: "img6.jpg"
  },

  {
    movieIndex: 2,
    diff: "EASY",

    q: `Q7: What will be the output?

x = "10"
y = int(x)
print(y + 5)`,

    opts: [
      "105",
      "15",
      "\"105\"",
      "Error"
    ],

    ans: 1,
    clueImage: "img7.jpg"
  },

  {
    movieIndex: 2,
    diff: "MEDIUM",

    q: `Q8: What will be the output?

numbers = [1, 2]
numbers.append(3)
print(numbers)`,

    opts: [
      "[1, 2]",
      "[3, 1, 2]",
      "[1, 2, 3]",
      "Error"
    ],

    ans: 2,
    clueImage: "img8.jpg"
  },

  {
    movieIndex: 2,
    diff: "MEDIUM",

    q: `Q9: What will be the output?

numbers = [1, 2, 3]
numbers.insert(1, 10)
print(numbers)`,

    opts: [
      "[10, 1, 2, 3]",
      "[1, 10, 2, 3]",
      "[1, 2, 10, 3]",
      "[1, 2, 3, 10]"
    ],

    ans: 1,
    clueImage: "img9.jpg"
  },

  {
    movieIndex: 2,
    diff: "MEDIUM",

    q: `Q10: What will be the output?

numbers = [1, 2]
numbers.extend([3, 4])
print(numbers)`,

    opts: [
      "[1, 2, [3, 4]]",
      "[3, 4, 1, 2]",
      "[1, 2, 3, 4]",
      "Error"
    ],

    ans: 2,
    clueImage: "img10.jpg",

    actualName: "96",

    aliases: [
      "96",
      "ninety six",
      "ninety-six"
    ]
  },


  // ==========================================================
  // ROUND 3 - LIST, LOOP & FUNCTION
  // MOVIE 3 - KAITHI
  // ==========================================================

  {
    movieIndex: 3,
    diff: "EASY",

    q: "Q11: Which statement is used to execute code when a condition is true?",

    opts: [
      "for",
      "if",
      "def",
      "import"
    ],

    ans: 1,
    clueImage: "img11.jpg"
  },

  {
    movieIndex: 3,
    diff: "EASY",

    q: `Q12: What will be the output?

for i in range(3):
    print(i)`,

    opts: [
      "1 2 3",
      "0 1 2",
      "0 1 2 3",
      "1 2"
    ],

    ans: 1,
    clueImage: "img12.jpg"
  },

  {
    movieIndex: 3,
    diff: "MEDIUM",

    q: "Q13: What does break do inside a loop?",

    opts: [
      "Skips the current iteration",
      "Stops the loop completely",
      "Restarts the loop",
      "Does nothing"
    ],

    ans: 1,
    clueImage: "img13.jpg"
  },

  {
    movieIndex: 3,
    diff: "MEDIUM",

    q: "Q14: What is a function in Python?",

    opts: [
      "A reusable block of code",
      "A data type",
      "A loop only",
      "A variable only"
    ],

    ans: 0,
    clueImage: "img14.jpg"
  },

  {
    movieIndex: 3,
    diff: "MEDIUM",

    q: `Q15: What will be the output?

def greet(name):
    return "Hello " + name

print(greet("John"))`,

    opts: [
      "Hello",
      "John",
      "Hello John",
      "Error"
    ],

    ans: 2,
    clueImage: "img15.jpg",

    actualName: "kaithi",

    aliases: [
      "kaithi",
      "kathi",
      "Kaithi",
      "KAITHI"
    ]
  },


  // ==========================================================
  // ROUND 4 - FUNCTIONS & PYTHON FEATURES
  // MOVIE 4 - MERSAL
  // ==========================================================

  {
    movieIndex: 4,
    diff: "EASY",

    q: "Q16: In a function, what is an argument?",

    opts: [
      "A value passed to a function",
      "The function name",
      "The return keyword",
      "A Python module"
    ],

    ans: 0,
    clueImage: "img16.jpg"
  },

  {
    movieIndex: 4,
    diff: "MEDIUM",

    q: `Q17: What will be the output?

def greet(name="User"):
    print("Hello", name)

greet()`,

    opts: [
      "Hello",
      "Hello User",
      "User",
      "Error"
    ],

    ans: 1,
    clueImage: "img17.jpg"
  },

  {
    movieIndex: 4,
    diff: "MEDIUM",

    q: "Q18: What is the purpose of *args in Python?",

    opts: [
      "To accept multiple positional arguments",
      "To accept only one argument",
      "To create a class",
      "To handle exceptions"
    ],

    ans: 0,
    clueImage: "img18.jpg"
  },

  {
    movieIndex: 4,
    diff: "MEDIUM",

    q: "Q19: What is a lambda function?",

    opts: [
      "A function without a name",
      "A class",
      "A loop",
      "A module"
    ],

    ans: 0,
    clueImage: "img19.jpg"
  },

  {
    movieIndex: 4,
    diff: "HARD",

    q: `Q20: What will be the output?

squares = [x * x for x in range(4)]
print(squares)`,

    opts: [
      "[1, 4, 9, 16]",
      "[0, 1, 4, 9]",
      "[0, 1, 2, 3]",
      "Error"
    ],

    ans: 1,
    clueImage: "img20.jpg",

    // IMPORTANT: MOVIE 4
    actualName: "mersal",

    aliases: [
      "mersal",
      "Mersal",
      "MERSAL"
    ]
  },


  // ==========================================================
  // ROUND 5 - OOP & FILE HANDLING
  // MOVIE 5 - PA PAANDI
  // ==========================================================

  {
    movieIndex: 5,
    diff: "EASY",

    q: "Q21: What does OOP stand for?",

    opts: [
      "Object-Oriented Programming",
      "Object Operating Program",
      "Open Object Programming",
      "Object Order Process"
    ],

    ans: 0,
    clueImage: "img21.jpg"
  },

  {
    movieIndex: 5,
    diff: "MEDIUM",

    q: "Q22: What is a class in Python?",

    opts: [
      "A blueprint for creating objects",
      "A variable",
      "A loop",
      "A module only"
    ],

    ans: 0,
    clueImage: "img22.jpg"
  },

  {
    movieIndex: 5,
    diff: "MEDIUM",

    q: `Q23: What will be the output?

class Student:
    def __init__(self, name):
        self.name = name

s = Student("John")
print(s.name)`,

    opts: [
      "Student",
      "name",
      "John",
      "Error"
    ],

    ans: 2,
    clueImage: "img23.jpg"
  },

  {
    movieIndex: 5,
    diff: "HARD",

    q: "Q24: What is inheritance in Python?",

    opts: [
      "One class acquiring properties and methods of another class",
      "Creating multiple variables",
      "Deleting an object",
      "Handling an exception"
    ],

    ans: 0,
    clueImage: "img24.jpg"
  },

  {
    movieIndex: 5,
    diff: "HARD",

    q: "Q25: Which function is commonly used to open a file in Python?",

    opts: [
      "file()",
      "open()",
      "read()",
      "load()"
    ],

    ans: 1,
    clueImage: "img25.jpg",

    // IMPORTANT: MOVIE 5
    actualName: "pa paandi",

    aliases: [
      "pa paandi",
      "Pa Paandi",
      "PaPaandi",
      "papaandi",
      "pa pandi",
      "papandi",
      "PA PAANDI",
      "PAPAANDI",
      "PAPANDI",
       "power Pandi",
       "POWER PANDI",
      "powerpandi",
    ]
  }

];


// ============================================================
// CONSTANTS
// ============================================================

const TOTAL_QUESTIONS = quizData.length;
const QUESTIONS_PER_MOVIE = 5;
const TOTAL_MOVIES = 5;

const STORAGE_KEY = "ctrl_guess_session";


// ============================================================
// GAME STATE
// ============================================================

let teamName = "";
let member1 = "";
let member2 = "";

let currentIndex = 0;

let totalTimeSeconds = 0;
let timerInterval = null;

let correctTechCount = 0;
let wrongTechCount = 0;

let currentScreen = "REGISTER";

let unlockedImages = [];

let questionLocked = false;
let movieGuessLocked = false;


// ============================================================
// DOM CONTENT LOADED
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

  const registrationForm =
    document.getElementById("reg-form");

  const movieGuessForm =
    document.getElementById("movie-guess-form");


  if (registrationForm) {

    registrationForm.addEventListener(
      "submit",
      handleRegistration
    );

  }


  if (movieGuessForm) {

    movieGuessForm.addEventListener(
      "submit",
      submitMovieGuess
    );

  }


  // Start fresh
  localStorage.removeItem(STORAGE_KEY);

  resetApplication();

  restoreCurrentScreen();

});


// ============================================================
// RESET APPLICATION
// ============================================================

function resetApplication() {

  stopTimer();

  teamName = "";
  member1 = "";
  member2 = "";

  currentIndex = 0;

  totalTimeSeconds = 0;

  correctTechCount = 0;
  wrongTechCount = 0;

  currentScreen = "REGISTER";

  unlockedImages = [];

  questionLocked = false;
  movieGuessLocked = false;


  const teamTag =
    document.getElementById("team-name-tag");


  if (teamTag) {

    teamTag.innerText =
      "Not Registered";

  }


  updateTimerDisplay();

}


// ============================================================
// SAVE SESSION
// ============================================================

function saveSessionState() {

  const sessionData = {

    teamName,
    member1,
    member2,

    currentIndex,

    totalTimeSeconds,

    correctTechCount,
    wrongTechCount,

    currentScreen,

    unlockedImages

  };


  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(sessionData)
    );

  }

  catch (error) {

    console.log(
      "Could not save session."
    );

  }

}


// ============================================================
// RESTORE CURRENT SCREEN
// ============================================================

function restoreCurrentScreen() {

  const registerCard =
    document.getElementById("register-card");

  const quizCard =
    document.getElementById("quiz-card");

  const clueCard =
    document.getElementById("clue-card");

  const scoreCard =
    document.getElementById("score-card");


  if (
    !registerCard ||
    !quizCard ||
    !clueCard ||
    !scoreCard
  ) {

    return;

  }


  registerCard.classList.add("hidden");
  quizCard.classList.add("hidden");
  clueCard.classList.add("hidden");
  scoreCard.classList.add("hidden");


  // REGISTER

  if (currentScreen === "REGISTER") {

    registerCard.classList.remove("hidden");

    updateHeader();

    return;

  }


  // QUIZ

  if (currentScreen === "QUIZ") {

    quizCard.classList.remove("hidden");

    updateHeader();

    renderQuestion();

    return;

  }


  // CLUE / MOVIE GUESS

  if (currentScreen === "CLUE") {

    clueCard.classList.remove("hidden");

    updateHeader();

    renderCluesBoard();

    return;

  }


  // SCORE

  if (currentScreen === "SCORE") {

    scoreCard.classList.remove("hidden");

    updateHeader();

    finishGame();

    return;

  }


  currentScreen = "REGISTER";

  registerCard.classList.remove("hidden");

}


// ============================================================
// UPDATE HEADER
// ============================================================

function updateHeader() {

  const teamTag =
    document.getElementById(
      "team-name-tag"
    );

  const movieNum =
    document.getElementById(
      "current-movie-num"
    );

  const questionNum =
    document.getElementById(
      "current-q-num"
    );


  if (teamTag) {

    teamTag.innerText =
      teamName || "Not Registered";

  }


  if (movieNum) {

    const currentQ =
      quizData[currentIndex];

    movieNum.innerText =
      currentQ
        ? currentQ.movieIndex
        : TOTAL_MOVIES;

  }


  if (questionNum) {

    questionNum.innerText =
      Math.min(
        currentIndex + 1,
        TOTAL_QUESTIONS
      );

  }

}


// ============================================================
// REGISTRATION
// ============================================================

function handleRegistration(e) {

  e.preventDefault();


  const teamInput =
    document.getElementById(
      "reg-team-name"
    );

  const member1Input =
    document.getElementById(
      "reg-member-1"
    );

  const member2Input =
    document.getElementById(
      "reg-member-2"
    );


  if (
    !teamInput ||
    !member1Input ||
    !member2Input
  ) {

    console.error(
      "Registration fields not found."
    );

    return;

  }


  teamName =
    teamInput.value.trim();

  member1 =
    member1Input.value.trim();

  member2 =
    member2Input.value.trim();


  if (!teamName) {

    alert(
      "Please enter team name."
    );

    teamInput.focus();

    return;

  }


  if (!member1) {

    alert(
      "Please enter Team Member 1 name."
    );

    member1Input.focus();

    return;

  }


  // RESET GAME

  currentIndex = 0;

  totalTimeSeconds = 0;

  correctTechCount = 0;
  wrongTechCount = 0;

  unlockedImages = [];

  questionLocked = false;
  movieGuessLocked = false;

  currentScreen = "QUIZ";


  updateHeader();

  updateTimerDisplay();

  saveSessionState();

  restoreCurrentScreen();

  startTimer();

}


// ============================================================
// TIMER
// ============================================================

function startTimer() {

  stopTimer();


  timerInterval =
    setInterval(
      function () {

        totalTimeSeconds++;

        updateTimerDisplay();

        saveSessionState();

      },
      1000
    );

}


// ============================================================
// STOP TIMER
// ============================================================

function stopTimer() {

  if (timerInterval !== null) {

    clearInterval(
      timerInterval
    );

    timerInterval = null;

  }

}


// ============================================================
// UPDATE TIMER
// ============================================================

function updateTimerDisplay() {

  const timer =
    document.getElementById(
      "timer"
    );


  if (!timer) {

    return;

  }


  const minutes =
    Math.floor(
      totalTimeSeconds / 60
    )
      .toString()
      .padStart(2, "0");


  const seconds =
    (
      totalTimeSeconds % 60
    )
      .toString()
      .padStart(2, "0");


  timer.innerText =
    `${minutes}:${seconds}`;

}


// ============================================================
// RENDER QUESTION
// ============================================================

function renderQuestion() {

  if (
    currentIndex < 0 ||
    currentIndex >= TOTAL_QUESTIONS
  ) {

    return;

  }


  const currentQ =
    quizData[currentIndex];


  if (!currentQ) {

    return;

  }


  questionLocked = false;


  const movieNum =
    document.getElementById(
      "current-movie-num"
    );


  if (movieNum) {

    movieNum.innerText =
      currentQ.movieIndex;

  }


  const qNum =
    document.getElementById(
      "current-q-num"
    );


  if (qNum) {

    qNum.innerText =
      currentIndex + 1;

  }


  const tracker =
    document.getElementById(
      "q-tracker-text"
    );


  if (tracker) {

    const questionNumber =
      (currentIndex %
        QUESTIONS_PER_MOVIE) + 1;


    tracker.innerText =
      `Question ${questionNumber} of ${QUESTIONS_PER_MOVIE} for Movie #${currentQ.movieIndex}`;

  }


  const badge =
    document.getElementById(
      "diff-badge"
    );


  if (badge) {

    badge.innerText =
      currentQ.diff;

  }


  const questionText =
    document.getElementById(
      "question-text"
    );


  if (questionText) {

    questionText.innerText =
      currentQ.q;

  }


  const optionsContainer =
    document.getElementById(
      "options-container"
    );


  if (!optionsContainer) {

    return;

  }


  optionsContainer.innerHTML = "";


  const feedback =
    document.getElementById(
      "inline-feedback"
    );


  if (feedback) {

    feedback.innerText = "";

    feedback.className =
      "feedback-banner hidden";

  }


  currentQ.opts.forEach(
    function (optionText, index) {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "opt-btn";


      button.innerText =
        optionText;


      button.addEventListener(
        "click",
        function () {

          handleAnswer(
            index,
            button
          );

        }
      );


      optionsContainer.appendChild(
        button
      );

    }
  );


  updateHeader();

}


// ============================================================
// HANDLE TECHNICAL ANSWER
// ============================================================

function handleAnswer(
  selectedIndex,
  selectedButton
) {

  if (questionLocked) {

    return;

  }


  const currentQ =
    quizData[currentIndex];


  if (!currentQ) {

    return;

  }


  questionLocked = true;


  const buttons =
    document.querySelectorAll(
      ".opt-btn"
    );


  buttons.forEach(
    function (button) {

      button.disabled = true;

      button.style.pointerEvents =
        "none";

    }
  );


  // ==========================================================
  // CORRECT
  // ==========================================================

  if (
    selectedIndex === currentQ.ans
  ) {

    correctTechCount++;


    if (selectedButton) {

      selectedButton.classList.add(
        "correct"
      );

    }


    const feedback =
      document.getElementById(
        "inline-feedback"
      );


    if (feedback) {

      feedback.innerText =
        "✓ Correct Answer! Clue Unlocked.";

      feedback.className =
        "feedback-banner correct";

      feedback.classList.remove(
        "hidden"
      );

    }


    unlockClue(
      currentQ,
      currentIndex
    );


    saveSessionState();


    showClueModal(
      currentQ.clueImage
    );


    return;

  }


  // ==========================================================
  // WRONG
  // ==========================================================

  wrongTechCount++;


  if (selectedButton) {

    selectedButton.classList.add(
      "wrong"
    );

  }


  buttons.forEach(
    function (button, index) {

      if (
        index === currentQ.ans
      ) {

        button.classList.add(
          "correct"
        );

      }

    }
  );


  const feedback =
    document.getElementById(
      "inline-feedback"
    );


  if (feedback) {

    feedback.innerText =
      "✗ Incorrect Answer!";

    feedback.className =
      "feedback-banner wrong";

    feedback.classList.remove(
      "hidden"
    );

  }


  saveSessionState();


  setTimeout(
    function () {

      advanceNextStep();

    },
    1000
  );

}


// ============================================================
// UNLOCK CLUE
// ============================================================

function unlockClue(
  currentQ,
  questionIndex
) {

  if (
    !currentQ ||
    !currentQ.clueImage
  ) {

    return;

  }


  const movieIndex =
    Number(
      currentQ.movieIndex
    );


  const questionNumber =
    (questionIndex %
      QUESTIONS_PER_MOVIE) + 1;


  const alreadyUnlocked =
    unlockedImages.some(
      function (clue) {

        return (
          Number(clue.movieIndex) ===
            movieIndex &&

          Number(clue.qNum) ===
            questionNumber
        );

      }
    );


  if (alreadyUnlocked) {

    return;

  }


  unlockedImages.push({

    movieIndex:
      movieIndex,

    qNum:
      questionNumber,

    imgSrc:
      currentQ.clueImage

  });


  saveSessionState();

}


// ============================================================
// SHOW CLUE MODAL
// ============================================================

function showClueModal(
  imagePath
) {

  const modal =
    document.getElementById(
      "clue-modal"
    );

  const image =
    document.getElementById(
      "modal-clue-img"
    );


  if (
    !modal ||
    !image
  ) {

    setTimeout(
      function () {

        advanceNextStep();

      },
      300
    );

    return;

  }


  image.src =
    imagePath;


  image.alt =
    "Unlocked movie clue";


  image.style.display =
    "block";


  image.onerror =
    function () {

      console.error(
        "Image not found:",
        imagePath
      );

    };


  modal.classList.remove(
    "hidden"
  );

}


// ============================================================
// CLOSE CLUE MODAL
// ============================================================

function closeClueModal() {

  const modal =
    document.getElementById(
      "clue-modal"
    );


  if (modal) {

    modal.classList.add(
      "hidden"
    );

  }


  advanceNextStep();

}


// ============================================================
// ADVANCE NEXT STEP
// ============================================================

function advanceNextStep() {

  questionLocked = false;


  // ==========================================================
  // Q5 / Q10 / Q15 / Q20 / Q25
  // ==========================================================

  if (
    (currentIndex + 1) %
      QUESTIONS_PER_MOVIE === 0
  ) {

    // IMPORTANT:
    // Q25 ALSO GOES TO MOVIE GUESS
    // DO NOT SEND Q25 DIRECTLY TO SCORE

    currentScreen =
      "CLUE";

    movieGuessLocked =
      false;

    saveSessionState();

    restoreCurrentScreen();

    return;

  }


  // ==========================================================
  // NEXT TECHNICAL QUESTION
  // ==========================================================

  currentIndex++;

  currentScreen =
    "QUIZ";

  movieGuessLocked =
    false;

  saveSessionState();

  restoreCurrentScreen();

}


// ============================================================
// RENDER CLUES BOARD
// ============================================================

function renderCluesBoard() {

  // ----------------------------------------------------------
  // CURRENT MOVIE
  // ----------------------------------------------------------

  const movieIndex =
    Math.floor(
      currentIndex /
      QUESTIONS_PER_MOVIE
    ) + 1;


  const clueMovieNum =
    document.getElementById(
      "clue-movie-num"
    );


  if (clueMovieNum) {

    clueMovieNum.innerText =
      movieIndex;

  }


  // ----------------------------------------------------------
  // GRID
  // ----------------------------------------------------------

  const grid =
    document.getElementById(
      "unlocked-clues-grid"
    );


  if (!grid) {

    return;

  }


  grid.innerHTML = "";


  // ----------------------------------------------------------
  // GET CURRENT MOVIE CLUES
  // ----------------------------------------------------------

  const movieClues =
    unlockedImages
      .filter(
        function (clue) {

          return (
            Number(
              clue.movieIndex
            ) === movieIndex
          );

        }
      )
      .sort(
        function (a, b) {

          return (
            Number(a.qNum) -
            Number(b.qNum)
          );

        }
      );


  // ----------------------------------------------------------
  // NO CLUES
  // ----------------------------------------------------------

  if (
    movieClues.length === 0
  ) {

    const message =
      document.createElement(
        "div"
      );


    message.innerText =
      "No clue images unlocked.";


    message.style.textAlign =
      "center";


    grid.appendChild(
      message
    );

  }


  // ----------------------------------------------------------
  // DISPLAY CLUES
  // ----------------------------------------------------------

  movieClues.forEach(
    function (clue) {

      const box =
        document.createElement(
          "div"
        );


      box.className =
        "clue-thumb-box";


      const image =
        document.createElement(
          "img"
        );


      image.src =
        clue.imgSrc;


      image.alt =
        `Clue ${clue.qNum}`;


      image.loading =
        "eager";


      box.appendChild(
        image
      );


      const label =
        document.createElement(
          "div"
        );


      label.innerText =
        `Clue #${clue.qNum}`;


      box.appendChild(
        label
      );


      grid.appendChild(
        box
      );

    }
  );


  // ----------------------------------------------------------
  // MOVIE INPUT
  // ----------------------------------------------------------

  const movieInput =
    document.getElementById(
      "movie-input"
    );


  if (movieInput) {

    movieInput.value = "";


    setTimeout(
      function () {

        movieInput.focus();

      },
      100
    );

  }


  // ----------------------------------------------------------
  // FEEDBACK
  // ----------------------------------------------------------

  const feedback =
    document.getElementById(
      "guess-feedback"
    );


  if (feedback) {

    feedback.innerText = "";

    feedback.className =
      "feedback-msg";

  }


  movieGuessLocked =
    false;

}


// ============================================================
// GET CURRENT MOVIE
// ============================================================

function getCurrentMovie() {

  const movieIndex =
    Math.floor(
      currentIndex /
      QUESTIONS_PER_MOVIE
    ) + 1;


  return quizData.find(
    function (question) {

      return (
        Number(
          question.movieIndex
        ) === movieIndex &&

        typeof question.actualName ===
          "string" &&

        question.actualName.trim() !== ""
      );

    }
  ) || null;

}


// ============================================================
// NORMALIZE MOVIE NAME
// ============================================================

function normalizeMovieName(
  value
) {

  return String(value || "")
    .toLowerCase()
    .replace(
      /[^a-z0-9]/g,
      ""
    )
    .trim();

}


// ============================================================
// LEVENSHTEIN DISTANCE
// ============================================================

function levenshteinDistance(
  a,
  b
) {

  const matrix = [];


  for (
    let i = 0;
    i <= b.length;
    i++
  ) {

    matrix[i] = [i];

  }


  for (
    let j = 0;
    j <= a.length;
    j++
  ) {

    matrix[0][j] = j;

  }


  for (
    let i = 1;
    i <= b.length;
    i++
  ) {

    for (
      let j = 1;
      j <= a.length;
      j++
    ) {

      if (
        b.charAt(i - 1) ===
        a.charAt(j - 1)
      ) {

        matrix[i][j] =
          matrix[i - 1][j - 1];

      }

      else {

        matrix[i][j] =
          Math.min(

            matrix[i - 1][j - 1] + 1,

            matrix[i][j - 1] + 1,

            matrix[i - 1][j] + 1

          );

      }

    }

  }


  return matrix[b.length][a.length];

}


// ============================================================
// CHECK MOVIE GUESS
// ============================================================

function isMovieGuessCorrect(
  userGuess,
  movie
) {

  if (!movie) {

    return false;

  }


  const cleanedGuess =
    normalizeMovieName(
      userGuess
    );


  if (!cleanedGuess) {

    return false;

  }


  // ----------------------------------------------------------
  // ACTUAL NAME
  // ----------------------------------------------------------

  const actualName =
    normalizeMovieName(
      movie.actualName
    );


  if (
    cleanedGuess ===
    actualName
  ) {

    return true;

  }


  // ----------------------------------------------------------
  // ALIASES
  // ----------------------------------------------------------

  const aliases =
    Array.isArray(movie.aliases)
      ? movie.aliases
      : [];


  for (
    const alias of aliases
  ) {

    const normalizedAlias =
      normalizeMovieName(
        alias
      );


    if (
      cleanedGuess ===
      normalizedAlias
    ) {

      return true;

    }

  }


  // ----------------------------------------------------------
  // SMALL SPELLING ERROR
  // ----------------------------------------------------------

  const distance =
    levenshteinDistance(
      cleanedGuess,
      actualName
    );


  if (
    cleanedGuess.length >= 4 &&
    distance <= 2
  ) {

    return true;

  }


  return false;

}


// ============================================================
// SUBMIT MOVIE GUESS
// ============================================================

function submitMovieGuess(e) {

  e.preventDefault();


  // Prevent double submit

  if (movieGuessLocked) {

    return;

  }


  const input =
    document.getElementById(
      "movie-input"
    );


  const feedback =
    document.getElementById(
      "guess-feedback"
    );


  if (
    !input ||
    !feedback
  ) {

    return;

  }


  const userGuess =
    input.value.trim();


  // ----------------------------------------------------------
  // EMPTY INPUT
  // ----------------------------------------------------------

  if (!userGuess) {

    feedback.innerText =
      "Please enter a movie name.";

    feedback.className =
      "feedback-msg wrong";

    input.focus();

    return;

  }


  // ----------------------------------------------------------
  // CURRENT MOVIE
  // ----------------------------------------------------------

  const movie =
    getCurrentMovie();


  if (!movie) {

    feedback.innerText =
      "Movie information not found.";

    feedback.className =
      "feedback-msg wrong";

    console.error(
      "Movie information not found."
    );

    return;

  }


  // ----------------------------------------------------------
  // CHECK ANSWER
  // ----------------------------------------------------------

  const correct =
    isMovieGuessCorrect(
      userGuess,
      movie
    );


  // ==========================================================
  // CORRECT MOVIE
  // ==========================================================

  if (correct) {

    feedback.innerText =
      `✓ Correct! Movie: ${movie.actualName}`;

    feedback.className =
      "feedback-msg correct";


    movieGuessLocked =
      true;


    saveSessionState();


    // IMPORTANT:
    // Correct answer -> next movie / score

    setTimeout(
      function () {

        goToNextMovie();

      },
      1000
    );


    return;

  }


  // ==========================================================
  // WRONG MOVIE
  // ==========================================================

  feedback.innerText =
    `✗ Wrong! Correct movie: ${movie.actualName}`;

  feedback.className =
    "feedback-msg wrong";


  movieGuessLocked =
    true;


  saveSessionState();


  // IMPORTANT:
  // WRONG ANSWER ALSO MOVES FORWARD

  setTimeout(
    function () {

      goToNextMovie();

    },
    1000
  );

}


// ============================================================
// GO TO NEXT MOVIE
// ============================================================

function goToNextMovie() {

  // ----------------------------------------------------------
  // Q5  -> Q6
  // Q10 -> Q11
  // Q15 -> Q16
  // Q20 -> Q21
  // Q25 -> SCORE
  // ----------------------------------------------------------

  currentIndex++;


  // ==========================================================
  // GAME COMPLETE
  // ==========================================================

  if (
    currentIndex >=
    TOTAL_QUESTIONS
  ) {

    currentIndex =
      TOTAL_QUESTIONS - 1;


    currentScreen =
      "SCORE";


    stopTimer();

    saveSessionState();

    restoreCurrentScreen();

    return;

  }


  // ==========================================================
  // NEXT MOVIE
  // ==========================================================

  currentScreen =
    "QUIZ";


  questionLocked =
    false;


  movieGuessLocked =
    false;


  saveSessionState();

  restoreCurrentScreen();

}


// ============================================================
// FINISH GAME
// ============================================================

function finishGame() {

  stopTimer();


  // ==========================================================
  // TEAM INFORMATION
  // ==========================================================

  const finalTeamInfo =
    document.getElementById(
      "final-team-info"
    );


  if (finalTeamInfo) {

    let members =
      member1;


    if (member2) {

      members +=
        `, ${member2}`;

    }


    finalTeamInfo.innerText =
      `Team: ${teamName} (${members})`;

  }


  // ==========================================================
  // FINAL TIME
  // ==========================================================

  const finalTime =
    document.getElementById(
      "final-time"
    );


  if (finalTime) {

    const minutes =
      Math.floor(
        totalTimeSeconds / 60
      )
        .toString()
        .padStart(2, "0");


    const seconds =
      (
        totalTimeSeconds % 60
      )
        .toString()
        .padStart(2, "0");


    finalTime.innerText =
      `${minutes}:${seconds}`;

  }


  // ==========================================================
  // TECHNICAL SCORE
  // ==========================================================

  const finalTechScore =
    document.getElementById(
      "final-tech-score"
    );


  if (finalTechScore) {

    finalTechScore.innerText =
      `${correctTechCount}/${TOTAL_QUESTIONS}`;

  }


  // ==========================================================
  // SCORE
  // ==========================================================

  /*
  
    TECHNICAL QUESTIONS = 70 MARKS

    TIME = 30 MARKS

    First 5 minutes = 30 marks

    After 5 minutes:
    Every 30 seconds = -1 mark

    TOTAL = 100 MARKS

  */


  const technicalScore =
    (
      correctTechCount /
      TOTAL_QUESTIONS
    ) * 70;


  let timeScore =
    30;


  // ----------------------------------------------------------
  // TIME PENALTY
  // ----------------------------------------------------------

  if (
    totalTimeSeconds > 300
  ) {

    const extraSeconds =
      totalTimeSeconds - 300;


    const penalty =
      Math.floor(
        extraSeconds / 30
      );


    timeScore =
      Math.max(
        0,
        30 - penalty
      );

  }


  // ----------------------------------------------------------
  // FINAL SCORE
  // ----------------------------------------------------------

  let finalScore =
    Math.round(
      technicalScore +
      timeScore
    );


  finalScore =
    Math.max(
      0,
      Math.min(
        100,
        finalScore
      )
    );


  // ==========================================================
  // DISPLAY FINAL SCORE
  // ==========================================================

  const finalScoreElement =
    document.getElementById(
      "final-score"
    );


  if (finalScoreElement) {

    finalScoreElement.innerText =
      `${finalScore} / 100`;

  }


  // ==========================================================
  // TECHNICAL MARK
  // ==========================================================

  const technicalMarkElement =
    document.getElementById(
      "technical-score"
    );


  if (technicalMarkElement) {

    technicalMarkElement.innerText =
      `${Math.round(technicalScore)} / 70`;

  }


  // ==========================================================
  // TIME MARK
  // ==========================================================

  const timeMarkElement =
    document.getElementById(
      "time-score"
    );


  if (timeMarkElement) {

    timeMarkElement.innerText =
      `${timeScore} / 30`;

  }


  // ==========================================================
  // WRONG TECHNICAL COUNT
  // ==========================================================

  const finalWrongTech =
    document.getElementById(
      "final-wrong-tech"
    );


  if (finalWrongTech) {

    finalWrongTech.innerText =
      wrongTechCount;

  }


  // ==========================================================
  // FINAL HEADER
  // ==========================================================

  const movieNum =
    document.getElementById(
      "current-movie-num"
    );


  if (movieNum) {

    movieNum.innerText =
      TOTAL_MOVIES;

  }


  const questionNum =
    document.getElementById(
      "current-q-num"
    );


  if (questionNum) {

    questionNum.innerText =
      TOTAL_QUESTIONS;

  }


  currentScreen =
    "SCORE";


  saveSessionState();

}


// ============================================================
// RESTART GAME
// ============================================================

function restartGame() {

  stopTimer();


  const registrationForm =
    document.getElementById(
      "reg-form"
    );


  if (registrationForm) {

    registrationForm.reset();

  }


  localStorage.removeItem(
    STORAGE_KEY
  );


  resetApplication();

  restoreCurrentScreen();

}


// ============================================================
// BEFORE PAGE CLOSE
// ============================================================

window.addEventListener(
  "beforeunload",
  function () {

    if (
      currentScreen !==
      "REGISTER"
    ) {

      saveSessionState();

    }

  }
);


// ============================================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ============================================================

window.handleRegistration =
  handleRegistration;

window.submitMovieGuess =
  submitMovieGuess;

window.closeClueModal =
  closeClueModal;

window.restartGame =
  restartGame;


// ============================================================
// DEBUG
// ============================================================

console.log(
  "============================================"
);

console.log(
  "CTRL + GUESS loaded successfully."
);

console.log(
  `Total Questions: ${TOTAL_QUESTIONS}`
);

console.log(
  `Total Movies: ${TOTAL_MOVIES}`
);

console.log(
  "Movie 1: Sillunu Oru Kadhal"
);

console.log(
  "Movie 2: 96"
);

console.log(
  "Movie 3: Kaithi"
);

console.log(
  "Movie 4: Mersal"
);

console.log(
  "Movie 5: Pa Paandi"
);

console.log(
  "Technical Score: 70"
);

console.log(
  "Time Score: 30"
);

console.log(
  "============================================"
);
