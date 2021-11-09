export interface ModalInfoTypes {
  test: any,
  isModal: boolean,
  toggle: () => void,
}

export interface ModalType {
  isModal: boolean,
  toggle: () => void,
  create?: "test" | "dictionary"
}

export interface InitialValuesModalCreate {
  name: string,
  options: {
    amount: number,
    type: string,
    timer: number,
  },
  words: { 
    en: string, 
    ua: string 
  }[],
}