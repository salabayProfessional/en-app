import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { shuffle } from '../../../../specialFunction/specialFunction';
import DictionaryOptions from './components/DictionaryOptions/DictionaryOptions';
import TableWords from './components/DictionaryPart/DictionaryPart';
import "./Dictionary.scss";
import Row from "../../../../component/Row/Row";
import { useAppSelector } from "../../../../hooks/useRedux";

const Dictionary: React.FC = () => {
  const [isList, setIsList] = useState(false);
  const toggleList = () => setIsList(!isList);
  const dictionaries = useAppSelector((state) => state.dictionary.dictionaryTests);
  const [activeDictionary, setActiveDictionary] = useState<any>(dictionaries[0]);
  const [isHideColumnUa, setIsHideColumnUa] = useState(false);
  const [isHideColumnEn, setIsHideColumnEn] = useState(false);
  const toggleHideColumnUa = () => setIsHideColumnUa(!isHideColumnUa);
  const toggleHideColumnEn = () => setIsHideColumnEn(!isHideColumnEn);
  const { register, handleSubmit, reset } = useForm();

  interface DictionaryPart {name: string, words: {en: string, ua: string}}

  const toggleActiveItem = (dictionary: DictionaryPart) => {
    if(dictionary.name === activeDictionary) {
      return
    } else {
      setActiveDictionary(dictionary);
    }
  }

  const randomDictionaryWords = (activeDictionary: any) => {
    setActiveDictionary({
      name: activeDictionary.name, 
      words: shuffle(activeDictionary.words)
    });
  };

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="dictionary">
        <Row 
          Left={(
            <div className="table-words">
              <TableWords 
                activeDictionary={activeDictionary} 
                register={register}
                isHideColumnUa={isHideColumnUa}
                isHideColumnEn={isHideColumnEn}
              />
            </div>
          )}
          Right={(
            <DictionaryOptions 
                isList={isList}
                activeDictionary={activeDictionary}
                randomDictionaryWords={randomDictionaryWords}
                toggleActiveItem={toggleActiveItem}
                toggleList={toggleList}
                reset={reset}
                toggleHideColumnUa={toggleHideColumnUa}
                toggleHideColumnEn={toggleHideColumnEn}
            />
          )}
          rightWidth={3}
          leftWidth={9}
        />
      </div>
    </form>
  );
};

export default Dictionary;