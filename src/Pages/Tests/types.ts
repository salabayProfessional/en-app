export interface InitialValues {
  answer: any,
  answers: any,
};

export interface ViewProps {
  test: {name: string, words: {en: string, ua: string}[]} | any,
  count: number,
  end: boolean,
  start: boolean,
  toggleOptions: () => void,
  options: any,
  // errors: any, 
  // touched: any,
  randomWords: any,
  startTest: any,
	sendAnswer: any,
	setFieldValue: any,
	values: InitialValues,
};