document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
  
    function checkInView() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add("in-view");
        } else {
          section.classList.remove("in-view");
        }
      });
    }
  
    window.addEventListener("scroll", checkInView);
    window.addEventListener("resize", checkInView);
  
    checkInView();

    const questions = document.querySelectorAll('.Q-card');
    let currentQuestionIndex = 0;

    function showQuestion(index) {
        // Hide all questions
        questions.forEach(question => {
            question.style.display = 'none';
        });
        // Show the current question
        questions[index].style.display = 'block';
    }

    function handleAnswerClick(event) {
        const selectedAnswer = event.target;
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer.classList.contains('answer')) {
          feedback = document.getElementById('feedback');
            if (selectedAnswer.classList.contains('right')) {
                // User selected the correct answer
                console.log('Correct!');
                feedback.style.top=100+'px';
                feedback.style.right=380+'px';
                feedback.style.scale=1;

                feedback.textContent='good job!';
                feedback.style.display = 'block';
                feedback.classList.add('slap'); //'slap' class to trigger animation
    
                //timer to hide the message div after 0.5 seconds
                setTimeout(function() {
                    feedback.style.display = 'none'; // Hide the feedback div
                    feedback.classList.remove('slap'); //'slap' class to stop animation
                }, 500); 
                // Hide the current question
                currentQuestion.style.display = 'none';
                // Move to the next question
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion(currentQuestionIndex);
                } else {
                  feedback.style.top=350+'px';
                  feedback.style.right=40+'%';
                  feedback.textContent="Quiz Done!";
                  feedback.style.scale=2;
                  
                  start = document.getElementById('startGame');
                  start.textContent="Play Again"
                  start.style.visibility='visible';
                  currentQuestionIndex=0;
                
                }
            } else {
                // User selected the wrong answer
                feedback.style.top=100+'px';
                feedback.style.right=380+'px';
                feedback.style.scale=1;

                console.log('Incorrect! Please try again.');
                feedback.textContent='Try Again!';
                feedback.style.display = 'block';
                feedback.classList.add('slap'); //'slap' class to trigger animation
    
                //timer to hide the message div after 2 seconds
                setTimeout(function() {
                    feedback.style.display = 'none'; // Hide the feedback div
                    feedback.classList.remove('slap');
                }, 500); 
                
            }
        }
    }

    //click event listener to each answer div
    questions.forEach(question => {
        question.addEventListener('click', handleAnswerClick);
    });
    showQuestion(-1);

  });

  function startGame(){

    document.getElementById('startGame').style.visibility='hidden'; //hide the button
 
    questions= document.querySelectorAll('.Q-card'); //get the question cards
  current_question = questions[0]; //get question 1

if(current_question.style.display=='none') {
  current_question.style.display='block'; //show question 1
}


  }


  