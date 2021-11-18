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
    randomID.push(Math.floor(Math.random() * 68));
  };

  randomID.map((id: any) => result.words.push(words[id]));

  return result
};

const checkAnswer = (word: string, answer: string) => {
  const splitWord = word.toLowerCase().split("");
  const splitAnswer = answer.toLowerCase().split("");
  const necessary = splitWord.length / 100 * 80;
  let coincidence = 0;
  for(let i = 0;i < splitAnswer.length;i++) {
    if(splitAnswer[i] === splitWord[i]) {
      coincidence += 1;
    }else {
      coincidence -= 1
    };
  };
  return coincidence >= necessary;
};

const makeTest = createTest(allWords);

export {
  shuffle,
  generateString,
  equalAnswerAndWord,
  makeTest,
}
