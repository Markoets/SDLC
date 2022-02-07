(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Which modal is the oldest",
        answers: {
          a: "Agile",
          b: "Spiral",
          c: "Waterfall"
        },
        correctAnswer: "c"
      },
      {
        question: "Which one has work done regularly iterated cycles known as sprints",
        answers: {
          a: "Iterative",
          b: "Prototyping",
          c: "Agile"
        },
        correctAnswer: "c"
      },
      {
        question: "On which modal you can't go back to an earlier stage before maintenance stage",
        answers: {
          a: "Spiral",
          b: "V-shape",
          c: "Agile",
          d: "Waterfall"
        },
        correctAnswer: "d"
      },
      {
        question: "Which one is favored for large,expensive and complicated projects",
        answers: {
          a: "Agile",
          b: "V-shape",
          c: "Waterfall",
          d: "Spiral"
        },
        correctAnswer: "d"
      },
      {
        question: "Which is used if customers do not know the exact project requirements beforehand",
        answers: {
          a: "Prototyping",
          b: "Waterfall",
          c: "Agile",
          d: "Spiral"
        },
        correctAnswer: "a"
      },      {
        question: "Which one combines  iterative development process model with elements of the Waterfall model",
        answers: {
          a: "Spiral",
          b: "V-Shape",
          c: "Agile",
          d: "Prototyping"
        },
        correctAnswer: "a"
      },      {
        question: "It is also known as Verification and Validation model",
        answers: {
          a: "Agile",
          b: "Waterfall",
          c: "V-Shape",
          d: "Spiral"
        },
        correctAnswer: "c"
      },     {
        question: "How many modals did we study",
        answers: {
          a: "3",
          b: "5",
          c: "6",
          d: "7"
        },
        correctAnswer: "c"
      },
      {
        question: "Which one is used if the requirements are stable and not changed frequently",
        answers: {
          a: "Waterfall",
          b: "Agile",
          c: "V-Shape",
          d: "Spiral"
        },
        correctAnswer: "a"
      },    {
        question: "How long do  iterated cycles known as sprints usally last",
        answers: {
          a: "two to four weeks",
          b: "two to four hours",
          c: "fifteen to fifty min",
          d: "two days"
        },
        correctAnswer: "a"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();