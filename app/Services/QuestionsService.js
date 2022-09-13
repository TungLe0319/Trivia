import { appState } from '../AppState.js';
import { Question } from '../Models/Question.js';
import { questionServer } from './AxiosService.js';

class QuestionsService {
  // always mark the function async
  async getQuestions() {
    //REVIEW example of issuing get requests
    // ?amount=10 TODO query params
    const res = await questionServer.get('/api.php', {
      //URL fragment
      params: {
        amount: 10,
        type: 'multiple',
      },
    });
    console.log('what the heck is the result?', res.data.results);
    // iterate over every item in the list and do some action and whatever it does i return
    //raw data goes into question and becomes new object

    appState.questions = res.data.results.map(
      (rawData) => new Question(rawData)
    );
    // console.log('appState.questions', appState.questions);
  }

 
}

export const questionsService = new QuestionsService();
