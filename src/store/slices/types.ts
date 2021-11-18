export interface DictionaryReducer {
  dictionaryWords: {en: string, ua: string}[],
  dictionaryTests: {
    name: string,
    id: any,
    words: {
      en: string, ua: string,
    }[],
  }[],
};

export interface OptionsReducer {
  options: {
    timer: number,
    words: number,
    random: boolean,
    type: string
  }
};

export interface ResultReducer {
  results: {
    name: string
    answers: string[],
    result: string[],
    words: {en: string, ua: string}[],
    type: string,
    options: {
      timer: number,
      words: number,
      type: string,
      random: boolean,
    },
    random: number[],
    date: string,
  }[]
};

export interface TestsReducer {
  start: boolean,
  test: {
    name: string,
    words: { en: string, ua: string }[],
    type: string,
    from: string,
  } | null,
  allTests: any,
  allHomeworks: {
    name: string,
    words: {
      en: string, ua: string,
    }[],
  }[],
};

export interface AuthReducer {
  authentication: boolean,
  role: "admin" | "free" | "super" | "expert",
  name: string,
  surname: string,
  email: string,
  photo: string,
  describe: string,
  password: string,
  dictionary: { part: string, words: WordData[] }[],
  homework: { name: string, words: {en: string, ua: string}[]}[] | [],
}

export interface RootReducer {
  tests: TestsReducer,
  options: OptionsReducer,
  result: ResultReducer,
  dictionary: DictionaryReducer,
  auth: AuthReducer,
};


export interface WordData {
  word: string,
  phonetics: {
    audio: string
    text: string
  }[], 
  meanings: {partOfSpeech: string, definitions: {
    definition: string, 
    example: string, 
    synonyms: string[], 
    antonyms: string[],
  }[]}[],
  origin: string,
  phonetic: string
};