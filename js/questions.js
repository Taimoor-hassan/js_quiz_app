window.onload = function () {
    show(question_count);

};

let questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    }
];

var question_count = 0;
var point=0;

function next() {
    let option=document.querySelector('li.option.active').innerHTML;

    if (option==questions[question_count].answer) {
        point=point+10;
        sessionStorage.setItem('points',point);
    };

    if (question_count == questions.length-1) {
        location.href='end.html';
        return;
    }
    question_count++;

    show(question_count);

}

function show(count) {
    let question = document.getElementById("question");

    //question.innerHTML='<h2 style="text-align: center; padding-top: 30px;">'+questions[count].question+'<h2>';
    //or
    question.innerHTML = `<h2 style="text-align: center; padding-top: 30px;">Q  ${[count+1 ]}:${questions[count].question} </h2>
      <ul>
                  <li class="option">${questions[count].options[0]}</li>
                  <li class="option">${questions[count].options[1]}</li>
                  <li class="option">${questions[count].options[2]}</li>
                  <li class="option">${questions[count].options[3]}</li>
               </ul>`
        ;
    act();
    
}

function act() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}

    //timer

    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    var s=0;
    setInterval(setTime, 1000);
    
    function setTime() {
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      c=minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
      s=s+1;
      sessionStorage.setItem('time',s);
    
      if (c ==1) {
        location.href='end.html';

      }
    }
    
    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }