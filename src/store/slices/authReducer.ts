import {createSlice} from '@reduxjs/toolkit';
import { AuthReducer } from './types';

const findPart = (partName: string, state: AuthReducer) => state.dictionary.findIndex((item) => item.part === partName);
const foundWord = (word: string, state: AuthReducer, partIdx: number) => state.dictionary[partIdx].words.findIndex((item) => item.word === word);

const initialState: AuthReducer = {
  authentication: true,
  role: "admin",
  name: "oleg",
  surname: "salabay",
  email: "olegsalabaymac@gmail.com",
  photo: "",
  describe: "",
  password: "1234",
  dictionary: [],
  homework: [],
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
      log_out: (state) => {
        state.authentication = false
      },
      sign_in: (state) => {
        state.authentication = true
      },
      add_part_own_dictionary: (state, {payload}) => {
        state.dictionary = [...state.dictionary, payload];
      },
      add_word_own_dictionary: (state, {payload}) => {
        const length = state.dictionary.length;
        state.dictionary[length - 1].words = [...state.dictionary[length - 1].words, ...payload.word];
      },
      remove_word: (state, {payload}) => {
        const {word, part} = payload;
        const foundedPart = findPart(part, state);
        const foundedWord = foundWord(word, state, foundedPart);

        state.dictionary[foundedPart].words = [
          ...state.dictionary[foundedPart].words.slice(0, foundedWord), 
          ...state.dictionary[foundedPart].words.slice(foundedWord + 1, )
        ]
      },
      add_home_work: (state, {payload}) => {
        state.homework = [...state.homework, payload];
      },
      remove_home_work: (state, {payload}) => {
        console.log(state, payload.name)
      },
      setRole: (state, {payload}) => {
        state.role = payload;
      }
    },
});

export const { 
  log_out, 
  sign_in, 
  add_word_own_dictionary, 
  add_part_own_dictionary, 
  remove_word, 
  add_home_work,
  remove_home_work,
  setRole,
} = auth.actions;

export default auth.reducer;