import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import DictionaryOptions from './components/DictionaryOptions/DictionaryOptions';
import TableWords from './components/DictionaryPart/DictionaryPart';
import "./Dictionary.scss";
import Row from "../../../../component/Row/Row";
import { useHomeWork } from '../../../../hooks/useHomeWork';

interface DictionaryPart {
  name: string, 
  words: {
    en: string, 
    ua: string
  }
};

const Dictionary: React.FC = () => {
  const [isList, setIsList] = useState(false);
  const toggleList = () => setIsList(!isList);
  const homeWorks = useHomeWork();
  const [activeHomeWork, setActiveHomeWork] = useState<any>();
  const [isHideColumnUa, setIsHideColumnUa] = useState(false);
  const [isHideColumnEn, setIsHideColumnEn] = useState(false);

  const toggleHideColumnUa = () => setIsHideColumnUa(!isHideColumnUa);
  const toggleHideColumnEn = () => setIsHideColumnEn(!isHideColumnEn);
  const setActiveNewItem = (dictionary: DictionaryPart) => {
    if(dictionary.name === activeHomeWork) {
      return
    } else {
      setActiveHomeWork(dictionary);
    }
  }

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if(homeWorks) {
      setActiveHomeWork(homeWorks[0]);
    }
  }, [homeWorks])

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
                activeHomeWork={activeHomeWork} 
                register={register}
                isHideColumnUa={isHideColumnUa}
                isHideColumnEn={isHideColumnEn}
              />
            </div>
          )}
          Right={(
            <DictionaryOptions 
                isList={isList}
                activeHomeWork={activeHomeWork}
                setActiveNewItem={setActiveNewItem}
                toggleList={toggleList}
                reset={reset}
                toggleHideColumnUa={toggleHideColumnUa}
                toggleHideColumnEn={toggleHideColumnEn}
                homeWorks={homeWorks}
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