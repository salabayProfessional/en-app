import { allWords } from "../mockData/words";

const generateString = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

const shuffle = (array: any) => {
  return array.sort(() => Math.random() - 0.5);
};

const equalAnswerAndWord = (
  test: any,
  answers: string[],
  options: any,
  random: number[],
  startTime: string,
) => {
  const type =  options.type === "en-ua" ? "ua" : "en";
  const words = test.words.map((word: any) => word[type].toLowerCase());
  const sortAnswers = random.map((_, idx) => answers[random.findIndex((e) => e === idx) as any]);

  const audit = words.filter((word: string, idx: number) => checkAnswer(word, sortAnswers[idx]));
  const endDate = new Date();

  return {
    name: test?.name? test.name : "random",
    type: options.type,
    words: test.words,
    result: audit,
    answers: sortAnswers,
    options,
    endDate,
    startTime,
  };
};

const createTest: any = (words: any) => (amount: number = 10) => {
  let randomID = [];
  let result: any = {name: generateString(), words: []};

  for(let i = 0; i < amount ; i++) {
    randomID.push(Math.floor(Math.random() * 124));
  };

  randomID.map((id: any) => result.words.push(words[id]));

  return result
};

const checkAnswer = (word: string, answer: string) => {
  return answer.toLowerCase().includes(word);
};

const makeTest = createTest(allWords);

export {
  shuffle,
  generateString,
  equalAnswerAndWord,
  makeTest,
}

// const checkAnswer = (word, answer) => {
//   const splitWord = f(word.split(""));
//   const splitAnswer = f(answer.split(""));
//   const coincidence = splitWord.filter((l) => splitAnswer.includes(l));
//   const necessaryTrue = coincidence.length / 100 * 80;
//   const result = coincidence.length >= necessaryTrue? true : false;
//   return {result,splitWord, splitAnswer, coincidence, necessaryTrue, result }
// };
