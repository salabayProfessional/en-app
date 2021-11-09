import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { Spinner } from "reactstrap";
import { BTN_BG } from "../../classes";
import { useAppSelector } from "../../hooks/useRedux";
import { generateString } from "../../specialFunction/specialFunction";
import { add_word_own_dictionary, add_part_own_dictionary } from "../../store/slices/authReducer";
import { WordData } from "../../store/slices/types";
import "./SearchWord.scss";
const arr = ["firstly", "secondly", "third"];

const SearchWord: React.FC = () => {
  const API_BASE = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const dispatch = useDispatch();

  const [data, setData] = useState<WordData[]>([]);
  const [loading, setLoading] = useState(false);
  const ownDictionary = useAppSelector(state => state.auth.dictionary);

  interface InitialState {
    word: string
  }

  const initialState : InitialState= {
    word: "",
  }

  const onSubmit = async (values: InitialState) => {
    setLoading(true);
    axios.get(API_BASE + values.word)
    .then((d: any) => {
      setData(d.data);
      setLoading(false);
    })
  };

  useEffect(() => console.log("update"), [data]);

  const dispatchWord = (obj: any) => {
    const length = ownDictionary.length; //last idx
    if(ownDictionary[length - 1].words.length >= 30) {
      dispatch(add_part_own_dictionary({part: arr[length], words: [obj]}));
    }else {
      dispatch(add_word_own_dictionary(obj));
    }
    
  }

  return (
    <div className="search-word col-12">
      <Formik  
        onSubmit={onSubmit}
        initialValues={initialState}
      >
        {
          () => {
            return (
              <Form className="search-panel col-12">
                <Field className="form-control btn-bg" placeholder="word" name="word" />
                <div className="info-panel">
                  {
                    loading? <Spinner /> : (
                      data?.map((d: WordData) => {
                        return (
                          <div key={generateString()}>
                            <h4>{d.word}</h4>
                            <p><b>Phonetics:</b> {d?.phonetics[0]?.text}</p>
                            <p><b>Meanings:</b> part of speech: {d?.meanings[0]?.partOfSpeech}<br /></p>
                            <p><b>Definitions:</b> {d?.meanings[0]?.definitions[0]?.definition}<br /></p>
                            <p><b>Synonyms:</b> {d?.meanings[0]?.definitions[0]?.synonyms.map((synonym: string) => <span>{synonym}, </span>)}<br /></p>
                            <p><b>Example:</b> {d?.meanings[0]?.definitions[0]?.example}<br /></p>
                            <p><b>Origin</b> {d?.origin}<br /></p>
                            <button 
                              className={BTN_BG} type="button" 
                              onClick={() => dispatchWord({word: data})}>ADD IN DICTIONARY</button>
                          </div>
                        )
                      })
                    )
                  }
                </div>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
};

export default SearchWord;
