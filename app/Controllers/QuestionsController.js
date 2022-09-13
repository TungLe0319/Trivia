import { appState } from '../AppState.js';
import { questionsService } from '../Services/QuestionsService.js';
import { Pop } from '../Utils/Pop.js';
import { setHTML } from '../Utils/Writer.js';

function drawQuestions() {
  let template = '';
  appState.questions.forEach((q) => (template += q.QuestionTemplate));
  setHTML('api-questions', template);
}

export class QuestionsController {
  constructor() {
    console.log('controller');
    appState.on('questions', drawQuestions);
  
    this.getTriviaQuestions()
  }

  //NOTE ALWAYS when making an async call use a try catch
  //
  async getTriviaQuestions() {
    try {
      await questionsService.getQuestions();

    } catch (error) {
      console.error('[getTriviaQuestions]', error);
      Pop.error(error);
    }
  }
}
