import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";



export class Question {
  constructor(data) {
    this.category = data.category;
    this.correct_answer = data.correct_answer;
    this.difficulty = data.difficulty;
    this.incorrect_answers = data.incorrect_answers;
    this.question = data.question;
    this.type = data.type;
  }

  get QuestionTemplate() {
    return /*html */ `

  <div class = "col-md-4  mx-2 my-2 ">
    <div class="card p-2 elevation-2">
   
<h5 class="">Question: </h5>
   <span class=""> <h6>${this.question}</h6></span> 
   <div class="d-flex  flex-column p-1 ms-2 m-3">
   
    <p class="selectable">${this.incorrect_answers[0]}</p>
    <p >${this.incorrect_answers[2]}</p>
    <p>${this.correct_answer}</p>
    <p >${this.incorrect_answers[1]}</p>
   </div>
  
  
<div class="dropdown d-flex justify-content-end">
  <button class="btn one w-50 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Answer:
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item " >${this.correct_answer}</a></li>

  </ul>
</div>

<div></div>
   </div>
  </div>
  
  `;
  }
 
}





// adapt the data to my needs
//this.id = data._id
//this.photo = data.photoUrl
