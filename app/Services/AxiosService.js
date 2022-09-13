// slightly different then our typical service
// https://opentdb.com/    api.php?amount=10

export  const questionServer = axios.create({
  baseURL: 'https://opentdb.com', //must be capital URL
  timeout: 3500, //how long we're willing to wait for a response for the data
});
